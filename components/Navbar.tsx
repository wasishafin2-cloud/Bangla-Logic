
import React from 'react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onTabChange('home')}
        >
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
            B
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:inline">BanglaLogic</span>
        </div>
        
        <div className="flex gap-1 sm:gap-4 overflow-x-auto">
          {[
            { id: 'home', label: 'Home', icon: 'fa-home' },
            { id: 'analyzer', label: 'Analyzer', icon: 'fa-brain' },
            { id: 'scenarios', label: 'Scenarios', icon: 'fa-gamepad' },
            { id: 'learn', label: 'Learn', icon: 'fa-book' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id 
                  ? 'bg-green-50 text-green-700' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <i className={`fas ${item.icon}`}></i>
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
