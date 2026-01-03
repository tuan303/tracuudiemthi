
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import { MOCK_STUDENTS } from '../constants';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f8] font-display">
      <AdminHeader />
      <div className="flex-1 px-4 sm:px-8 py-6 w-full max-w-[1400px] mx-auto flex flex-col gap-6">
        <nav className="flex text-sm text-[#616f89]">
          <Link className="hover:text-primary transition-colors" to="/admin">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="hover:text-primary transition-colors">Kỳ thi 2024</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-[#111318]">Điểm thi Học kỳ 1</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl md:text-4xl font-black text-[#111318] tracking-tight">Quản lý Điểm thi</h1>
            <p className="text-[#616f89] text-base">Hệ thống quản lý điểm thi các môn Toán, Ngữ Văn (Tiếng Việt) và Tiếng Anh.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-white border border-[#e5e7eb] text-[#111318] text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined text-[20px]">file_download</span>
              <span>Tải File Mẫu</span>
            </button>
            <Link 
              to="/admin/import" 
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all transform active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">publish</span>
              <span>Nhập dữ liệu</span>
            </Link>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#e5e7eb] flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="w-full lg:w-96">
            <label className="relative flex items-center w-full">
              <span className="absolute left-3 text-[#616f89] material-symbols-outlined">search</span>
              <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] text-[#111318] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-[#9ca3af]" placeholder="Tìm kiếm theo SBD hoặc Họ tên..." type="text"/>
            </label>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-2.5 rounded-lg border border-[#e5e7eb] bg-white text-[#111318] text-sm font-medium hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option value="">Tất cả lớp</option>
                <option value="12A1">Lớp 12A1</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[#616f89] text-[20px]">expand_more</span>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white border border-[#e5e7eb] text-[#111318] text-sm font-bold hover:bg-gray-50">
              <span className="material-symbols-outlined text-[20px]">description</span>
              <span>Xuất Excel</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Thêm Thí Sinh</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] flex flex-col flex-1 overflow-hidden">
          <div className="table-container overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f9fafb] sticky top-0 z-10">
                <tr>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] border-b border-[#e5e7eb]">STT</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] border-b border-[#e5e7eb]">Họ và Tên</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] border-b border-[#e5e7eb]">Ngày Sinh</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] border-b border-[#e5e7eb]">Số Báo Danh</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] border-b border-[#e5e7eb]">Toán</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] border-b border-[#e5e7eb]">Ngữ Văn (Tiếng Việt)</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] border-b border-[#e5e7eb]">Tiếng Anh</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] border-b border-[#e5e7eb]">Tổng Điểm</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#616f89] text-center border-b border-[#e5e7eb]">Hành Động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f2f4] text-sm">
                {MOCK_STUDENTS.map((student, index) => (
                  <tr key={student.id} className="hover:bg-[#f8f9fa] transition-colors group">
                    <td className="py-3 px-6 text-[#616f89]">{index + 1}</td>
                    <td className="py-3 px-6 font-bold text-[#111318]">{student.name}</td>
                    <td className="py-3 px-6 text-[#616f89]">{student.dob}</td>
                    <td className="py-3 px-6 text-[#111318] font-mono">{student.id}</td>
                    <td className="py-3 px-6 tabular-nums">{student.math.toFixed(2)}</td>
                    <td className="py-3 px-6 tabular-nums">{student.literature.toFixed(2)}</td>
                    <td className="py-3 px-6 tabular-nums">{student.english.toFixed(2)}</td>
                    <td className="py-3 px-6 tabular-nums font-bold text-primary">{student.total.toFixed(2)}</td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex justify-center gap-1">
                        <button className="p-1.5 rounded-md hover:bg-slate-100 text-[#616f89] transition-colors">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-red-50 text-[#616f89] hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-[#e5e7eb] px-6 py-4 flex items-center justify-between bg-white text-xs text-[#616f89]">
            <div className="flex items-center gap-2">
              <span>Hiển thị:</span>
              <select className="bg-transparent border border-[#e5e7eb] rounded p-1">
                <option>10</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <span>1-{MOCK_STUDENTS.length} trên {MOCK_STUDENTS.length}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
        <div className="bg-[#111318] text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
          <div className="size-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[16px]">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">Hệ thống sẵn sàng</span>
            <span className="text-[10px] opacity-70 uppercase tracking-wider">Dữ liệu đã được tải lên thành công.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
