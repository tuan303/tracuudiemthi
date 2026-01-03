
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_STUDENTS } from '../constants';

const PublicResult: React.FC = () => {
  const navigate = useNavigate();
  const { sbd } = useParams<{ sbd: string }>();

  // Tìm thí sinh theo SBD trong URL
  const student = MOCK_STUDENTS.find(s => s.id === sbd);

  // Nếu không tìm thấy thí sinh, hiển thị thông báo lỗi hoặc quay về trang chủ
  if (!student) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f6f8] p-4 text-center">
        <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">person_off</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy dữ liệu</h2>
        <p className="text-gray-500 mb-6">Vui lòng quay lại trang chủ và thực hiện tra cứu lại.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  const subjects = [
    { name: 'Toán', score: student.math.toFixed(2), icon: 'calculate', color: 'bg-blue-500' },
    { name: 'Ngữ Văn (Tiếng Việt)', score: student.literature.toFixed(2), icon: 'history_edu', color: 'bg-indigo-500' },
    { name: 'Tiếng Anh', score: student.english.toFixed(2), icon: 'language', color: 'bg-teal-500' },
  ];

  return (
    <div className="bg-[#f6f6f8] min-h-screen flex flex-col font-display">
      <header className="sticky top-0 z-50 w-full bg-white border-b border-solid border-[#f0f2f4] shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <div>
                <h2 className="text-[#111318] text-lg font-bold leading-tight tracking-tight">EduScore</h2>
                <p className="text-xs text-gray-500 font-medium">Cổng thông tin thi 2024</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 cursor-pointer rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors shadow-md shadow-blue-500/20"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span>Tra cứu mới</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center py-8 px-4 sm:px-6">
        <div className="w-full max-w-[960px] flex flex-col gap-6 animate-bounce-in">
          <div className="flex flex-col gap-1 items-center text-center sm:text-left sm:items-start sm:flex-row sm:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#111318] tracking-tight">KẾT QUẢ TRA CỨU ĐIỂM THI</h1>
              <p className="text-gray-500 text-base mt-1">Kỳ thi Học kỳ 1 - Năm học 2024</p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm text-gray-700">
                <span className="material-symbols-outlined text-[18px]">print</span>
                <span>In kết quả</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div 
                  className="size-28 sm:size-32 rounded-full border-4 border-white shadow-md bg-cover bg-center bg-[#f0f2f4] flex items-center justify-center overflow-hidden" 
                >
                  <img src={`https://picsum.photos/seed/${student.id}/200/200`} alt={student.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#111318] mb-2">{student.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-1 w-full max-w-md">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                      <span className="material-symbols-outlined text-[20px] text-gray-400">badge</span>
                      <span className="text-sm font-medium">SBD:</span>
                      <span className="text-sm font-bold text-[#111318]">{student.id}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                      <span className="material-symbols-outlined text-[20px] text-gray-400">calendar_month</span>
                      <span className="text-sm font-medium">Ngày sinh:</span>
                      <span className="text-sm font-bold text-[#111318]">{student.dob}</span>
                    </div>
                  </div>
                </div>
                {/* Phần hiển thị trạng thái Đạt/Không đạt đã được ẩn theo yêu cầu */}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#111318] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Chi tiết điểm các môn
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {subjects.map(subject => (
                  <div key={subject.name} className="group relative flex flex-col gap-3 rounded-xl p-6 bg-white border border-[#dbdfe6] hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{subject.name}</p>
                      <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">{subject.icon}</span>
                    </div>
                    <p className="text-[#111318] text-4xl font-black leading-tight tracking-tight">{subject.score}</p>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mt-auto">
                      <div className={subject.color + " h-1.5 rounded-full"} style={{ width: `${parseFloat(subject.score) * 10}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/10">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <h3 className="text-[#111318] text-lg font-bold">Tổng điểm thi</h3>
                  <p className="text-gray-500 text-sm max-w-[300px]">Tổng điểm 3 môn Toán, Ngữ Văn (Tiếng Việt) và Tiếng Anh.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <p className="text-5xl sm:text-6xl font-black text-primary tracking-tighter">{student.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('/')} className="flex justify-center items-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#111318] font-bold border border-gray-200 hover:border-gray-300 shadow-sm transition-all hover:-translate-y-0.5">
              <span className="material-symbols-outlined">arrow_back</span>
              Quay lại
            </button>
            <button onClick={() => navigate('/')} className="flex justify-center items-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-blue-700 transition-all hover:-translate-y-0.5">
              <span className="material-symbols-outlined">search</span>
              Tra cứu thí sinh khác
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PublicResult;
