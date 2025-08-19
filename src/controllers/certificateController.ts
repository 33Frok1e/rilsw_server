import { Request, Response } from 'express';
import { Student } from '../models/Student';

export const verifyCertificate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log('Verifying certificate with ID:', id);
    
    const student = await Student.findById(id);
    console.log('Found student:', student ? 'Yes' : 'No');
    
    if (!student) {
      console.log('Certificate not found for ID:', id);
      return res.status(404).json({ success: false, message: 'Certificate not found' });
    }
    
    console.log('Certificate verified successfully for student:', student.name);
    return res.json({ success: true, data: { student } });
  } catch (error) {
    console.error('Certificate verification error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}; 