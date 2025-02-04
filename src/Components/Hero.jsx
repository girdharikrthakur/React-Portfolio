import React from "react";
import dp from "../assets/dp.jpg";
import git from "../assets/github .svg"
import linkedin from "../assets/linkedin .svg"

const Hero = () => {
  return (
    <div className="z-0 relative flex flex-col items-center justify-center h-full p-4">
      {/* Profile Image */}
      <div>
        <img
          className="mt-20 w-40 h-40 rounded-full border-4 border-gray-500 shadow-xl"
          src={dp}
          alt="Profile"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-[800px] text-center mt-4 dark:text-white">
        <h1 className="mt-4 text-4xl font-bold text-red-600">Hey There</h1>
        <h2 className="mt-4 text-3xl font-bold text-blue-400">Im Girdhari Thakur</h2>
<div className="flex flex-row justify-center align-centert mt-4 gap-4 ">
  <a href="https://github.com/girdharikrthakur"><img className="w-12 h-12 rounded-full bg-white hover:scale-110 transition duration-300 ease-in-out" src={git} alt="" /></a>
  
<a href="https://www.linkedin.com/in/girdharikrthakur"><img className="w-12 h-12 rounded-full bg-white hover:scale-110 transition duration-300 ease-in-out" src={linkedin} alt="" /></a>
</div>
        <p className="mt-8 p-4 text-lg ">
          I am a passionate Java Full Stack Developer with hands-on experience
          in building dynamic web applications. Skilled in Java, Spring Boot,
          Hibernate, and SQL Plus for backend development, and proficient in
          front-end technologies like HTML, CSS, JavaScript, and React.js. I
          specialize in developing scalable applica00tions, RESTful APIs, and
          seamless database integration. With expertise in version control
          using Git and GitHub, I enjoy crafting efficient, user-friendly
          solutions. I am eager to collaborate, learn, and contribute to
          impactful projects in software development.
        </p>
      </div>
    </div>
  );
};

export default Hero;
