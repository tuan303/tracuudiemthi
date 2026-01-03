
import { StudentRecord, ImportPreviewRecord } from './types';

export const MOCK_STUDENTS: StudentRecord[] = [
  { id: 'BD2024-001', name: 'Nguyễn Văn An', dob: '15/05/2006', math: 8.5, literature: 9.0, english: 8.0, total: 25.5, status: 'Pass' },
  { id: 'BD2024-002', name: 'Trần Thị Bình', dob: '22/08/2006', math: 7.0, literature: 7.5, english: 9.0, total: 23.5, status: 'Pass' },
  { id: 'BD2024-003', name: 'Lê Văn Cường', dob: '10/01/2006', math: 4.5, literature: 5.0, english: 4.0, total: 13.5, status: 'Fail' },
  { id: 'BD2024-004', name: 'Phạm Minh Đức', dob: '30/11/2006', math: 9.5, literature: 10.0, english: 9.5, total: 29.0, status: 'Pass' },
  { id: 'BD2024-005', name: 'Hoàng Thị Em', dob: '12/03/2006', math: 6.0, literature: 8.0, english: 7.5, total: 21.5, status: 'Pass' },
];

export const MOCK_IMPORT_PREVIEW: ImportPreviewRecord[] = [
  { index: 1, studentId: 'BD2024-001', name: 'Nguyễn Văn An', subject: 'Toán', score: 8.5, status: 'Valid' },
  { index: 2, studentId: 'BD2024-002', name: 'Trần Thị Bình', subject: 'Toán', score: 7.0, status: 'Valid' },
  { index: 3, studentId: 'BD2024-089', name: 'Lê Văn C', subject: 'Toán', score: 105, status: 'Error', errorMsg: 'Row 3 contains a score value that might be an outlier (Score: 105).' },
];

export const MOCK_ADMIN_USER = {
  name: 'Admin User',
  email: 'admin@school.edu',
  avatar: 'https://picsum.photos/seed/admin/100/100'
};
