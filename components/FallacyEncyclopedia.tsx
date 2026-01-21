
import React from 'react';
import { Fallacy } from '../types';

interface FallacyEncyclopediaProps {
  fallacies: Fallacy[];
}

const FallacyEncyclopedia: React.FC<FallacyEncyclopediaProps> = ({ fallacies }) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Fallacy Encyclopedia</h2>
        <p className="text-gray-600">Understand the building blocks of bad arguments used in everyday Bangladeshi life.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {fallacies.map((f) => (
          <div key={f.id} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-green-700">{f.name}</h3>
              <span className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-500 uppercase">Logic Tool</span>
            </div>
            <p className="text-lg font-semibold mb-2 bangla-text text-slate-800">{f.banglaName}</p>
            <p className="text-slate-600 mb-6">{f.description}</p>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                <span className="text-xs font-bold text-red-500 uppercase block mb-1">Local Example</span>
                <p className="italic font-medium">"{f.example}"</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
                <span className="text-xs font-bold text-green-500 uppercase block mb-1">How to fight back</span>
                <p className="font-medium">"{f.rebuttal}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FallacyEncyclopedia;
