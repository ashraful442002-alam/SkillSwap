import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkillCard from "../../pages/BrowseSkills/SkillCard";

const LatestSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/skills")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setSkills(sorted.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-24 text-center">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </section>
    );
  }

  if (skills.length === 0) {
    return null;
  }

  return (
    <section className="pb-24">
      <div className="text-center">
        <p className="text-green-600 font-semibold">Latest Skills</p>

        <h2 className="text-4xl font-bold mt-3 text-gray-900">
          Recently Added Skills
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Check out the newest skills shared by our community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/browse-skills"
          className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl px-8"
        >
          View All Skills
        </Link>
      </div>
    </section>
  );
};

export default LatestSkills;
