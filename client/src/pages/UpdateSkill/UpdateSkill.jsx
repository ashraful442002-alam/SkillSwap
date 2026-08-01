import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSkill = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/skills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSkill(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedSkill = {
      title: form.title.value,
      category: form.category.value,
      availability: form.availability.value,
      location: form.location.value,
      description: form.description.value,
    };

    try {
      const response = await fetch(`http://localhost:5000/skills/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSkill),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Skill Updated Successfully!");
        navigate("/my-skills");
      } else {
        alert(data.message || "Failed to update skill!");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to update skill!");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (!skill) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Skill not found</h2>
        <button
          onClick={() => navigate("/my-skills")}
          className="btn btn-outline mt-6"
        >
          Back to My Skills
        </button>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800">Update Skill</h1>
        <p className="text-gray-500 mt-2 mb-8">
          Edit your skill and save the changes.
        </p>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="font-medium text-gray-700">Skill Title</label>
            <input
              type="text"
              name="title"
              defaultValue={skill.title}
              placeholder="React.js"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Category</label>
            <select
              name="category"
              defaultValue={skill.category}
              className="select select-bordered w-full mt-2"
              required
            >
              <option>Web Development</option>
              <option>Programming</option>
              <option>Mobile Development</option>
              <option>UI / UX Design</option>
              <option>Graphic Design</option>
              <option>Digital Marketing</option>
              <option>Language</option>
              <option>Photography</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-700">Availability</label>
            <select
              name="availability"
              defaultValue={skill.availability}
              className="select select-bordered w-full mt-2"
              required
            >
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Evening</option>
              <option>Anytime</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-700">Learning Mode</label>
            <select
              name="location"
              defaultValue={skill.location}
              className="select select-bordered w-full mt-2"
              required
            >
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-700">Description</label>
            <textarea
              rows="5"
              name="description"
              defaultValue={skill.description}
              placeholder="Describe your skill..."
              className="textarea textarea-bordered w-full mt-2"
              required
            ></textarea>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="btn bg-green-600 hover:bg-green-700 text-white border-none flex-1 h-12 rounded-xl"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate("/my-skills")}
              className="btn btn-outline flex-1 h-12 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateSkill;
