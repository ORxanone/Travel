import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footersosial = () => {
  const iconProps = {
    size: 20,
    className: "text-gray-200 hover:text-gray-400 transition-colors cursor-pointer",
    strokeWidth: 1.5
  };

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Facebook {...iconProps} />
      <Twitter {...iconProps} />
      <Linkedin {...iconProps} />
      <Instagram {...iconProps} />
    </div>
  );
};

export default Footersosial;