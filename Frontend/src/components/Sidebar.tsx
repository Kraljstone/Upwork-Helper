'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  User,
  Search,
  Send,
  BarChart3,
  Shield,
  Home,
} from 'lucide-react';
import { getAriaLabel } from '@/utils/accessibility';

const menuItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/profile', label: 'Profile & Preferences', icon: User },
  { href: '/discovery', label: 'Job Discovery', icon: Search },
  { href: '/applications', label: 'Applications', icon: Send },
  { href: '/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/security', label: 'Security', icon: Shield },
] as const;

const Sidebar = memo(() => {
  const pathname = usePathname();

  return (
    <div
      className='flex flex-col h-screen text-white bg-slate-900'
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='p-6 border-b border-slate-700'>
        <h1 className='text-xl font-bold text-blue-400'>UpworkBot Pro</h1>
        <p className='mt-1 text-sm text-slate-400'>Automation Platform</p>
      </div>

      <nav className='flex-1 p-4'>
        <ul className='space-y-2' role='menubar'>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href} role='none'>
                <Link
                  href={item.href}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-600 shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                  aria-label={getAriaLabel('Navigate to', item.label)}
                  aria-current={isActive ? 'page' : undefined}
                  role='menuitem'
                  tabIndex={0}
                >
                  <Icon size={20} className='mr-3' aria-hidden='true' />
                  <span className='font-medium'>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className='p-4 border-t border-slate-700'>
        <div className='p-3 rounded-lg bg-slate-800'>
          <p className='mb-1 text-sm text-slate-400'>Status</p>
          <div className='flex items-center'>
            <div
              className='mr-2 w-2 h-2 bg-green-400 rounded-full'
              aria-hidden='true'
            ></div>
            <span className='text-sm text-white'>Active</span>
          </div>
        </div>
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
