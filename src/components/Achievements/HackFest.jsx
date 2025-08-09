import {useEffect} from 'react';
import winning from '../../assets/fest.jpg'

const HackFest = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <header className="flex flex-col items-center justify-center mx-auto px-4 py-8 bg-blue-800 text-white rounded-b-lg shadow-lg">
        <h1 className="text-4xl md:text-7xl sm:text-5xl font-bold mb-4 text-center">
          <span className="animated-blue-gradient">
            HACKFEST 2K25
          </span>
        </h1>
        <p className="text-gray-200 text-center text-lg mb-8">
          Hackathon at M. Kumarasamy College of Engineering
        </p>
        <img src={winning} alt=""           className="w-full max-w-[800px] rounded-[50px] shadow-xl object-contain h-auto px-4 sm:px-0"/>
      </header>

      <section className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">My Achievements</h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-white rounded-lg p-6 flex-1 max-w-sm border-l-4 border-blue-500 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-blue-700">Software Solution</h3>
            <p className="text-gray-600 text-center">
              Developed an innovative software application focusing on technical efficiency, practical applicability, and optimal implementation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 flex-1 max-w-sm border-l-4 border-sky-500 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-sky-700">Problem Solving</h3>
            <p className="text-gray-600 text-center">
              Tackled complex technical challenges with creative solutions, optimizing code and ensuring well-structured implementation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 flex-1 max-w-sm border-l-4 border-indigo-500 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-indigo-700">5th Prize</h3>
            <p className="text-gray-600 text-center">
              Secured 5th place in a highly competitive hackathon featuring both software and hardware innovations from various institutions.
            </p>
          </div>
        </div>
        </section>
        
      <style jsx>{`
        .animated-blue-gradient {
          background: linear-gradient(90deg, #2563eb, #0ea5e9, #4f46e5);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default HackFest;