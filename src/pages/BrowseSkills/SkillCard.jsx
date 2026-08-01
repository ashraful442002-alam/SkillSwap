import React from "react";
import { Link } from "react-router-dom";

const SkillCard = ({ skill }) => {
  const {
    _id,
    title,
    category,
    description,
    availability,
    location,
    userName,
  } = skill;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between">

      {/* Top */}
      <div>

        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
          {category}
        </span>

        <h2 className="text-2xl font-bold mt-4 text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600 mt-3 line-clamp-3">
          {description}
        </p>

      </div>

      {/* Middle */}
      <div className="mt-6 space-y-2 text-sm text-gray-600">

        <p>
          <span className="font-semibold">Teacher:</span> {userName}
        </p>

        <p>
          <span className="font-semibold">Availability:</span> {availability}
        </p>

        <p>
          <span className="font-semibold">Mode:</span> {location}
        </p>

      </div>

      {/* Bottom */}
      <Link
        to={`/skills/${skill._id}`}
        className="btn bg-green-600 hover:bg-green-700 text-white border-none mt-6 rounded-xl"
      >
        View Details
      </Link>

    </div>
  );
};

export default SkillCard;