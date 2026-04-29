import React, { useState } from 'react';
import { Calculator, AlertTriangle, Loader2, Banknote } from 'lucide-react';
import { calculateWastedCapital } from '../services/geminiService';
import { Button } from './Button';
import { RoiCalculationResponse } from '../types';

export const RoiCalculator: React.FC = () => {
  const [hours, setHours] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RoiCalculationResponse | null>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hours || !rate) return;

    setLoading(true);
    try {
      const response = await calculateWastedCapital({
        hoursPerWeek: parseFloat(hours),
        hourlyRate: parseFloat(rate)
      });
      setResult(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-brand-dark text-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700 my-12">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-brand-red" />
        <h3 className="text-2xl font-bold">The "Cost of Inaction" Calculator</h3>
      </div>
      
      <p className="text-gray-300 mb-6">
        Not sure if you need an audit? Let our AI analyze your current admin spend.
      </p>

      {!result ? (
        <form onSubmit={handleCalculate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Admin Hours Wasted / Week
              </label>
              <input
                type="number"
                min="1"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red focus:outline-none text-white"
                placeholder="e.g. 10"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Hourly Value (€)
              </label>
              <input
                type="number"
                min="1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red focus:outline-none text-white"
                placeholder="e.g. 85"
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            fullWidth 
            disabled={loading}
            className="mt-4"
          >
            {loading ? (
              <span className="flex items-center">
                <Loader2 className="animate-spin mr-2" /> Analyzing...
              </span>
            ) : (
              "Calculate My Losses"
            )}
          </Button>
        </form>
      ) : (
        <div className="animate-fade-in bg-red-900/20 border border-red-500/50 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <AlertTriangle className="w-10 h-10 text-red-500 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-red-400 mb-1">Capital Alert</h4>
              <p className="text-gray-200 text-lg leading-relaxed italic">"{result.analysis}"</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6 border-t border-red-500/30 pt-4">
            <div className="text-center">
              <span className="block text-sm text-gray-400 uppercase tracking-wider">Monthly Loss</span>
              <span className="block text-2xl font-black text-white">€{result.monthlyLoss.toLocaleString()}</span>
            </div>
            <div className="text-center">
              <span className="block text-sm text-gray-400 uppercase tracking-wider">Yearly Loss</span>
              <span className="block text-2xl font-black text-brand-red">€{result.yearlyLoss.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setResult(null)}
              className="text-sm text-gray-400 hover:text-white underline"
            >
              Recalculate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};