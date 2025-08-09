import React, { useState } from 'react';
import rakesh from '../assets/rakesh.png';

const ResumePage = () => {
  const [skills] = useState([
    { name: 'HTML', proficiency: 70 },
    { name: 'CSS', proficiency: 65 },
    { name: 'REACTJS', proficiency: 75 },
    { name: 'PYTHON', proficiency: 70 }
  ]);

  const [languages] = useState([
    { name: 'Tamil', proficiency: 100 },
    { name: 'English', proficiency: 65 }
  ]);

  const [education] = useState({
    college: {
      period: '2022-2026',
      details: 'I am currently pursuing my B.Tech 3rd year Artificial intelligence and Data science at Kongunadu college of engineering and technology.(* with 9.35 CGPA)'
    },
    higherSecondary: {
      period: '2021-2022',
      details: 'I did my Higher Secondary at Desia Matriculation Hr sec school, Vellore (with 79%)'
    },
    secondary: {
      period: '2019-2020',
      details: 'I did my Secondary at Desia Matriculation Hr sec scchool, Vellore (with 86.8%)'
    }
  });

  const getGradient = (proficiency) => {
    return `linear-gradient(90deg, rgb(59, 249, 59) ${proficiency}%, rgb(100, 100, 100) ${proficiency}%)`;
  };

  const LanguageCircle = ({ language, proficiency }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="text-lg md:text-xl mb-2">{language}</div>
      <div className="relative w-20 h-20 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#333"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="rgb(59, 249, 59)"
            strokeWidth="10"
            strokeDasharray={`${proficiency * 2.83} 283`}
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
          />
          <text
            x="50"
            y="55"
            fontSize="16"
            fill="white"
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight="bold"
          >
            {proficiency}%
          </text>
        </svg>
      </div>
    </div>
  );

  const EducationSection = ({ title, period, details }) => (
    <div className="mb-6 md:mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h2>
      <div className="border box inline-block px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
        <span>{period}</span>
      </div>
      <p className="text-sm md:text-base">{details}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      
      <h1 className='text-white font-bold text-3xl uppercase text-center mb-10 tracking-[0.6rem] drop-shadow-[0_0_8px_white] larger'>Education</h1>
      
      <div className="border-t border-gray-700 my-3 md:my-4"></div>
      
      <EducationSection 
        title="College" 
        period={education.college.period} 
        details={education.college.details} 
      />
      
      <EducationSection 
        title="Higher Secondary" 
        period={education.higherSecondary.period} 
        details={education.higherSecondary.details} 
      />
      
      <EducationSection 
        title="Secondary" 
        period={education.secondary.period} 
        details={education.secondary.details} 
      />
      
      <div className="border-t border-gray-700 my-6 md:my-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="skills">
        <h1 className='text-white font-bold text-3xl uppercase text-center mb-10 tracking-[0.6rem] drop-shadow-[0_0_8px_white] '>Skills</h1>
          
          <div className="space-y-4 md:space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="mb-3 md:mb-4">
                <div className="text-lg md:text-xl mb-1 md:mb-2">{skill.name}</div>
                <div 
                  className="h-3 md:h-4 rounded-full w-full" 
                  style={{ background: getGradient(skill.proficiency) }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="languages">
          <h1 className='text-white font-bold text-3xl uppercase text-center mb-10 tracking-[0.6rem] drop-shadow-[0_0_8px_white] larger'>Languages</h1>
          
          <div className="flex justify-around flex-wrap">
            {languages.map((lang, index) => (
              <LanguageCircle 
                key={index} 
                language={lang.name} 
                proficiency={lang.proficiency} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;