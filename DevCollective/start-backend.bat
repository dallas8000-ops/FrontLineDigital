@echo off
REM Start Backend Dev Server
REM Runs on http://localhost:5000

cd backend
call npm install
call npm run dev
