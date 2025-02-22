import dp from "../assets/dp.jpg";
import git from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import cv from "../assets/cv.pdf"


const Hero = () => {

  const about_me= `I am a passionate Java Full Stack Developer with hands-on experience
          in building dynamic web applications. Skilled in Java, Spring Boot,
          Hibernate, and SQL Plus for backend development, and proficient in
          front-end technologies like HTML, CSS, JavaScript, and React.js. I
          specialize in developing scalable applica00tions, RESTful APIs, and
          seamless database integration. With expertise in version control
          using Git and GitHub, I enjoy crafting efficient, user-friendly
          solutions. I am eager to collaborate, learn, and contribute to
          impactful projects in software development.`

  
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
      <div className="max-w-[1000px] text-center mt-4 dark:text-white">
        <h1 className="mt-4 text-4xl text-red-600 font-extrabold">Hey There</h1>
        <h2 className="mt-4 text-3xl text-blue-400 font-extrabold">I&apos;m Girdhari Thakur</h2>
      <div className="flex flex-row justify-center align-centert mt-4 gap-4 ">

  <a href="https://github.com/girdharikrthakur"><img className="w-12 h-12 rounded-full dark:bg-white hover:scale-110 transition duration-300 ease-in-outk" src={git} alt="git link" /></a>
  
  <a href="https://www.linkedin.com/in/girdharikrthakur"><img className="w-12 h-12 rounded-full dark:bg-white hover:scale-110 transition duration-300 ease-in-out" src={linkedin} alt="linkedin link" /></a>

</div>
<div className="bg-orange cursor-pointer  ">
  <a href={cv}>
<button className="w-[120px] p-2 mt-4 bg-orange-700 text-white rounded-lg hover:bg-green-600 ">Download CV</button>
</a>
</div>
        <p className="mt-8 p-4 text-lg font-normal">
          {about_me}
        </p>
      </div>
    </div>
  );
};

export default Hero;
