
import React, { useState } from 'react';
import { Scenario } from '../types';

interface ScenarioSimulatorProps {
  scenarios: Scenario[];
}

const ScenarioSimulator: React.FC<ScenarioSimulatorProps> = ({ scenarios }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const scenario = scenarios[currentIdx];

  const handleSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (scenario.options[idx].isLogical) {
      setScore(s => s + 1);
    }
  };

  const next = () => {
    setSelectedOption(null);
    setCurrentIdx((currentIdx + 1) % scenarios.length);
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Logic Battles</h2>
        <div className="bg-green-600 text-white px-4 py-1 rounded-full font-bold">
          Score: {score}
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
        <div className="bg-slate-800 text-white p-6">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{scenario.category}</span>
          <h3 className="text-xl font-bold mt-1">{scenario.title}</h3>
        </div>
        
        <div className="p-8">
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-slate-400 uppercase mb-2">Context</h4>
            <p className="text-slate-600 mb-6 italic">{scenario.context}</p>
            
            <h4 className="text-sm font-semibold text-slate-400 uppercase mb-2">The Opponent says:</h4>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-red-400 text-xl font-medium bangla-text">
              "{scenario.argument}"
            </div>
          </div>

          <div className="space-y-4">
            {scenario.options.map((option, idx) => (
              <button
                key={idx}
                disabled={selectedOption !== null}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-center justify-between ${
                  selectedOption === null 
                    ? 'border-slate-100 hover:border-green-400 hover:bg-green-50' 
                    : selectedOption === idx 
                      ? option.isLogical ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                      : 'opacity-50 border-slate-100'
                }`}
              >
                <span className="font-medium">{option.text}</span>
                {selectedOption === idx && (
                  <i className={`fas ${option.isLogical ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-500'} text-xl`}></i>
                )}
              </button>
            ))}
          </div>

          {selectedOption !== null && (
            <div className="mt-8 animate-slide-up">
              <div className={`p-6 rounded-2xl mb-6 ${scenario.options[selectedOption].isLogical ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <h5 className="font-bold mb-1">{scenario.options[selectedOption].isLogical ? 'Genius!' : 'Wait a minute...'}</h5>
                <p>{scenario.options[selectedOption].feedback}</p>
              </div>
              <button
                onClick={next}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                Next Challenge
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScenarioSimulator;
