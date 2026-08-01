import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 items-center gap-16">
        
        {/* Left */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            <Sparkles size={16} />
            Learn • Teach • Grow
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Exchange
            <span className="text-green-600"> Skills</span>

            <br />

            Build Your
            <span className="text-green-600"> Future</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Learn new skills from talented people, share your own expertise,
            and grow together through meaningful skill exchanges.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/browse-skills"
              className="btn bg-green-600 hover:bg-green-700 border-none text-white rounded-xl px-7 h-13"
            >
              Browse Skills
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/register"
              className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl px-7 h-13"
            >
              Join Now
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="relative flex justify-center">

          <div className="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-40 scale-90"></div>

          <img
            src={heroImage}
            alt="SkillSwap Hero"
            className="relative w-full max-w-lg rounded-3xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;