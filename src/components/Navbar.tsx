
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-medium text-xl animate-fade-in">
          Magic UI
        </div>
        <div className="space-x-4 animate-fade-in">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 transition-colors"
          >
            Log in
          </Button>
          <Button
            className="bg-white text-black hover:bg-white/90 transition-colors"
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
