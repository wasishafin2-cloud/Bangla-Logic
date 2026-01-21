
import React, { useState } from 'react';
import { analyzeArgument } from '../geminiService';
import { AnalysisResult } from '../types';

const ArgumentAnalyzer: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError('');
    try {
      const data = await analyzeArgument(input);
      setResult(data);
    } catch (err) {
      console.error('Logic analysis failed:', err);
      setError('Something went wrong. Please check your API key or connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
        <i className="fas fa-microchip text-green-600"></i>
        AI Logic Scanner
      </h2>
      <p className="text-gray-600 mb-8">Paste a Facebook comment, a political speech, or something your relative said. We'll find the fallacies.</p>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 mb-8">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Example: 'You are too young to understand this...' or 'Amader somaje eta chole na...'"
          className="w-full h-40 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none text-lg"
        />
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-400">{input.length} characters</span>
          <button
            onClick={handleAnalyze}
            disabled={loading || !input.trim()}
            className={`px-8 py-3 rounded-xl font-bold text-white transition-all flex items-center gap-2 ${
              loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg'
            }`}
          >
            {loading ? (
              <><i className="fas fa-spinner fa-spin"></i> Analyzing...</>
            ) : (
              <><i className="fas fa-wand-magic-sparkles"></i> Scan for Logic</>
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 mb-8 flex items-center gap-3">
          <i className="fas fa-circle-exclamation"></i>
          {error}
        </div>
      )}

      {result && (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 animate-slide-up">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">Analysis Result</h3>
              <p className="text-gray-500">How strong was that argument?</p>
            </div>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold border-4 ${
              result.logicScore > 70 ? 'border-green-500 text-green-600' : 
              result.logicScore > 40 ? 'border-yellow-500 text-yellow-600' : 'border-red-500 text-red-600'
            }`}>
              {result.logicScore}%
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Fallacies Identified</h4>
              <div className="flex flex-wrap gap-2">
                {result.fallaciesFound.length > 0 ? (
                  result.fallaciesFound.map((f, i) => (
                    <span key={i} className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-100">
                      {f}
                    </span>
                  ))
                ) : (
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-100">
                    No major fallacies found
                  </span>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Explanation</h4>
              <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {result.explanation}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Suggested Rebuttal</h4>
              <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 italic text-teal-900">
                "{result.counterArgument}"
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArgumentAnalyzer;
