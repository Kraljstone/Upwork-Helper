import React, { useState } from 'react';
import {
  Shield,
  Globe,
  Key,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

const Security = () => {
  const [proxyEnabled, setProxyEnabled] = useState(true);
  const [encryptionEnabled, setEncryptionEnabled] = useState(true);
  const [complianceMode, setComplianceMode] = useState(true);

  const securityMetrics = [
    { label: 'Active Proxies', value: '12', status: 'good', icon: Globe },
    { label: 'Encrypted Sessions', value: '100%', status: 'good', icon: Key },
    {
      label: 'Rate Limit Compliance',
      value: '98%',
      status: 'warning',
      icon: Shield,
    },
    {
      label: 'Account Safety Score',
      value: '95/100',
      status: 'good',
      icon: CheckCircle,
    },
  ];

  const proxyStats = [
    {
      location: 'United States',
      status: 'active',
      latency: '45ms',
      usage: '78%',
    },
    {
      location: 'United Kingdom',
      status: 'active',
      latency: '32ms',
      usage: '56%',
    },
    { location: 'Canada', status: 'active', latency: '28ms', usage: '43%' },
    { location: 'Germany', status: 'inactive', latency: 'N/A', usage: '0%' },
    { location: 'Australia', status: 'active', latency: '67ms', usage: '89%' },
  ];

  const complianceRules = [
    {
      rule: 'Max 20 applications per day',
      status: 'compliant',
      current: '18/20',
    },
    {
      rule: 'Min 30s delay between actions',
      status: 'compliant',
      current: '45s avg',
    },
    {
      rule: 'Human-like behavior patterns',
      status: 'compliant',
      current: '96% similarity',
    },
    {
      rule: 'CAPTCHA solving rate limit',
      status: 'warning',
      current: '8/10 hourly',
    },
    {
      rule: 'Session timeout prevention',
      status: 'compliant',
      current: 'Active',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
      case 'compliant':
      case 'active':
        return 'text-emerald-600 bg-emerald-100';
      case 'warning':
        return 'text-amber-600 bg-amber-100';
      case 'error':
      case 'inactive':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
      case 'compliant':
      case 'active':
        return <CheckCircle size={16} />;
      case 'warning':
        return <AlertTriangle size={16} />;
      default:
        return <AlertTriangle size={16} />;
    }
  };

  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='mb-2 text-3xl font-bold text-slate-900'>
          Security & Compliance
        </h1>
        <p className='text-slate-600'>
          Monitor account safety and ensure ToS compliance
        </p>
      </div>

      {/* Security Overview */}
      <div className='grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4'>
        {securityMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'
            >
              <div className='flex justify-between items-center mb-4'>
                <div
                  className={`p-3 rounded-lg ${
                    getStatusColor(metric.status).split(' ')[1]
                  }`}
                >
                  <Icon
                    size={24}
                    className={getStatusColor(metric.status).split(' ')[0]}
                  />
                </div>
                <div
                  className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    metric.status
                  )}`}
                >
                  {getStatusIcon(metric.status)}
                </div>
              </div>
              <h3 className='mb-1 text-2xl font-bold text-slate-900'>
                {metric.value}
              </h3>
              <p className='text-sm text-slate-600'>{metric.label}</p>
            </div>
          );
        })}
      </div>

      <div className='grid grid-cols-1 gap-8 mb-8 lg:grid-cols-2'>
        {/* Proxy Management */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-bold text-slate-900'>
              Proxy Management
            </h2>
            <label className='flex items-center'>
              <input
                type='checkbox'
                checked={proxyEnabled}
                onChange={(e) => setProxyEnabled(e.target.checked)}
                className='w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500'
              />
              <span className='ml-2 text-sm font-medium text-slate-700'>
                Enable Proxy Rotation
              </span>
            </label>
          </div>

          <div className='space-y-4'>
            {proxyStats.map((proxy, index) => (
              <div
                key={index}
                className='flex justify-between items-center py-3 border-b border-slate-100 last:border-b-0'
              >
                <div className='flex items-center'>
                  <Globe size={16} className='mr-3 text-slate-400' />
                  <div>
                    <p className='font-medium text-slate-900'>
                      {proxy.location}
                    </p>
                    <p className='text-sm text-slate-500'>
                      Latency: {proxy.latency}
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='text-right'>
                    <p className='text-sm font-medium text-slate-900'>
                      {proxy.usage}
                    </p>
                    <p className='text-xs text-slate-500'>Usage</p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      proxy.status
                    )}`}
                  >
                    {proxy.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Monitor */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-bold text-slate-900'>
              Compliance Monitor
            </h2>
            <label className='flex items-center'>
              <input
                type='checkbox'
                checked={complianceMode}
                onChange={(e) => setComplianceMode(e.target.checked)}
                className='w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500'
              />
              <span className='ml-2 text-sm font-medium text-slate-700'>
                Strict Mode
              </span>
            </label>
          </div>

          <div className='space-y-4'>
            {complianceRules.map((rule, index) => (
              <div
                key={index}
                className='flex justify-between items-center py-3 border-b border-slate-100 last:border-b-0'
              >
                <div className='flex-1'>
                  <p className='font-medium text-slate-900'>{rule.rule}</p>
                  <p className='text-sm text-slate-500'>
                    Current: {rule.current}
                  </p>
                </div>
                <div
                  className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    rule.status
                  )}`}
                >
                  {getStatusIcon(rule.status)}
                  <span className='ml-1'>{rule.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
        <h2 className='mb-6 text-xl font-bold text-slate-900'>
          Security Settings
        </h2>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div>
            <h3 className='mb-4 font-medium text-slate-900'>
              Account Protection
            </h3>
            <div className='space-y-4'>
              <label className='flex justify-between items-center'>
                <span className='text-sm text-slate-700'>
                  Encrypt stored credentials
                </span>
                <input
                  type='checkbox'
                  checked={encryptionEnabled}
                  onChange={(e) => setEncryptionEnabled(e.target.checked)}
                  className='w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500'
                />
              </label>

              <label className='flex justify-between items-center'>
                <span className='text-sm text-slate-700'>
                  Auto-logout on suspicious activity
                </span>
                <input
                  type='checkbox'
                  defaultChecked={true}
                  className='w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500'
                />
              </label>

              <label className='flex justify-between items-center'>
                <span className='text-sm text-slate-700'>
                  Enable 2FA for admin access
                </span>
                <input
                  type='checkbox'
                  defaultChecked={true}
                  className='w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500'
                />
              </label>
            </div>
          </div>

          <div>
            <h3 className='mb-4 font-medium text-slate-900'>
              Behavior Settings
            </h3>
            <div className='space-y-4'>
              <div>
                <label className='block mb-2 text-sm font-medium text-slate-700'>
                  Action Delay (seconds)
                </label>
                <input
                  type='number'
                  defaultValue={45}
                  min={30}
                  max={300}
                  className='px-3 py-2 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-slate-700'>
                  Daily Application Limit
                </label>
                <input
                  type='number'
                  defaultValue={20}
                  min={1}
                  max={50}
                  className='px-3 py-2 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
