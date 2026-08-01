import React from "react";
import { UserPlus, PlusCircle, Compass, Handshake } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <UserPlus size={32} />,
    title: "Create an Account",
    description:
      "Sign up with your email or Google account and join the SkillSwap community for free.",
  },
  {
    id: 2,
    icon: <PlusCircle size={32} />,
    title: "Add Your Skill",
    description:
      "Share the skill you want to teach by adding a title, category, and description.",
  },
  {
    id: 3,
    icon: <Compass size={32} />,
    title: "Browse Skills",
    description:
      "Explore skills shared by others and find exactly what you want to learn.",
  },
  {
    id: 4,
    icon: <Handshake size={32} />,
    title: "Connect & Swap",
    description:
      "Request a skill swap, connect with the teacher, and start learning together.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50/60 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-green-600 font-semibold tracking-wide">
            How It Works
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Learning Made Simple
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Follow these four simple steps to start sharing your skills
            and learning from others.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-green-200 to-green-300"></div>
              )}

              <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center h-full">
                <div className="relative inline-flex">
                  <div className="w-20 h-20 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    {step.icon}
                  </div>

                  <span className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-green-600 text-white font-bold flex items-center justify-center shadow-md">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-6 text-gray-800">
                  {step.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
