import {useEffect} from 'react';
import winning from '../../assets/apexwinning.jpg'

const Apex = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="flex flex-col items-center justify-center mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-7xl sm:text-5xl font-bold mb-4 text-center mt-18">
          <span className="animated-blue-purple-gradient">
            APEX2k24
          </span>
        </h1>
        <p className="text-gray-300 text-center text-lg mb-8">
          Symposium at K. Ramakrishna College of Engineering, Trichy
        </p>
        <img src={winning} alt="" className="w-full max-w-[800px] rounded-[50px] shadow-xl object-contain h-auto px-4 sm:px-0"/>
      </header>

      <section className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-12 text-center">My Achievements</h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-gray-800 rounded-lg p-6 flex-1 max-w-sm border-t-4 border-blue-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Web Development</h3>
            <p className="text-gray-400 text-center">
              Won recognition for designing and developing an innovative web application focused on functionality and user experience.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 flex-1 max-w-sm border-t-4 border-purple-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Coding Competition</h3>
            <p className="text-gray-400 text-center">
              Excelled in problem-solving challenges that tested logical thinking and programming skills under time constraints.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 flex-1 max-w-sm border-t-4 border-pink-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-pink-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Two Prizes</h3>
            <p className="text-gray-400 text-center">
              Received recognition in both categories, a significant milestone validating technical abilities and boosting confidence.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Apex;