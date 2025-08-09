import React from 'react'
import { useNavigate } from 'react-router-dom';
import kr from '../assets/kr.jpg';
import ppg from '../assets/ppg.png';
import train from '../assets/train.jpg';
import genesis from '../assets/genesis.png';
import hackfest from '../assets/hackfest.png';
import aiconclave from '../assets/kongu.png';

const Achievements = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center mt-[20px]'>

        <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer' onClick={() => navigate('/aiconclave')}>
            <div className="content-head">
                <img src={aiconclave} alt="" />
                <div className="flex flex-col">
                    <h2>AI CONCLAVE</h2>
                    <p className='text-gray-500 text-[0.9rem]'>http://www.aiconclave.com</p>
                </div>
            </div>
            <h1 className='cursor-pointer'>AI CONCLAVE</h1>
            <p>I recently had the incredible opportunity to participate in the AI CONVALVE Hackathon held at Kongu Engineering College.</p>
        </div>

        <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer' onClick={() => navigate('/hackfest')}>
            <div className="content-head">
                <img src={hackfest} alt="" />
                <div className="flex flex-col">
                    <h2>HackFest2k25</h2>
                    <p className='text-gray-500 text-[0.9rem]'>http://www.hackfest2k25.com</p>
                </div>
            </div>
            <h1 className='cursor-pointer'>HackFest2k25</h1>
            <p>I had the opportunity to participate in Hackfest2K25, a hackathon organized by M. Kumarasamy College of Engineering.</p>
        </div>

        <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer' onClick={() => navigate('/genesis25')}>
            <div className="content-head">
                <img src={genesis} alt="" />
                <div className="flex flex-col">
                    <h2>Genesis'25</h2>
                    <p className='text-gray-500 text-[0.9rem]'>http://www.genesis25.com</p>
                </div>
            </div>
            <h1 className='cursor-pointer'>Genesis'25</h1>
            <p>I had the opportunity to participate in GENESIS'25, a hackathon organized by the CSE department of my college.</p>
        </div>

        <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer' onClick={() => navigate('/hacktrain')}>
            <div className="content-head">
                <img src={train} alt="" />
                <div className="flex flex-col">
                    <h2>Hack@Train</h2>
                    <p className='text-gray-500 text-[0.9rem]'>http://www.hacktrain.com</p>
                </div>
            </div>
            <h1 className='cursor-pointer'>Hack@Train</h1>
            <p>I had the incredible opportunity to participate in a hackathon organized by my college placement team.</p>
        </div>

        <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer' onClick={() => navigate('/innoverse2k24')}>
            <div className="content-head">
                <img src={ppg} alt="" />
                <div className="flex flex-col">
                    <h2>Innoverse2k2k4</h2>
                    <p className='text-gray-500 text-[0.9rem]'>http://www.innoverse2k24.com</p>
                </div>
            </div>
            <h1 className='cursor-pointer'>Innoverse2k24</h1>
            <p>I had the privilege of participating in a symposium at PPG Institute of Technology in Coimbatore. This event was a valuable platform that brought together talented individuals.</p>
        </div>

        <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer' onClick={() => navigate('/apex2k24')}>
            <div className="content-head">
                <img src={kr} alt="" />
                <div className="flex flex-col">
                    <h2>Apex2k24</h2>
                    <p className='text-gray-500 text-[0.9rem]'>http://www.apex2k24.com</p>
                </div>
            </div>
            <h1 className='cursor-pointer'>Apex2k24</h1>
            <p>I had the opportunity to participate in a symposium at K Ramakrishna College of Engineering in Trichy.</p>
        </div>

    </div>
  )
}

export default Achievements