'use client';

import React, { useState } from 'react';
import { Filter, Search, Send, Clock, DollarSign, User } from 'lucide-react';
import { Application } from '@/types';

const Applications = () => {
  const [filter, setFilter] = useState('all');

  const applications: Application[] = [
    {
      id: '1',
      jobId: 'job-001',
      jobTitle: 'React Developer for E-commerce Platform',
      clientName: 'TechCorp Inc.',
      appliedDate: '2024-01-15',
      status: 'pending',
      proposalText:
        'Experienced React developer with 5+ years in e-commerce...',
      bidAmount: 2500,
    },
    {
      id: '2',
      jobId: 'job-002',
      jobTitle: 'Full Stack Developer - MERN Stack',
      clientName: 'StartupXYZ',
      appliedDate: '2024-01-14',
      status: 'viewed',
      proposalText: 'Full-stack developer specializing in MongoDB, Express...',
      bidAmount: 3500,
    },
    {
      id: '3',
      jobId: 'job-003',
      jobTitle: 'Frontend Developer - Vue.js & TypeScript',
      clientName: 'DesignStudio',
      appliedDate: '2024-01-13',
      status: 'interview',
      proposalText: 'Skilled frontend developer with Vue.js and TypeScript...',
      bidAmount: 2800,
    },
    {
      id: '4',
      jobId: 'job-004',
      jobTitle: 'UI/UX Developer for SaaS Dashboard',
      clientName: 'CreativeAgency',
      appliedDate: '2024-01-12',
      status: 'hired',
      proposalText: 'UI/UX developer with experience in SaaS dashboards...',
      bidAmount: 4200,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-amber-600 bg-amber-100';
      case 'viewed':
        return 'text-blue-600 bg-blue-100';
      case 'interview':
        return 'text-purple-600 bg-purple-100';
      case 'hired':
        return 'text-emerald-600 bg-emerald-100';
      case 'declined':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  const filteredApplications = applications.filter((app) => {
    if (filter === 'all') return true;
    return app.status === filter;
  });

  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='mb-2 text-3xl font-bold text-slate-900'>Applications</h1>
        <p className='text-slate-600'>Track and manage your job applications</p>
      </div>

      {/* Filters */}
      <div className='flex gap-4 mb-6'>
        <div className='relative flex-1'>
          <Search
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'
            size={20}
          />
          <input
            type='text'
            placeholder='Search applications...'
            className='py-3 pr-4 pl-10 w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        >
          <option value='all'>All Status</option>
          <option value='pending'>Pending</option>
          <option value='viewed'>Viewed</option>
          <option value='interview'>Interview</option>
          <option value='hired'>Hired</option>
          <option value='declined'>Declined</option>
        </select>
      </div>

      {/* Applications List */}
      <div className='space-y-4'>
        {filteredApplications.map((app) => (
          <div
            key={app.id}
            className='p-6 bg-white rounded-xl border shadow-sm transition-shadow border-slate-200 hover:shadow-md'
          >
            <div className='flex justify-between items-start mb-4'>
              <div className='flex-1'>
                <h3 className='mb-2 text-xl font-bold text-slate-900'>
                  {app.jobTitle}
                </h3>
                <p className='mb-3 text-slate-600'>{app.proposalText}</p>

                <div className='flex items-center space-x-4 text-sm text-slate-500'>
                  <div className='flex items-center'>
                    <User size={16} className='mr-1' />
                    {app.clientName}
                  </div>
                  <div className='flex items-center'>
                    <Clock size={16} className='mr-1' />
                    Applied {app.appliedDate}
                  </div>
                  <div className='flex items-center'>
                    <DollarSign size={16} className='mr-1' />${app.bidAmount}
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-end ml-4 space-y-2'>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    app.status
                  )}`}
                >
                  {app.status}
                </span>
              </div>
            </div>

            <div className='flex justify-between items-center pt-4 border-t border-slate-100'>
              <div className='flex space-x-2'>
                <button className='px-4 py-2 text-black rounded-lg border transition-colors border-slate-300 hover:bg-slate-50'>
                  View Details
                </button>
                <button className='px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700'>
                  Edit Proposal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
