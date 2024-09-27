import React from "react";
import mainImg from "../image/university.jpg";

function MainSection() {
  return (
    <main className="text-center p-4">
      {/* Banner Image */}
      <div className="banner" data-aos="fade-up">
        <img
          src={mainImg}
          alt="COER University"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Optional content */}
      <div className="mt-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Welcome to COER University
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Explore our wide array of research projects, innovation programs, and
          academic achievements.
        </p>
      </div>
    </main>
  );
}

export default MainSection;
