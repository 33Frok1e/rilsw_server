import { verifyToken } from "@/utils/jwtUtils"
import { NextFunction, Request, Response } from "express"

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies['token']
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: no token' })
    }

    const decoded = verifyToken(token)
    req.user = decoded
    return next()
  } catch {
    return res.status(401).json({ message: 'Unauthorized: invalid token' })
  }
}