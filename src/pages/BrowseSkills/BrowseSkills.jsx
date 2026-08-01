import React from "react";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const BrowseSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Browse Skills</h1>
        <p className="text-gray-600 mt-3">
          Discover skills shared by our community.
        </p>
      </div>

      {skills.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No skills available yet. Be the first to add one!
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill._id} skill={skill} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BrowseSkills;
