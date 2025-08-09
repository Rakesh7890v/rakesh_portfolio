import React from 'react';
import laptop from '../assets/rakesh.png'
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/reactjs.png';
import tailwind from '../assets/tailwind.png';
import vite from '../assets/vite.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import flask from '../assets/flask.png'
import mongo from '../assets/mongo.png';
import mysql from '../assets/mysql.png';
import vs from '../assets/vs.png'
import git from '../assets/git.png';
import github from '../assets/github.png';
import npm from '../assets/npm.png';
import scikit from '../assets/scikit.png';
import lang from '../assets/langchain.png'
import c from '../assets/c.png'
import java from '../assets/java.png';
import python from '../assets/python.png';
import sql from '../assets/sql.png';
import resume from '../assets/resume.pdf'
import ResumePage from './Resume';


const AboutSection = () => {
  return (
    <div className="w-full bg-black bg-opacity-95 flex flex-col items-center justify-center px-4 md:px-16">
      <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-8 ">
        <div className="md:w-3/5 space-y-4 intro-left">
          <h1 className='text-white font-[600] text-3xl md:text-5xl font-mono name'>Hi, I'm Rakesh</h1>

          <h2 className="text-green-500 text-lg md:text-2xl font-mono tracking-wider">
            Eat - Sleep - Code - Repeat
          </h2>
          <p className="text-gray-300 font-mono text-justify text-sm md:text-base leading-relaxed">
            Hello Soldiers! I'm currently studying at Kongunadu College of Engineering and Technology, working hard and maintaining a solid CGPA of 9.0 across my first five semesters. My coursework covers key subjects like Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, and Data Structures & Algorithms. I started this journey in 2022, and since then, I’ve been passionate about deepening my understanding of Artificial Intelligence and Data Science.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
              <a href={resume}
                download="resume.pdf"
                className="cursor-pointer px-8 py-2.5 border-2 border-green-500 text-white rounded-full hover:bg-green-500 transition-all duration-700 font-mono"
              >Get My Resume</a>
              <a
                href="mailto:rishirakesh587@gmail.com"
                className="cursor-pointer px-8 py-2.5 border-2 border-green-500 text-white rounded-full hover:bg-green-500 transition-all duration-700 font-mono"
              >Hire me</a>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="relative">
              <img
                src={laptop}
                alt="Developer workspace"
                className="rounded-lg shadow-lg animate-float"
              />
              <div className="absolute inset-0 bg-black-900/60 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className='about-skills'>
        <div className='m-3 aboutme'>
          <h1 className='text-white font-bold text-3xl uppercase text-center mb-10 tracking-[0.6rem] drop-shadow-[0_0_8px_white] '>About Me</h1>
          <p className='text-justify max-w-300'>
            I'm Rakesh, a passionate Artificial Intelligence and Data Science student specializing in machine learning, deep learning, artificial intelligence, and web development. I have a strong command of C, Java, Python, and JavaScript, which I leverage to build robust and efficient applications.
            My expertise includes frontend development with React.js and backend development using Node.js. I also have hands-on experience with MongoDB, ensuring efficient data storage and retrieval. With a constant thirst for knowledge, I actively participate in hackathons to refine my skills and stay updated with emerging technologies.
          </p>
        </div>

        <div className='flex flex-col mb-10'>
          <h1 className='text-white font-bold text-3xl uppercase text-center mb-5 tracking-[0.6rem] drop-shadow-[0_0_8px_white] mt-[30px]'>Skills</h1>
          
          <div className='flex flex-col'>
            <h2 className='text-white text-2xl mb-2 mt-5'>Front-End</h2>
            <div className='flex flex-wrap gap-3'>
              <img src={html} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={css} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={js} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={vite} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={react} alt="" className='w-[55px] h-[50px] m-3'/>
            </div>
          </div>

          <div className='flex flex-col'>
            <h2 className='text-white text-2xl mb-2 mt-5'>Back-End</h2>
            <div className='flex flex-wrap gap-3'>
              <img src={node} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={express} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={flask} alt="" className='w-[50px] h-[50px] m-3'/>
            </div>
          </div>

          <div className='flex flex-col'>
            <h2 className='text-white text-2xl mb-2 mt-5'>Database</h2>
            <div className='flex flex-wrap gap-3'>
              <img src={mongo} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={mysql} alt="" className='w-[50px] h-[50px] m-3'/>
            </div>
          </div>

          <div className='flex flex-col'>
            <h2 className='text-white text-2xl mb-2 mt-5'>Tools</h2>
            <div className='flex flex-wrap gap-3'>
              <img src={github} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={scikit} alt="" className='w-[90px] h-[50px] m-3'/>
              <img src={npm} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={vs} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={lang} alt="" className='w-[50px] h-[50px] m-3'/>
            </div>
          </div>

          <div className='flex flex-col'>
            <h2 className='text-white text-2xl mb-2 mt-5'>Programming Languages</h2>
            <div className='flex flex-wrap gap-3'>
              <img src={java} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={python} alt="" className='w-[50px] h-[50px] m-3'/>
              <img src={sql} alt="" className='w-[50px] h-[50px] m-3'/>
            </div>
          </div>

        </div>
      </div>

      <ResumePage />
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @media (max-width: 780px){
    .animate-float {
        margin-top: 100px;
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default AboutSection;


