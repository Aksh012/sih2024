import React, { useState } from "react";
import ResearchImg from "../image/Rech.webp";

function ResearchSection() {
  // State to manage card data
  const [cards, setCards] = useState([
    {
      title: "Dedicated Research and Innovation Labs",
      description:
        "Equipped with cutting-edge equipment and resources, our labs provide a conducive environment for groundbreaking research across various disciplines.",
    },
    {
      title: "Intellectual Property Rights (IPR) Cell",
      description:
        "Supporting our students in safeguarding their innovative ideas, the IPR cell offers guidance and assistance in navigating the complexities of intellectual property rights.",
    },
    {
      title: "Innovation Cell",
      description:
        "Catering to the needs of research-oriented students, this cell offers mentorship and resources to nurture innovative ideas and projects.",
    },
    {
      title: "Incubation Center",
      description:
        "Supporting budding entrepreneurs, our incubation center assists in developing business ideas and solving associated challenges, fostering a culture of entrepreneurship.",
    },
    {
      title: "'Do it Yourself' Platform",
      description:
        "This platform encourages hands-on experimentation and prototyping by providing a space for hardware-related projects and research.",
    },
    {
      title: "Centers of Excellence",
      description:
        "With a focus on emerging technologies, our centers of excellence offer students access to advanced infrastructure and equipment, facilitating hands-on learning and experimentation.",
    },
    {
      title: "Incubation Center",
      description:
        "Supporting budding entrepreneurs, our incubation center assists in developing business ideas and solving associated challenges, fostering a culture of entrepreneurship.",
    },
    {
      title: "Centers of Excellence",
      description:
        "With a focus on emerging technologies, our centers of excellence offer students access to advanced infrastructure and equipment, facilitating hands-on learning and experimentation.",
    },
  ]);

  return (
    <section className="bg-white py-16 px-4" id="research">
      {/* Image Section */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img
            src={ResearchImg}
            alt="Research Facilities"
            className="w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="text-center mt-12">
          <h4 className="text-red-600 font-semibold text-lg">
            Research Facilities
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-4">
            Discover Endless Possibilities
          </h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-700">{card.description}</p>
            <div className="mt-4 border-t-2 border-yellow-400" />
            {/* Arrow Button */}
            <button className="mt-4 text-gray-700 hover:text-blue-700 transition">
              <span className="text-xl">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResearchSection;
