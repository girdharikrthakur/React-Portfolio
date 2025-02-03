import React from "react";
import dp from "../assets/dp.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Profile Image */}
      <div>
        <img
          className="mt-10 w-40 h-40 rounded-full border-4 border-gray-500 shadow-xl"
          src={dp}
          alt="Profile"
        />
      </div>

      {/* Text Section */}
      <div className=" max-w-[800px] text-center mt-4">
        <h1 className=" mt-4 text-3xl text-red-500 font-bold">Hey There</h1>
        <h2 className=" mt-4 text-xl font-semibold">I am Girdhari Thakur</h2>
        <p className="text-gray-600 mt-8">I am a passionate Java Full Stack Developer with hands-on experience in building dynamic web applications. Skilled in Java, Spring Boot, Hibernate, and SQL Plus for backend development, and proficient in front-end technologies like HTML, CSS, JavaScript, and React.js. I specialize in developing scalable applications, RESTful APIs, and seamless database integration. With expertise in version control using Git and GitHub, I enjoy crafting efficient, user-friendly solutions. I am eager to collaborate, learn, and contribute to impactful projects in software development.</p>
      </div>
    </div>
  );
};

export default Hero;
