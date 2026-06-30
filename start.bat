@echo off
REM Starts a local web server for the TallyKhata home page copy and opens it.
cd /d "%~dp0"
set PORT=8801
echo Starting local server on http://localhost:%PORT%/ ...
start "" "http://localhost:%PORT%/index.html"
"C:\Users\Asus\AppData\Local\Programs\Python\Python312\python.exe" -m http.server %PORT%
pause
