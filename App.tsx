
import React, { useState } from 'react';
import { Category, Fallacy, Scenario } from './types';
import { FALLACIES, SCENARIOS } from './constants';
import Navbar from './components/Navbar';
import ArgumentAnalyzer from './components/ArgumentAnalyzer';
import ScenarioSimulator from './components/ScenarioSimulator';
import FallacyEncyclopedia from './components/FallacyEncyclopedia';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'analyzer' | 'scenarios' | 'learn'>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="animate-fade-in">
            <header className="py-16 px-4 text-center bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-3xl mb-12 shadow-xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bangla-text">চিন্তা করুন যুক্তিতে, কথা বলুন শক্তিতে</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                Bangladesh's first platform to master logical thinking. Stop being manipulated by family guilt, political slogans, or social media trolls.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('analyzer')}
                  className="bg-white text-teal-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
                >
                  Analyze My Argument
                </button>
                <button 
                  onClick={() => setActiveTab('learn')}
                  className="bg-teal-900 bg-opacity-30 border border-white border-opacity-30 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-40 transition-colors"
                >
                  Learn Fallacies
                </button>
              </div>
            </header>

            <section className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
                <div className="text-green-500 text-3xl mb-4"><i className="fas fa-users-rectangle"></i></div>
                <h3 className="text-xl font-bold mb-2">Family Drama</h3>
                <p className="text-gray-600">Handle emotional manipulation from relatives with grace and logic.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
                <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-bullhorn"></i></div>
                <h3 className="text-xl font-bold mb-2">Politics</h3>
                <p className="text-gray-600">See through the empty promises and logical traps in political speeches.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-pink-500 hover:shadow-md transition-shadow">
                <div className="text-pink-500 text-3xl mb-4"><i className="fas fa-comments"></i></div>
                <h3 className="text-xl font-bold mb-2">Social Media</h3>
                <p className="text-gray-600">Win arguments or walk away from toxic trolls using critical thinking.</p>
              </div>
            </section>
          </div>
        );
      case 'analyzer':
        return <ArgumentAnalyzer />;
      case 'scenarios':
        return <ScenarioSimulator scenarios={SCENARIOS} />;
      case 'learn':
        return <FallacyEncyclopedia fallacies={FALLACIES} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-slate-900 text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">BanglaLogic.com</h2>
            <p className="text-slate-400">Revolutionizing the Bangladeshi Mindset.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">About</a>
            <a href="#" className="hover:text-green-400 transition-colors">Curriculum</a>
            <a href="#" className="hover:text-green-400 transition-colors">Donate</a>
            <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
          </div>
          <div className="flex gap-4">
            <i className="fab fa-facebook text-2xl cursor-pointer hover:text-blue-400"></i>
            <i className="fab fa-twitter text-2xl cursor-pointer hover:text-sky-400"></i>
            <i className="fab fa-youtube text-2xl cursor-pointer hover:text-red-500"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
