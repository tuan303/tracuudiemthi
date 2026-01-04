
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_STUDENTS } from '../constants';

const PublicHome: React.FC = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<'dob' | 'sbd'>('sbd');
  const [fullname, setFullname] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError('');
    
    if (!fullname.trim() || !searchValue.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin bắt buộc.');
      return;
    }

    // Tìm kiếm thí sinh trong mock data
    const student = MOCK_STUDENTS.find(s => {
      const nameMatch = s.name.toLowerCase().includes(fullname.toLowerCase().trim());
      const valueMatch = method === 'sbd' 
        ? s.id.toLowerCase() === searchValue.toLowerCase().trim()
        : s.dob === searchValue.trim();
      return nameMatch && valueMatch;
    });

    if (student) {
      navigate(`/result/${student.id}`);
    } else {
      setError('Không tìm thấy thông tin thí sinh. Vui lòng kiểm tra lại Họ tên và Số báo danh/Ngày sinh.');
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col font-display bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('https://hoangmaistarschool.edu.vn/thongtin/nen.png')` }}
    >
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbdfe6]/50 bg-white/90 backdrop-blur-md px-4 md:px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4 text-[#111318]">
          <div className="size-8 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-3xl">school</span>
          </div>
          <h2 className="text-[#111318] text-sm md:text-lg font-bold leading-tight tracking-[-0.015em] uppercase">
            CỔNG TRA CỨU ĐIỂM THI HỌC BỔNG<br />
            NGÔI SAO HOÀNG MAI 2026
          </h2>
        </div>
      </header>

      <main className="flex grow flex-col items-center justify-center py-10 px-4 md:px-40">
        <div className="w-full max-w-[640px] bg-white rounded-xl shadow-2xl border border-[#e2e8f0] overflow-hidden">
          <div className="h-32 w-full bg-gradient-to-r from-blue-700 to-indigo-800 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 text-center px-6">
              <h1 className="text-white tracking-light text-[24px] md:text-[32px] font-bold leading-tight">TRA CỨU KẾT QUẢ THI</h1>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-slate-500 text-base font-normal leading-normal pb-6">
              Vui lòng nhập đúng Họ và tên, Số báo danh hoặc Ngày tháng năm sinh của thí sinh để xem kết quả.
            </p>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-700 animate-bounce-in">
                <span className="material-symbols-outlined text-[20px]">error</span>
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <div className="pb-6">
              <div className="flex border-b border-[#dbdfe6] gap-8">
                <button 
                  onClick={() => { setMethod('sbd'); setSearchValue(''); }}
                  className={`group flex flex-col items-center justify-center border-b-[3px] pb-3 px-2 cursor-pointer outline-none transition-all ${method === 'sbd' ? 'border-primary text-primary' : 'border-transparent text-[#616f89] hover:border-slate-300'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">badge</span>
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Số báo danh</p>
                  </div>
                </button>
                <button 
                  onClick={() => { setMethod('dob'); setSearchValue(''); }}
                  className={`group flex flex-col items-center justify-center border-b-[3px] pb-3 px-2 cursor-pointer outline-none transition-all ${method === 'dob' ? 'border-primary text-primary' : 'border-transparent text-[#616f89] hover:border-slate-300'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Ngày sinh</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[#111318] text-sm font-medium leading-normal" htmlFor="fullname">
                  Họ và tên thí sinh <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#111318] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbdfe6] bg-white h-12 placeholder:text-[#94a3b8] px-4 text-base font-normal leading-normal transition-all" 
                    id="fullname" 
                    placeholder="Nhập họ và tên (VD: Nguyễn Văn An)" 
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                  </div>
                </div>
              </div>

              {method === 'sbd' ? (
                <div className="flex flex-col gap-2">
                  <label className="text-[#111318] text-sm font-medium leading-normal" htmlFor="sbd">
                    Số báo danh <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#111318] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbdfe6] bg-white h-12 placeholder:text-[#94a3b8] px-4 text-base font-normal leading-normal transition-all" 
                      id="sbd" 
                      placeholder="VD: BD2024-001" 
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label className="text-[#111318] text-sm font-medium leading-normal" htmlFor="dob">
                    Ngày sinh <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#111318] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbdfe6] bg-white h-12 placeholder:text-[#94a3b8] px-4 text-base font-normal leading-normal transition-all" 
                      id="dob" 
                      placeholder="dd/mm/yyyy" 
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button 
                  onClick={handleSearch}
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-700 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg hover:shadow-primary/30 gap-2"
                >
                  <span className="material-symbols-outlined">search</span>
                  <span className="truncate">Tra cứu kết quả</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-white/80 text-xs bg-black/30 backdrop-blur-sm">
        <p>© 2026 Trường Ngôi Sao Hoàng Mai - Hệ thống tra cứu điểm thi học bổng</p>
      </footer>
    </div>
  );
};

export default PublicHome;
