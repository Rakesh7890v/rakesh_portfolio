import {useEffect} from 'react';
import { Code, Users, Award } from 'lucide-react';
import winning from '../../assets/genesiswinning.jpg'

const Genesis25 = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black min-h-screen text-white">
      <header className="flex flex-col items-center justify-center mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-7xl sm:text-5xl font-bold mb-4 text-center mt-10">
          <span className="animated-genesis-gradient">
            GENESIS'25
          </span>
        </h1>
        <p className="text-gray-300 text-center text-lg mb-8">
          CSE Department Hackathon
        </p>
        <img src={winning} alt=""           className="w-full max-w-[800px] rounded-[50px] shadow-xl object-contain h-auto px-4 sm:px-0"/>
      </header>

      <section className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">Hackathon Journey</h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-red-900 rounded-lg p-6 flex-1 max-w-sm border-r-4 border-yellow-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-yellow-400">Alumni Jury</h3>
            <p className="text-gray-300 text-center">
              Evaluated by former students who had once been in our position, creating a unique connection and motivation.
            </p>
          </div>
          
          <div className="bg-red-900 rounded-lg p-6 flex-1 max-w-sm border-r-4 border-yellow-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <Code className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-yellow-400">Rigorous Evaluation</h3>
            <p className="text-gray-300 text-center">
              Faced in-depth technical questions to verify that we had developed our own code without relying on AI generation.
            </p>
          </div>
          
          <div className="bg-red-900 rounded-lg p-6 flex-1 max-w-sm border-r-4 border-yellow-500 hover:transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-yellow-400">Second Runner-up</h3>
            <p className="text-gray-300 text-center">
              Successfully defended our approach and demonstrated deep understanding of our implementation, earning third place.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Genesis25;