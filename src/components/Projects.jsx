import React from 'react';
import finance from '../assets/finance.png';
import work from '../assets/work.png';
import canteen from '../assets/canteen.png';
import mock from '../assets/mock.png';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[20px]'>

            <a href="https://www.youtube.com/watch?v=5RTYtdIotU0" target="_blank">
                <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer'>
                    <div className="content-head">
                        <img src={mock} alt="" />
                        <div className="flex flex-col">
                            <h2>AI Mock Interviewer</h2>
                            <p className='text-gray-500 text-[0.9rem]'>http://www.mockinterview.com</p>
                        </div>
                    </div>
                    <h1 className='cursor-pointer'>AI Mock Interviewer</h1>
                    <p>AI can conduct interviews based on the content mentioned in the candidate’s resume. It also detects facial expressions and provides appropriate feedback for each response.</p>
                </div>
            </a>

            <a href="https://www.youtube.com/watch?v=a2uTcFvW-Tg" target="_blank">
                <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer'>
                    <div className="content-head">
                        <img src={canteen} alt="" />
                        <div className="flex flex-col">
                            <h2>Smart Canteen Agent</h2>
                            <p className='text-gray-500 text-[0.9rem]'>http://www.kncetcanteen.com</p>
                        </div>
                    </div>
                    <h1 className='cursor-pointer'>Smart Canteen Agent</h1>
                    <p>Developed an agents for users to place orders in the college canteen and automate inventory management. Everything is automated through these agents, and they can handle all related tasks efficiently.</p>
                </div>
            </a>

            <a href="https://yourblogging.vercel.app/" target="_blank">
                <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer'>
                    <div className="content-head">
                        <img src={work} alt="" />
                        <div className="flex flex-col">
                            <h2>Blogs</h2>
                            <p className='text-gray-500 text-[0.9rem]'>http://www.blogs.com</p>
                        </div>
                    </div>
                    <h1 className='cursor-pointer'>Blogs</h1>
                    <p>A blog application provides a platform for users to create and share their thoughts, ideas, and stories. Users can write blogs, format their content, and publish it for others to read. The application also includes a profile section where users can view all their own blogs as well as explore blogs written by others.</p>
                </div>
            </a>

            <a href="https://financialgrowth.netlify.app/" target="_blank">
                <div className='m-4 bg-white max-w-[800px] sub-content cursor-pointer'>
                    <div className="content-head">
                        <img src={finance} alt="" />
                        <div className="flex flex-col">
                            <h2>Finance Growth</h2>
                            <p className='text-gray-500 text-[0.9rem]'>http://www.fiancegrowth.com</p>
                        </div>
                    </div>
                    <h1 className='cursor-pointer'>Finance Growth</h1>
                    <p>Saving is important, but managing it can be challenging. This website calculates your savings based on your salary and expenses, then provides progress tracking and recommendations to improve your savings.</p>
                </div>
            </a>

    </div>
  )
}

export default Projects;