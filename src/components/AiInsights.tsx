import React from 'react';
import { Bot } from 'lucide-react';

export function AiInsights() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary-100 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <Bot className="w-5 h-5 text-primary-600" />
        </div>
        <h2 className="text-lg font-bold text-secondary-900">AI Insights</h2>
      </div>
      
      <div className="flex-1 mt-4">
         <a href="/ai-assistant/insights" className="flex flex-col items-center justify-center h-full w-full rounded-xl bg-secondary-50 border-2 border-dashed border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group py-12">
            <Bot className="w-8 h-8 text-secondary-400 mb-3 group-hover:text-primary-500 transition-colors" />
            <span className="text-secondary-600 font-bold group-hover:text-primary-700 transition-colors">Open AI Assistant</span>
            <span className="text-xs text-secondary-500 mt-1">Get smart recommendations and insights</span>
          </a>
      </div>
    </div>
  );
}
