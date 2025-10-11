import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/icons/time.png",
      title: "Find Clients in Minutes",
      desc: "AI instantly scans the web & platforms to bring you high-quality, ready-to-hire clients — no more endless searching.",
    },
    {
      icon: "/icons/idea.png",
      title: "End Client Hunting Stress",
      desc: "Get a steady stream of relevant leads so you can focus on delivering work, not chasing it.",
    },
    {
      icon: "/icons/popu.png",
      title: "Work With the Right Clients",
      desc: "AI filters out low-budget or irrelevant prospects — so you only pitch to clients worth your time.",
    },
    {
      icon: "/icons/consistency.png",
      title: "Keep Your Pipeline Full",
      desc: "Never run out of work — Client Hunter AI keeps finding and suggesting new opportunities for you every day.",
    },
    {
      icon: "/icons/social.png",
      title: "Manage Projects in One Place",
      desc: "Track leads, proposals, and client chats directly inside the platform — no more messy spreadsheets.",
    },
    {
      icon: "/icons/rise.png",
      title: "Grow Your Freelance Income Fast",
      desc: "Close more deals, land better-paying projects, and scale your business with AI-powered efficiency.",
    },
  ];

  return (
    <section className="relative pt-75 py-14 px-6 bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Benefits
        </h2>
        <p className="text-2xl font-semibold text-gray-800 mb-16">
          Land clients faster, earn more, stress less
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 border border-gray-200 backdrop-blur-xl p-6 rounded-3xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-200 to-purple-300">
                <img src={item.icon} alt={item.title} className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-gray-800  mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

