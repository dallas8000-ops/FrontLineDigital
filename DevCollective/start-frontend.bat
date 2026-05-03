@echo off
REM Start Frontend Dev Server
REM Runs on http://localhost:3000

cd frontend
call npm install
call npm run dev
