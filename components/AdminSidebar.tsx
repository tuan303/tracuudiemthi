
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: 'dashboard', path: '/admin' },
    { label: 'Students', icon: 'group', path: '#' },
    { label: 'Exams', icon: 'description', path: '#' },
  ];

  const scoreItems = [
    { label: 'View Scores', icon: 'analytics', path: '/admin' },
    { label: 'Import Scores', icon: 'upload_file', path: '/admin/import' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex shrink-0 min-h-[calc(100vh-64px)]">
      <div className="flex flex-1 flex-col justify-between p-4">
        <nav className="flex flex-col gap-1">
          {navItems.map(item => (
            <Link 
              key={item.label}
              to={item.path} 
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${isActive(item.path) ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          
          <div className="my-2 border-t border-slate-100"></div>
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Score Management
          </div>
          
          {scoreItems.map(item => (
            <Link 
              key={item.label}
              to={item.path} 
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${isActive(item.path) ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          
          <div className="my-2 border-t border-slate-100"></div>
          <Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium">Settings</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 mt-auto">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
            <img alt="Admin" className="h-full w-full object-cover" src="https://picsum.photos/seed/user123/100/100"/>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm font-medium text-slate-900">Admin User</span>
            <span className="truncate text-xs text-slate-500">admin@school.edu</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
