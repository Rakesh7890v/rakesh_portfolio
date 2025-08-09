import {useEffect} from 'react';
import {  Train, Wifi, Trophy, Code } from 'lucide-react';
import winning from '../../assets/hacktrain.jpg';

const HackTrain = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <header className="flex flex-col items-center justify-center mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-7xl sm:text-5xl font-bold mb-4 text-center mt-10">
          <span className="animated-gradient-text">
          TRAIN HACKATHON
          </span>
        </h1>
        <p className="text-gray-300 text-center text-lg mb-8">
          An Extraordinary Coding Challenge with Train Journey
        </p>
        <img src={winning} alt=""          className="w-full max-w-[800px] rounded-[50px] shadow-xl object-contain h-auto px-4 sm:px-0"/>
      </header>

      <section className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-12 text-center text-orange-400">Unique Experience</h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-slate-800 rounded-lg p-6 flex-1 max-w-sm border-b-4 border-amber-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-amber-900 flex items-center justify-center">
                <Train className="h-8 w-8 text-amber-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-amber-400">Challenge</h3>
            <p className="text-gray-300 text-center">
              Participated in a unique hackathon that took place during a train journey from Trichy to Chennai and back, adding extraordinary constraints.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 flex-1 max-w-sm border-b-4 border-orange-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-900 flex items-center justify-center">
                <Wifi className="h-8 w-8 text-orange-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-orange-400">Offline Development</h3>
            <p className="text-gray-300 text-center">
              Overcame the significant challenge of limited internet connectivity, relying solely on prior knowledge and offline tools.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 flex-1 max-w-sm border-b-4 border-red-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-red-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-red-400">Winner</h3>
            <p className="text-gray-300 text-center">
              Successfully developed a functional product despite constraints, demonstrating adaptability and earning the first place award.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HackTrain;