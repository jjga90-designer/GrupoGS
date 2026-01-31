import React from 'react';
import { AnalysisResult } from '../types';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  TrendingUp, 
  Globe2, 
  ExternalLink,
  Briefcase
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface AnalysisViewProps {
  result: AnalysisResult;
}

const AnalysisView: React.FC<AnalysisViewProps> = ({ result }) => {
  const { data, sources } = result;

  // Mock data for the chart based on services count or just generic distribution
  // Since we don't have quantitative data, we create equal segments for visualization aesthetics
  const chartData = data.services.slice(0, 5).map((service, index) => ({
    name: service.length > 20 ? service.substring(0, 20) + '...' : service,
    value: 100 / Math.min(data.services.length, 5)
  }));

  const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Overview Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                  {data.industry || 'Business'}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{data.companyName}</h2>
              <p className="text-lg text-slate-600 max-w-3xl">{data.fullOverview}</p>
            </div>
            <div className="flex-shrink-0 bg-slate-50 p-4 rounded-lg border border-slate-100 min-w-[200px]">
               <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                 <Building2 className="h-4 w-4" /> Contact Details
               </h3>
               <div className="space-y-2 text-sm text-slate-600">
                 {data.contact.website && (
                    <a href={data.contact.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <Globe2 className="h-3 w-3" /> Website
                    </a>
                 )}
                 {data.contact.address && (
                   <div className="flex items-start gap-2">
                     <MapPin className="h-3 w-3 mt-1 flex-shrink-0" />
                     <span>{data.contact.address}</span>
                   </div>
                 )}
                 {data.contact.phone && (
                   <div className="flex items-center gap-2">
                     <Phone className="h-3 w-3" />
                     <span>{data.contact.phone}</span>
                   </div>
                 )}
                 {data.contact.email && (
                   <div className="flex items-center gap-2">
                     <Mail className="h-3 w-3" />
                     <span>{data.contact.email}</span>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Services / Products Column */}
        <div className="lg:col-span-2 space-y-6">
           {/* Services List */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Key Services & Offerings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.services.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
           </div>

           {/* Market Reputation */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                Market Analysis & Reputation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {data.reputationSummary}
              </p>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {data.keyHighlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-md text-sm font-medium border border-indigo-100">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
           </div>
        </div>

        {/* Visuals Column */}
        <div className="space-y-6">
          {/* Chart Card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-[400px]">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Offerings Distribution</h3>
            <p className="text-xs text-slate-500 mb-4">Visual representation of key business areas.</p>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sources Card */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Sources & Citations</h3>
            <div className="space-y-3">
              {sources.length > 0 ? (
                sources.slice(0, 5).map((source, idx) => (
                  <a 
                    key={idx} 
                    href={source.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group p-2 rounded hover:bg-white hover:shadow-sm transition-all"
                  >
                    <span className="text-xs text-slate-600 font-medium truncate max-w-[200px] group-hover:text-blue-600">
                      {source.title}
                    </span>
                    <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-blue-600" />
                  </a>
                ))
              ) : (
                <p className="text-xs text-slate-500 italic">No direct sources linked.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisView;
