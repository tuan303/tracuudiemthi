
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { MOCK_IMPORT_PREVIEW } from '../constants';

const AdminImport: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full bg-[#f6f6f8]">
      <AdminSidebar />
      <main className="flex flex-1 flex-col overflow-hidden">
        <AdminHeader />
        
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="mx-auto max-w-6xl space-y-8">
            {/* Page Heading */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900">Import Exam Scores</h1>
                <p className="mt-2 max-w-2xl text-slate-500">
                  Upload an <code className="rounded bg-slate-100 px-1 py-0.5 text-xs font-bold text-slate-700">.xlsx</code> or <code className="rounded bg-slate-100 px-1 py-0.5 text-xs font-bold text-slate-700">.csv</code> file to bulk import student scores. 
                  Please ensure you use the standard template to avoid validation errors.
                </p>
              </div>
              <button className="flex shrink-0 items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2.5 text-sm font-medium text-primary shadow-sm hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Download Template
              </button>
            </div>

            {/* Upload Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 py-12 transition-colors hover:border-primary hover:bg-primary/5">
                <div className="mb-4 rounded-full bg-blue-50 p-4 text-primary">
                  <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-slate-900">Click to upload or drag and drop</h3>
                <p className="mb-6 text-sm text-slate-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-transform hover:scale-105 active:scale-95">
                  Browse Files
                </button>
                <input type="file" className="hidden" />
              </div>
            </div>

            {/* Preview Section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">visibility</span>
                  Data Preview
                  <span className="ml-2 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">5 Records Found</span>
                </h2>
                <div className="flex gap-3">
                  <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">Reset</button>
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">save</span>
                    Import Data
                  </button>
                </div>
              </div>

              {/* Alert */}
              <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900">
                <span className="material-symbols-outlined text-amber-600">warning</span>
                <div className="text-sm">
                  <p className="font-bold">Validation Warning</p>
                  <p className="opacity-90">Row 3 contains a score value that might be an outlier (Score: 105). Please verify before importing.</p>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase font-semibold text-slate-500">
                      <tr>
                        <th className="px-6 py-4">#</th>
                        <th className="px-6 py-4">Student ID</th>
                        <th className="px-6 py-4">Full Name</th>
                        <th className="px-6 py-4">Subject</th>
                        <th className="px-6 py-4 text-right">Score</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {MOCK_IMPORT_PREVIEW.map((record) => (
                        <tr key={record.index} className={`group transition-colors ${record.status === 'Error' ? 'bg-red-50/50 hover:bg-red-50' : 'hover:bg-slate-50'}`}>
                          <td className="px-6 py-4 text-slate-500">{record.index}</td>
                          <td className="px-6 py-4 font-mono text-slate-600">{record.studentId}</td>
                          <td className="px-6 py-4 font-medium text-slate-900">{record.name}</td>
                          <td className="px-6 py-4 text-slate-600">{record.subject}</td>
                          <td className={`px-6 py-4 text-right font-medium ${record.status === 'Error' ? 'text-red-600 font-bold' : 'text-slate-900'}`}>{record.score}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${record.status === 'Valid' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${record.status === 'Valid' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                              {record.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Showing 5 of 25 records</span>
                    <div className="flex gap-2">
                      <button className="flex items-center justify-center rounded p-1 hover:bg-slate-200 disabled:opacity-50" disabled>
                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                      </button>
                      <button className="flex items-center justify-center rounded p-1 hover:bg-slate-200">
                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminImport;
