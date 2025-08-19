import mongoose, { Document, Schema } from 'mongoose';
import { IStudent } from '../types';

export interface IStudentDocument extends Omit<IStudent, '_id'>, Document {}

const studentSchema = new Schema<IStudentDocument>({
  certificateNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  courseName: {
    type: String,
    required: true,
    trim: true
  },
  courseDuration: {
    type: String,
    required: true,
    trim: true
  },
  stream: {
    type: String,
    required: true,
    trim: true
  },
  fromDate: {
    type: Date,
    required: true
  },
  toDate: {
    type: Date,
    required: true
  },
  dateOfCompletion: {
    type: Date,
    required: true
  },
  collegeRegdNo: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  collegeName: {
    type: String,
    trim: true
  }
});

studentSchema.index({ certificateNo: 1 });
studentSchema.index({ collegeRegdNo: 1 });

studentSchema.statics.findByCertificateNo = function(certificateNo: string) {
  return this.findOne({ certificateNo: certificateNo.toUpperCase() });
};

studentSchema.statics.findByCollegeRegdNo = function(collegeRegdNo: string) {
  return this.findOne({ collegeRegdNo });
};

export const Student = mongoose.model<IStudentDocument>('Student', studentSchema); 