@echo off
setlocal enabledelayedexpansion

set "folder_path=%~dp0"

for %%F in ("%folder_path%\*.*") do (
    set "extension=%%~xF"
    set "filename=%%~nF"

    REM Check if the file is an image (supports .jpeg, .jpg, and .png)
    if /i "!extension!"==".jpeg" (
        REM Convert JPEG to WebP using cwebp (assuming cwebp executable is in the system PATH)
        cwebp -q 80 "%%F" -o "!folder_path!!filename!.webp"
    ) else if /i "!extension!"==".jpg" (
        REM Convert JPG to WebP using cwebp (assuming cwebp executable is in the system PATH)
        cwebp -q 80 "%%F" -o "!folder_path!!filename!.webp"
    ) else if /i "!extension!"==".png" (
        REM Convert PNG to WebP using cwebp (assuming cwebp executable is in the system PATH)
        cwebp -q 80 "%%F" -o "!folder_path!!filename!.webp"
    )
)

echo Conversion completed!
pause
