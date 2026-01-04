
export interface StudentRecord {
  id: string; // Số báo danh
  name: string; // Họ và tên
  dob: string; // Ngày sinh
  math: number;
  literature: number;
  english: number;
  total: number;
  status: 'Pass' | 'Fail';
}

export interface ImportPreviewRecord {
  index: number;
  studentId: string;
  name: string;
  subject: string;
  score: number;
  status: 'Valid' | 'Error';
  errorMsg?: string;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT'
}

export interface AuthState {
  role: UserRole;
  user: {
    name: string;
    email: string;
    avatar: string;
  } | null;
}
