import React from 'react';
import { MapPin, Mail, Phone, Home } from 'lucide-react';
import linkedin from '../assets/linkedin.png';
import geek from '../assets/geek.png';
import leetcode from '../assets/leet.png';
import github from '../assets/github.png';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1E2124] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-[#00FF9D] mb-2">Get in touch</p>
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <div className="h-1 w-20 bg-[#00FF9D]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00FF9D] bg-opacity-10 rounded-lg flex items-center justify-center">
              <Home className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Name</p>
              <p className="font-semibold">Rakesh V</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00FF9D] bg-opacity-10 rounded-lg flex items-center justify-center">
              <Mail className="text-white w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a href="mailto:rishirakesh587@gmail.com" className="break-all hover:text-[#00FF9D] transition-colors">
                rishirakesh587@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00FF9D] bg-opacity-10 rounded-lg flex items-center justify-center">
              <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <a href="tel:+918608615266" className="break-all hover:text-[#00FF9D] transition-colors">
                +91 8608615266
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00FF9D] bg-opacity-10 rounded-lg flex items-center justify-center">
              <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p>Vellore, Tamil Nadu</p>
            </div>
          </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-6">Connect With Me</h2>
            <div className="flex flex-wrap gap-6">
              <a href="https://www.linkedin.com/in/rakeshrishi/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 hover:text-[#00FF9D] transition-colors group w-full sm:w-auto">
                <div className="w-10 h-10 bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                  <img src={linkedin} alt="LinkedIn" className="rounded" />
                </div>
                LinkedIn
              </a>
              
              <a href="https://github.com/Rakesh7890v" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 hover:text-[#00FF9D] transition-colors group w-full sm:w-auto">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                  <img src={github} alt="Github" className="rounded" />
                </div>
                GitHub
              </a>
              
              <a href="https://leetcode.com/u/wWkqhOUKdO/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 hover:text-[#00FF9D] transition-colors group w-full sm:w-auto">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                  <img src={leetcode} alt="LeetCode" className="rounded" />
                </div>
                LeetCode
              </a>
              
              <a href="https://www.geeksforgeeks.org/user/rishirakcmx7/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 hover:text-[#00FF9D] transition-colors group w-full sm:w-auto">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                  <img src={geek} alt="GeeksforGeeks" className="rounded" />
                </div>
                GeeksforGeeks
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 w-full h-64 rounded-lg overflow-hidden bg-[#00FF9D] bg-opacity-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124452.19254282705!2d79.03594025138901!3d12.899295855868028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1740236182334!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;