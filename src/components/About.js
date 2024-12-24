import React from "react";
const About = ()=>{
    return(
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Amit Singh Rawat.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
a passionate Web developer & designer with a knack for back-end development, user experience design, front-end systems. With a background in IT, I thrive on creating intuitive user interfaces,backend struture.
In my projects, I prioritize clean, efficient code, user-centered design, innovative solutions, and I am always eager to explore new technologies and methodologies. This portfolio showcases some of my favorite projects, demonstrating my skills in Core PHP,Codeigniter, Wordpress, MySql, HTML, CSS, JSON, JavaScript, React, Node.js, MongoDB.
Outside of work, I enjoy Playing Cricket, Swimming and sometime podcasts. I am excited to share my journey and projects with you. Feel free to explore, and don't hesitate to reach out if you'd like to collaborate or have any questions!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
  className="object-cover object-center rounded"
  alt="hero"
  src={`${process.env.PUBLIC_URL}/uploads/coding.svg`}
/>

        </div>
      </div>
    </section>
    )
}

export default About;