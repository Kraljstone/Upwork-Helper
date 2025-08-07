'use client';

import React from 'react';
import { TrendingUp, DollarSign, Target, Send } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      label: 'Applications Today',
      value: '12',
      icon: Send,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Response Rate',
      value: '24%',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      label: 'Success Rate',
      value: '18%',
      icon: Target,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      label: 'Total Earnings',
      value: '$2,340',
      icon: DollarSign,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  const recentApplications = [
    {
      job: 'React Developer Needed',
      client: 'TechCorp Inc.',
      status: 'pending',
      time: '2h ago',
    },
    {
      job: 'Full Stack Engineer',
      client: 'StartupXYZ',
      status: 'viewed',
      time: '4h ago',
    },
    {
      job: 'Frontend Specialist',
      client: 'DesignStudio',
      status: 'interview',
      time: '6h ago',
    },
    {
      job: 'UI/UX Developer',
      client: 'CreativeAgency',
      status: 'hired',
      time: '1d ago',
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
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='mb-2 text-3xl font-bold text-slate-900'>Dashboard</h1>
        <p className='text-slate-600'>
          Monitor your Upwork automation performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className='p-6 bg-white rounded-xl border shadow-sm transition-shadow border-slate-200 hover:shadow-md'
            >
              <div className='flex justify-between items-center'>
                <div>
                  <p className='mb-1 text-sm text-slate-600'>
                    {stat.label}
                  </p>
                  <p className='text-2xl font-bold text-slate-900'>
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <Icon size={24} className={stat.color} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {/* Recent Applications */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <h2 className='mb-4 text-xl font-bold text-slate-900'>
            Recent Applications
          </h2>
          <div className='space-y-4'>
            {recentApplications.map((app, index) => (
              <div
                key={index}
                className='flex justify-between items-center py-3 border-b border-slate-100 last:border-b-0'
              >
                <div className='flex-1'>
                  <h3 className='font-medium text-slate-900'>{app.job}</h3>
                  <p className='text-sm text-slate-600'>{app.client}</p>
                </div>
                <div className='flex items-center space-x-3'>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                  <span className='text-sm text-slate-500'>{app.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Chart */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <h2 className='mb-4 text-xl font-bold text-slate-900'>
            Weekly Performance
          </h2>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-slate-600'>Applications</span>
              <span className='text-sm font-medium'>85/100</span>
            </div>
            <div className='w-full h-2 rounded-full bg-slate-200'>
              <div
                className='h-2 bg-blue-600 rounded-full'
                style={{ width: '85%' }}
              ></div>
            </div>

            <div className='flex justify-between items-center'>
              <span className='text-sm text-slate-600'>Success Rate</span>
              <span className='text-sm font-medium'>18%</span>
            </div>
            <div className='w-full h-2 rounded-full bg-slate-200'>
              <div
                className='h-2 bg-emerald-600 rounded-full'
                style={{ width: '18%' }}
              ></div>
            </div>

            <div className='flex justify-between items-center'>
              <span className='text-sm text-slate-600'>Response Rate</span>
              <span className='text-sm font-medium'>24%</span>
            </div>
            <div className='w-full h-2 rounded-full bg-slate-200'>
              <div
                className='h-2 bg-purple-600 rounded-full'
                style={{ width: '24%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
