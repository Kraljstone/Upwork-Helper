import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Bot } from 'lucide-react';
import { JobPosting } from '../types';

const JobDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const jobs: JobPosting[] = [
    {
      id: '1',
      title: 'Senior React Developer for E-commerce Platform',
      description:
        'We are looking for an experienced React developer to help build our next-generation e-commerce platform...',
      budget: 3500,
      budgetType: 'fixed',
      clientName: 'TechCorp Solutions',
      clientRating: 4.8,
      postedDate: '2h ago',
      matchScore: 95,
      isApplied: false,
      status: 'available',
    },
    {
      id: '2',
      title: 'Full Stack Developer - MERN Stack',
      description:
        'Need a full-stack developer with expertise in MongoDB, Express, React, and Node.js for a 3-month project...',
      budget: 75,
      budgetType: 'hourly',
      clientName: 'StartupXYZ',
      clientRating: 4.5,
      postedDate: '4h ago',
      matchScore: 88,
      isApplied: true,
      status: 'applied',
    },
    {
      id: '3',
      title: 'Frontend Developer - Vue.js & TypeScript',
      description:
        'Looking for a skilled frontend developer to work on our SaaS dashboard using Vue.js and TypeScript...',
      budget: 2800,
      budgetType: 'fixed',
      clientName: 'InnovateWeb',
      clientRating: 4.9,
      postedDate: '6h ago',
      matchScore: 72,
      isApplied: false,
      status: 'available',
    },
  ];

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600 bg-emerald-100';
    if (score >= 70) return 'text-blue-600 bg-blue-100';
    if (score >= 50) return 'text-amber-600 bg-amber-100';
    return 'text-slate-600 bg-slate-100';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'text-emerald-600 bg-emerald-100';
      case 'applied':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          Job Discovery
        </h1>
        <p className="text-slate-600">AI-powered job matching and discovery</p>
      </div>

      {/* Search and Filters */}
      <div className="p-6 mb-8 bg-white rounded-xl border shadow-sm border-slate-200">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jobs..."
              className="py-3 pr-4 pl-10 w-full text-black rounded-lg border border-slate-300 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center px-6 py-3 text-gray-500 rounded-lg border transition-colors cursor-pointer border-slate-300 hover:bg-slate-50"
          >
            <Filter size={20} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
            <Bot size={20} className="mr-2" />
            Auto-Apply
          </button>
        </div>
      </div>

      {/* Job Stats */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
        <div className="p-4 bg-white rounded-xl border shadow-sm border-slate-200">
          <p className="text-sm text-slate-600">Total Jobs</p>
          <p className="text-2xl font-bold text-slate-900">1,247</p>
        </div>
        <div className="p-4 bg-white rounded-xl border shadow-sm border-slate-200">
          <p className="text-sm text-slate-600">High Match</p>
          <p className="text-2xl font-bold text-emerald-600">89</p>
        </div>
        <div className="p-4 bg-white rounded-xl border shadow-sm border-slate-200">
          <p className="text-sm text-slate-600">Applied Today</p>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
        <div className="p-4 bg-white rounded-xl border shadow-sm border-slate-200">
          <p className="text-sm text-slate-600">Avg Match Score</p>
          <p className="text-2xl font-bold text-purple-600">76%</p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-white rounded-xl border shadow-sm transition-shadow border-slate-200 hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {job.title}
                </h3>
                <p className="mb-3 text-slate-600">{job.description}</p>

                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {job.postedDate}
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-1" />${job.budget}{' '}
                    {job.budgetType}
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-1" />
                    {job.clientRating} ({job.clientName})
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end ml-4 space-y-2">
                <div
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getMatchScoreColor(
                    job.matchScore
                  )}`}
                >
                  {job.matchScore}% Match
                </div>
                <div
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                    job.status
                  )}`}
                >
                  {job.status === 'available' ? 'Available' : 'Applied'}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <div className="flex space-x-2">
                <span className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-600">
                  React
                </span>
                <span className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-600">
                  TypeScript
                </span>
                <span className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-600">
                  Node.js
                </span>
              </div>

              <div className="flex space-x-2">
                <button className="px-4 py-2 text-black rounded-lg border transition-colors cursor-pointer border-slate-300 hover:bg-slate-50">
                  View Details
                </button>
                {job.status === 'available' && (
                  <button className="px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDiscovery;
