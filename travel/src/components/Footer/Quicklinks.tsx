import React from 'react'
import { Play } from 'lucide-react';
const Quicklinks = () => {
    const listItems = [
      "Flight",
      "Tour",
      "About",
      "Terms of Service",
      "Privacy Policy",
      "Report an issue"
    ];
  
    return (    
      <div className="max-w-md  p-4">
          <h2 className="text-2xl font-bold mb-5 text-[#D99528]">Quick Links</h2>
        <ul>
          {listItems.map((text, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Play className="w-5 h-5 text-[#F9F9F9]" />
              <span className="text-[#F9F9F9] ">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Quicklinks