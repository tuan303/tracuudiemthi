
import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#2a3241] bg-white dark:bg-[#1a202c] px-6 py-3 sticky top-0 z-50 shadow-sm">
      <Link to="/admin" className="flex items-center gap-4 text-[#111318] dark:text-white">
        <div className="size-8 text-primary">
          <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Quản lý điểm thi</h2>
      </Link>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-[#616f89] dark:text-[#9ca3af]">notifications</span>
          <span className="material-symbols-outlined text-[#616f89] dark:text-[#9ca3af]">settings</span>
        </div>
        <div className="h-8 w-[1px] bg-[#e5e7eb] dark:bg-[#2a3241]"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-[#111318] dark:text-white">Admin User</p>
            <p className="text-xs text-[#616f89] dark:text-[#9ca3af]">Administrator</p>
          </div>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" 
            style={{ backgroundImage: `url("https://picsum.photos/seed/admin/100/100")` }}
          ></div>
          <span className="material-symbols-outlined text-[#616f89] dark:text-[#9ca3af] cursor-pointer">expand_more</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
