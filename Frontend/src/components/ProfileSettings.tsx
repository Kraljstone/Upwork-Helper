import React, { useState } from 'react';
import { Plus, X, Upload, Save } from 'lucide-react';

const ProfileSettings = () => {
  const [skills, setSkills] = useState([
    'React',
    'TypeScript',
    'Node.js',
    'Python',
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    hourlyRate: 65,
    jobCategories: ['Web Development', 'Frontend Development'],
  });

  const [filters, setFilters] = useState({
    budgetMin: 500,
    budgetMax: 5000,
    budgetType: 'fixed' as 'fixed' | 'hourly',
    jobType: 'both' as 'short-term' | 'long-term' | 'both',
    includeKeywords: 'React, Frontend, JavaScript',
    excludeKeywords: 'WordPress, PHP',
    minClientRating: 4.0,
  });

  const [rules, setRules] = useState({
    maxApplicationsPerDay: 20,
    autoPauseThreshold: 10,
    enableAutoPause: true,
  });

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className='p-8 max-w-4xl'>
      <div className='mb-8'>
        <h1 className='mb-2 text-3xl font-bold text-slate-900'>
          Profile & Preferences
        </h1>
        <p className='text-slate-600'>
          Configure your profile, job filters, and application rules
        </p>
      </div>

      <div className='space-y-8'>
        {/* Basic Profile */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <h2 className='mb-4 text-xl font-bold text-slate-900'>
            Basic Information
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Full Name
              </label>
              <input
                type='text'
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Email
              </label>
              <input
                type='email'
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Hourly Rate ($)
              </label>
              <input
                type='number'
                value={profile.hourlyRate}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    hourlyRate: parseInt(e.target.value),
                  })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Resume/Portfolio
              </label>
              <button className='flex justify-center items-center px-4 py-3 w-full rounded-lg border-2 border-dashed transition-colors border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600'>
                <Upload size={20} className='mr-2' />
                Upload Files
              </button>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <h2 className='mb-4 text-xl font-bold text-slate-900'>Skills</h2>
          <div className='flex flex-wrap gap-2 mb-4'>
            {skills.map((skill) => (
              <span
                key={skill}
                className='flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full'
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className='ml-2 text-blue-600 hover:text-blue-800'
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
          <div className='flex gap-2'>
            <input
              type='text'
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addSkill()}
              placeholder='Add a skill...'
              className='flex-1 px-4 py-2 text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
            <button
              onClick={addSkill}
              className='flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700'
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Job Filters */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <h2 className='mb-4 text-xl font-bold text-slate-900'>Job Filters</h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Budget Type
              </label>
              <select
                value={filters.budgetType}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    budgetType: e.target.value as 'fixed' | 'hourly',
                  })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value='fixed'>Fixed Price</option>
                <option value='hourly'>Hourly</option>
              </select>
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Job Duration
              </label>
              <select
                value={filters.jobType}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    jobType: e.target.value as
                      | 'short-term'
                      | 'long-term'
                      | 'both',
                  })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value='short-term'>Short-term</option>
                <option value='long-term'>Long-term</option>
                <option value='both'>Both</option>
              </select>
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Min Budget ($)
              </label>
              <input
                type='number'
                value={filters.budgetMin}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    budgetMin: parseInt(e.target.value),
                  })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Max Budget ($)
              </label>
              <input
                type='number'
                value={filters.budgetMax}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    budgetMax: parseInt(e.target.value),
                  })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div className='md:col-span-2'>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Include Keywords
              </label>
              <input
                type='text'
                value={filters.includeKeywords}
                onChange={(e) =>
                  setFilters({ ...filters, includeKeywords: e.target.value })
                }
                placeholder='React, Frontend, JavaScript'
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div className='md:col-span-2'>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Exclude Keywords
              </label>
              <input
                type='text'
                value={filters.excludeKeywords}
                onChange={(e) =>
                  setFilters({ ...filters, excludeKeywords: e.target.value })
                }
                placeholder='WordPress, PHP'
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
          </div>
        </div>

        {/* Application Rules */}
        <div className='p-6 bg-white rounded-xl border shadow-sm border-slate-200'>
          <h2 className='mb-4 text-xl font-bold text-slate-900'>
            Application Rules
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Max Applications Per Day
              </label>
              <input
                type='number'
                value={rules.maxApplicationsPerDay}
                onChange={(e) =>
                  setRules({
                    ...rules,
                    maxApplicationsPerDay: parseInt(e.target.value),
                  })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-slate-700'>
                Auto-pause Threshold (%)
              </label>
              <input
                type='number'
                value={rules.autoPauseThreshold}
                onChange={(e) =>
                  setRules({
                    ...rules,
                    autoPauseThreshold: parseInt(e.target.value),
                  })
                }
                className='px-4 py-3 w-full text-black rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div className='md:col-span-2'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  checked={rules.enableAutoPause}
                  onChange={(e) =>
                    setRules({ ...rules, enableAutoPause: e.target.checked })
                  }
                  className='w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500'
                />
                <span className='ml-2 text-sm font-medium text-slate-700'>
                  Enable auto-pause when success rate drops below threshold
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className='flex justify-end'>
          <button className='flex items-center px-8 py-3 font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700'>
            <Save size={20} className='mr-2' />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
