import { Request } from 'express';

export interface IStudent {
  _id?: string;
  certificateNo: string;
  name: string;
  gender: 'male' | 'female';
  courseName: string;
  courseDuration: string;
  stream: string;
  fromDate: Date;
  toDate: Date;
  dateOfCompletion: Date;
  collegeRegdNo: string;
  collegeName?: string;
}

export interface ILoginFormData {
  certificateNo?: string;
  name: string;
  gender: 'male' | 'female';
  courseName: string;
  courseDuration: string;
  stream: string;
  fromDate: string;
  toDate: string;
  dateOfCompletion: string;
  collegeRegdNo: string;
  collegeName?: string;
}

export interface ICertificateData {
  student: IStudent;
  issueDate: Date;
  verificationUrl: string;
  qrCodeData: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AuthenticatedRequest extends Request {
  student?: IStudent;
}

// Validation Types
export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

// Course and Stream Options
export const COURSE_OPTIONS = [
  'Electric Vehicle Technology',
] as const;

export const DURATION_OPTIONS = [
  'One month',
  'Two months', 
  'Three months',
  'Six months',
  'One year'
] as const;

export const STREAM_OPTIONS = [
  'B. Tech 2nd Year 4th Semester Electrical Engineering',
  'B. Tech 2nd Year 4th Semester Mechanical Engineering',
  'B. Tech 2nd Year 4th Semester Computer Science Engineering',
  'B. Tech 3rd Year 5th Semester Electrical Engineering',
  'B. Tech 3rd Year 5th Semester Mechanical Engineering',
  'B. Tech 3rd Year 5th Semester Computer Science Engineering',
  'Diploma 2nd Year 4th Semester Electrical Engineering',
  'Diploma 2nd Year 4th Semester Mechanical Engineering',
  'Diploma 2nd Year 4th Semester Computer Science Engineering'
] as const;

// Environment Variables
export interface EnvironmentVariables {
  PORT: number;
  NODE_ENV: string;
  MONGODB_URI: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  JWT_REFRESH_SECRET: string;
  JWT_REFRESH_EXPIRES_IN: string;
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;
  CORS_ORIGIN: string;
  MAX_FILE_SIZE: number;
  UPLOAD_PATH: string;
  QR_CODE_SIZE: number;
  QR_CODE_MARGIN: number;
  CERTIFICATE_PREFIX: string;
  CERTIFICATE_YEAR: string;
} 