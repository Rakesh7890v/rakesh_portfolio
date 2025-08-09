import {useEffect} from 'react';
import winning from '../../assets/aiconclave.png';

const AIConvalveHackathon = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="flex flex-col items-center justify-center mx-auto px-4 py-8 bg-gradient-to-r from-blue-700 via-violet-700 to-indigo-800 text-white rounded-b-lg shadow-lg">
        <h1 className="text-4xl md:text-7xl sm:text-5xl font-bold mb-4 text-center">
          <span className="animated-purple-gradient">
            AI CONVALVE HACKATHON
          </span>
        </h1>
        <p className="text-white text-center text-lg mb-8">
          Hackathon at Kongu Engineering College - Artificial Intelligence Department
        </p>
        <img
          src={winning}
          alt="Hackathon Win"
          className="w-full max-w-[800px] rounded-[50px] shadow-xl object-contain h-auto px-4 sm:px-0"
        />      
        </header>

      <section className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-12 text-center text-violet-400">My Achievements</h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-gray-900 rounded-lg p-6 flex-1 max-w-sm border-l-4 border-violet-500 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-violet-200 flex items-center justify-center text-violet-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-violet-400">First Prize Winner</h3>
            <p className="text-gray-300 text-center">
              Secured first place in a highly competitive hackathon featuring innovative AI solutions, evaluated by industry experts.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex-1 max-w-sm border-l-4 border-blue-400 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-blue-400">Cash Prize</h3>
            <p className="text-gray-300 text-center">
              Received a 20,000 INR cash prize, recognizing the exceptional quality, innovation, and real-world impact of our AI solution.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex-1 max-w-sm border-l-4 border-indigo-400 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-indigo-400">AI Innovation</h3>
            <p className="text-gray-300 text-center">
              Developed a cutting-edge AI-powered solution that demonstrated technical excellence, practical applicability, and scalability.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .animated-purple-gradient {
          background: linear-gradient(90deg,rgb(0, 107, 239),rgb(37, 1, 119),rgb(1, 1, 82));
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 4s ease infinite;
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

export default AIConvalveHackathon;