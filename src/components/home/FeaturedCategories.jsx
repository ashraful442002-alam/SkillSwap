import React from "react";
import {
  Code2,
  Palette,
  Languages,
  Music4,
  Camera,
  Laptop,
} from "lucide-react";

const categories = [
  {
    id: 1,
    icon: <Code2 size={40} />,
    title: "Programming",
    description: "Web, App, AI, DSA",
  },
  {
    id: 2,
    icon: <Palette size={40} />,
    title: "Design",
    description: "UI/UX, Figma, Photoshop",
  },
  {
    id: 3,
    icon: <Languages size={40} />,
    title: "Languages",
    description: "English, Arabic, Japanese",
  },
  {
    id: 4,
    icon: <Music4 size={40} />,
    title: "Music",
    description: "Guitar, Piano, Vocal",
  },
  {
    id: 5,
    icon: <Camera size={40} />,
    title: "Photography",
    description: "Editing & Camera Skills",
  },
  {
    id: 6,
    icon: <Laptop size={40} />,
    title: "Technology",
    description: "Computer & Software",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-24">

      <div className="text-center">

        <p className="text-green-600 font-semibold">
          Categories
        </p>

        <h2 className="text-4xl font-bold mt-3 text-gray-900">
          Explore Popular Skills
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Browse different skill categories and connect with
          people who can teach or learn together.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {categories.map((category) => (

          <div
            key={category.id}
            className="
            bg-white
            rounded-3xl
            border
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all
            duration-300
            cursor-pointer
            "
          >
            <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
              {category.icon}
            </div>

            <h3 className="text-2xl font-bold mt-6">
              {category.title}
            </h3>

            <p className="text-gray-500 mt-3">
              {category.description}
            </p>
          </div>

        ))}

      </div>

    </section>
  );
};

export default FeaturedCategories;