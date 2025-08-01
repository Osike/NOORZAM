@echo off
echo Building NOORZAM Logistics website for production...
echo.

call npm run build

if %errorlevel% neq 0 (
    echo.
    echo ❌ Build failed! Please check the errors above.
    pause
    exit /b 1
)

echo.
echo ✅ Build successful!
echo.
echo Your production files are ready in the 'dist' folder.
echo.
echo Next steps:
echo 1. For Netlify: Push to GitHub and connect your repo
echo 2. For Vercel: Import your GitHub repository
echo 3. For manual hosting: Upload contents of 'dist' folder
echo.
echo Opening production preview...
start http://localhost:4173
call npm run preview

pause
