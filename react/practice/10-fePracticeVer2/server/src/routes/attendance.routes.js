import { Router } from "express"
import { getAttendanceLogs, checkIn, checkOut } from "../db.js"
import { requireAuth } from "../middleware/auth.js"

export const attendanceRouter = Router()

attendanceRouter.use(requireAuth)

// GET /attendance → AttendanceRecord[]
attendanceRouter.get("/", (req, res) => {
  const logs = getAttendanceLogs(req.user.id)
  res.json(logs)
})

// POST /attendance/check-in → AttendanceRecord
attendanceRouter.post("/check-in", (req, res) => {
  const record = checkIn(req.user.id)
  res.status(201).json(record)
})

// POST /attendance/check-out → AttendanceRecord
attendanceRouter.post("/check-out", (req, res) => {
  const record = checkOut(req.user.id)
  res.status(201).json(record)
})
