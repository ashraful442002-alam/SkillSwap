import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/skills/${id}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setSkill(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (notFound || !skill) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold">Skill not found</h2>
        <button
          onClick={() => navigate("/browse-skills")}
          className="btn btn-outline"
        >
          Back to Browse Skills
        </button>
      </div>
    );
  }

  return (
  <section className="py-12">

    <div className="max-w-4xl mx-auto">

      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">

        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          {skill.category}
        </span>

        <h1 className="text-4xl font-bold text-gray-800 mt-5">
          {skill.title}
        </h1>

        <div className="grid sm:grid-cols-2 gap-6 mt-8">

          <div>

            <p className="text-gray-500">
              Teacher
            </p>

            <h3 className="font-semibold text-lg">
              {skill.userName}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Availability
            </p>

            <h3 className="font-semibold text-lg">
              {skill.availability}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Learning Mode
            </p>

            <h3 className="font-semibold text-lg">
              {skill.location}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Email
            </p>

            <h3 className="font-semibold text-lg break-all">
              {skill.userEmail}
            </h3>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold">
            Description
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            {skill.description}
          </p>

        </div>

        <button
  onClick={() => alert("Swap request sent")}
  className="btn bg-green-600 hover:bg-green-700 text-white border-none mt-10"
>
  Request Skill Swap
</button>

      </div>

    </div>

  </section>
);
};

export default SkillDetails;