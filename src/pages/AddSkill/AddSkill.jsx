import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AddSkill = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddSkill = async (e) => {
    e.preventDefault();

    const form = e.target;
    const skill = {
      title: form.title.value,
      category: form.category.value,
      availability: form.availability.value,
      location: form.location.value,
      description: form.description.value,
      userName: user?.displayName,
      userEmail: user?.email,
      createdAt: new Date(),
    };

    try {
      const response = await fetch("http://localhost:5000/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(skill),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (data.insertedId) {
        alert("Skill Added Successfully!");
        form.reset();
        navigate("/my-skills");
      } else {
        alert(data.message || "Failed to add skill!");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add skill!");
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800">Add New Skill</h1>
        <p className="text-gray-500 mt-2 mb-8">
          Share your skill and help others learn.
        </p>

        <form onSubmit={handleAddSkill} className="space-y-6">
          <div>
            <label className="font-medium text-gray-700">Skill Title</label>
            <input
              type="text"
              name="title"
              placeholder="React.js"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Category</label>
            <select
              name="category"
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
              placeholder="Describe your skill..."
              className="textarea textarea-bordered w-full mt-2"
              required
            ></textarea>
          </div>

          <div>
            <label className="font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              readOnly
              value={user?.displayName || ""}
              className="input input-bordered w-full mt-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              readOnly
              value={user?.email || ""}
              className="input input-bordered w-full mt-2 bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full h-12 rounded-xl"
          >
            Add Skill
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddSkill;
