import React from "react";
import { Link } from "react-router-dom";
import { Handshake } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {

  const links = [
    { name: "Home", path: "/" },
    { name: "Browse Skills", path: "/browse-skills" },
    { name: "Add Skill", path: "/add-skill" },
    { name: "My Skills", path: "/my-skills" },
  ];


  const categories = [
    "Web Development",
    "Programming",
    "Mobile Development",
    "UI / UX Design",
    "Digital Marketing",
  ];


  const socials = [
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
  ];


  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">


          {/* Logo Section */}
          <div>

            <Link to="/" className="flex items-center gap-3">

              <div className="
                bg-green-600 
                text-white 
                w-10 h-10 
                rounded-lg 
                flex items-center justify-center
              ">
                <Handshake size={22}/>
              </div>


              <h2 className="text-2xl font-bold text-white">
                <span className="text-green-500">
                  Skill
                </span>
                Swap
              </h2>

            </Link>


            <p className="mt-4 text-sm text-gray-400">
              Share skills, learn new things and grow together.
            </p>


            <div className="flex gap-3 mt-5">

              {
                socials.map((Icon,index)=>(
                  <a
                    key={index}
                    className="
                    w-9 h-9 
                    rounded-full 
                    bg-gray-800
                    flex items-center justify-center
                    hover:bg-green-600
                    hover:text-white
                    "
                  >
                    <Icon size={18}/>
                  </a>
                ))
              }

            </div>

          </div>



          {/* Links */}
          <div>

            <h3 className="text-white font-bold mb-4">
              Quick Links
            </h3>


            {
              links.map(item=>(
                <Link
                  key={item.path}
                  to={item.path}
                  className="
                  block 
                  mb-3 
                  text-sm
                  hover:text-green-500
                  "
                >
                  {item.name}
                </Link>
              ))
            }

          </div>



          {/* Categories */}
          <div>

            <h3 className="text-white font-bold mb-4">
              Categories
            </h3>


            {
              categories.map(category=>(
                <p
                  key={category}
                  className="
                  mb-3 
                  text-sm
                  hover:text-green-500
                  cursor-pointer
                  "
                >
                  {category}
                </p>
              ))
            }

          </div>



          {/* Contact */}
          <div>

            <h3 className="text-white font-bold mb-4">
              Contact
            </h3>


            <p className="text-sm mb-3">
              support@skillswap.com
            </p>


            <p className="text-sm mb-3">
              +880 123 456 789
            </p>


            <p className="text-sm">
              Bangladesh
            </p>


          </div>


        </div>



        <div className="
          border-t 
          border-gray-800 
          mt-10 
          pt-6 
          text-center
          text-sm
        ">

          © {new Date().getFullYear()} SkillSwap. All rights reserved.

        </div>


      </div>

    </footer>
  );
};


export default Footer;