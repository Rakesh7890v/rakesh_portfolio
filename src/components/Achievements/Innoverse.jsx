import {useEffect} from 'react';
import winning from '../../assets/ppgwinning.jpg'

const Innoverse = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <header className="flex flex-col items-center justify-center mx-auto px-4 py-8 bg-teal-800 text-white rounded-b-lg shadow-lg">
        <h1 className="text-4xl md:text-7xl sm:text-5xl font-bold mb-4 text-center">
          <span className="animated-teal-gradient">
            INNOVERSE 2k24
          </span>
        </h1>
        <p className="text-gray-200 text-center text-lg mb-8">
          Symposium at PPG Institute of Technology
        </p>
        <img src={winning} alt=""           className="w-full max-w-[800px] rounded-[50px] shadow-xl object-contain h-auto px-4 sm:px-0"/>
      </header>

      <section className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">My Achievements</h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-white rounded-lg p-6 flex-1 max-w-sm border-l-4 border-teal-500 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-teal-700">Web Development</h3>
            <p className="text-gray-600 text-center">
              Created an intuitive, user-friendly application with focus on performance optimization and seamless user experience.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 flex-1 max-w-sm border-l-4 border-emerald-500 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-emerald-700">Paper Presentation</h3>
            <p className="text-gray-600 text-center">
              Shared ideas on Generative AI, enhancing communication skills and receiving expert feedback.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 flex-1 max-w-sm border-l-4 border-cyan-500 hover:transform hover:scale-105 transition duration-300 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-cyan-700">Two Prizes</h3>
            <p className="text-gray-600 text-center">
              Received recognition for technical excellence and research capabilities, a significant confidence boost for future challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innoverse;