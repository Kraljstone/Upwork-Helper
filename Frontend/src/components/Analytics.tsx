'use client';

import React from 'react';
import {
  TrendingUp,
  DollarSign,
  Target,
  Users,
  Calendar,
  Award,
} from 'lucide-react';

const Analytics = () => {
  const metrics = [
    {
      label: 'Total Applications',
      value: '247',
      change: '+12%',
      icon: Target,
      color: 'blue',
    },
    {
      label: 'Response Rate',
      value: '24%',
      change: '+3%',
      icon: TrendingUp,
      color: 'emerald',
    },
    {
      label: 'Success Rate',
      value: '18%',
      change: '+1%',
      icon: Award,
      color: 'purple',
    },
    {
      label: 'Total Earnings',
      value: '$12,580',
      change: '+$1,200',
      icon: DollarSign,
      color: 'amber',
    },
  ];

  const weeklyData = [
    { day: 'Mon', applications: 12, responses: 3, hired: 1 },
    { day: 'Tue', applications: 15, responses: 4, hired: 2 },
    { day: 'Wed', applications: 8, responses: 2, hired: 0 },
    { day: 'Thu', applications: 18, responses: 5, hired: 1 },
    { day: 'Fri', applications: 22, responses: 6, hired: 2 },
    { day: 'Sat', applications: 10, responses: 2, hired: 0 },
    { day: 'Sun', applications: 5, responses: 1, hired: 0 },
  ];

  const topCategories = [
    { category: 'Web Development', applications: 89, successRate: 22 },
    { category: 'Mobile Development', applications: 67, successRate: 18 },
    { category: 'UI/UX Design', applications: 45, successRate: 15 },
    { category: 'Backend Development', applications: 34, successRate: 12 },
    { category: 'Data Science', applications: 12, successRate: 8 },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { text: 'text-blue-600', bg: 'bg-blue-50' };
      case 'emerald':
        return { text: 'text-emerald-600', bg: 'bg-emerald-50' };
      case 'purple':
        return { text: 'text-purple-600', bg: 'bg-purple-50' };
      case 'amber':
        return { text: 'text-amber-600', bg: 'bg-amber-50' };
      default:
        return { text: 'text-slate-600', bg: 'bg-slate-50' };
    }
  };

  const maxApplications = Math.max(...weeklyData.map((d) => d.applications));

  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='mb-2 text-3xl font-bold text-slate-900'>Analytics</h1>
        <p className='text-slate-600'>
          Track your performance and optimize your strategy
        </p>
      </div>

      {/* Key Metrics */}
      <div className='grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4'>
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const colors = getColorClasses(metric.color);
          return (
            <div
              key={metric.label}
              className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'
            >
              <div className='flex justify-between items-center mb-4'>
                <div className={`p-3 rounded-lg ${colors.bg}`}>
                  <Icon size={24} className={colors.text} />
                </div>
                <span className='text-sm text-emerald-600 font-medium'>
                  {metric.change}
                </span>
              </div>
              <h3 className='mb-1 text-2xl font-bold text-slate-900'>
                {metric.value}
              </h3>
              <p className='text-sm text-slate-600'>{metric.label}</p>
            </div>
          );
        })}
      </div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {/* Weekly Activity Chart */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <h2 className='mb-6 text-xl font-bold text-slate-900'>
            Weekly Activity
          </h2>
          <div className='space-y-4'>
            {weeklyData.map((day) => (
              <div key={day.day} className='flex items-center'>
                <div className='w-12 text-sm font-medium text-slate-600'>
                  {day.day}
                </div>
                <div className='flex-1 flex items-center space-x-2'>
                  <div className='flex-1 bg-slate-100 rounded-full h-8 relative'>
                    <div
                      className='bg-blue-600 h-full rounded-full transition-all duration-500'
                      style={{
                        width: `${(day.applications / maxApplications) * 100}%`,
                      }}
                    ></div>
                    <div className='absolute inset-0 flex items-center px-3'>
                      <span className='text-xs font-medium text-white'>
                        {day.applications}
                      </span>
                    </div>
                  </div>
                  <div className='text-sm text-slate-600 w-16'>
                    {day.responses}r / {day.hired}h
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-4 flex justify-between text-xs text-slate-500'>
            <span>Applications</span>
            <span>r = responses, h = hired</span>
          </div>
        </div>

        {/* Top Categories */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <h2 className='mb-6 text-xl font-bold text-slate-900'>
            Top Categories
          </h2>
          <div className='space-y-4'>
            {topCategories.map((category) => (
              <div
                key={category.category}
                className='flex items-center justify-between'
              >
                <div className='flex-1'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='font-medium text-slate-900'>
                      {category.category}
                    </span>
                    <span className='text-sm text-slate-600'>
                      {category.applications} apps
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='flex-1 bg-slate-100 rounded-full h-2'>
                      <div
                        className='bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full'
                        style={{ width: `${category.successRate * 4}%` }}
                      ></div>
                    </div>
                    <span className='text-sm font-medium text-slate-700'>
                      {category.successRate}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <div className='flex items-center mb-4'>
            <Calendar className='mr-3 text-blue-600' size={24} />
            <h3 className='text-lg font-bold text-slate-900'>This Month</h3>
          </div>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Applications</span>
              <span className='font-medium'>89</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Interviews</span>
              <span className='font-medium'>21</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Jobs Won</span>
              <span className='font-medium'>7</span>
            </div>
          </div>
        </div>

        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <div className='flex items-center mb-4'>
            <Users className='mr-3 text-purple-600' size={24} />
            <h3 className='text-lg font-bold text-slate-900'>
              Client Insights
            </h3>
          </div>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Repeat Clients</span>
              <span className='font-medium'>12</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Avg Client Rating</span>
              <span className='font-medium'>4.8</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Long-term Projects</span>
              <span className='font-medium'>5</span>
            </div>
          </div>
        </div>

        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <div className='flex items-center mb-4'>
            <TrendingUp className='mr-3 text-emerald-600' size={24} />
            <h3 className='text-lg font-bold text-slate-900'>Growth</h3>
          </div>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Monthly Growth</span>
              <span className='font-medium text-emerald-600'>+15%</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Earning Growth</span>
              <span className='font-medium text-emerald-600'>+23%</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>Success Rate</span>
              <span className='font-medium text-emerald-600'>+2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 