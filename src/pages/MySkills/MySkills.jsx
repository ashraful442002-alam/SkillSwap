import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const MySkills = () => {
  const { user } = useAuth();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const mySkills = skills.filter((skill) => skill.userEmail === user?.email);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this skill?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:5000/skills/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSkills((prev) => prev.filter((skill) => skill._id !== id));
        alert("Skill Deleted Successfully!");
      } else {
        alert(data.message || "Failed to delete skill!");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to delete skill!");
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center">My Skills</h1>

        <p className="text-center mt-5">Total Skills: {mySkills.length}</p>

        {mySkills.length === 0 && (
          <div className="text-center mt-16">
            <p className="text-gray-500 mb-6">
              You haven't added any skills yet.
            </p>
            <Link to="/add-skill" className="btn bg-green-600 hover:bg-green-700 text-white border-none">
              Add Your First Skill
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {mySkills.map((skill) => (
            <div
              key={skill._id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition p-6"
            >
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                {skill.category}
              </span>

              <h2 className="text-2xl font-bold mt-4">{skill.title}</h2>

              <p className="text-gray-600 mt-3 line-clamp-3">
                {skill.description}
              </p>

              <div className="mt-5 space-y-2">
                <p>
                  <span className="font-semibold">Availability:</span>{" "}
                  {skill.availability}
                </p>

                <p>
                  <span className="font-semibold">Mode:</span> {skill.location}
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <Link
                  to={`/update-skill/${skill._id}`}
                  className="btn btn-success flex-1"
                >
                  Update
                </Link>

                <button
                  onClick={() => handleDelete(skill._id)}
                  className="btn btn-error flex-1 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
