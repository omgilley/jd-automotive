Set-Location "C:\Users\OLIVI\Desktop\projects\j&d"

$machinePath = [System.Environment]::GetEnvironmentVariable('PATH','Machine')
$userPath = [System.Environment]::GetEnvironmentVariable('PATH','User')
$env:PATH = "C:\Program Files\GitHub CLI;C:\Program Files\nodejs;C:\Users\OLIVI\AppData\Roaming\npm;" + $machinePath + ";" + $userPath

$gh = "C:\Program Files\GitHub CLI\gh.exe"

Write-Host "=== Logging into GitHub ===" -ForegroundColor Cyan
Write-Host "Select option 1 (web browser) then authorize in your browser." -ForegroundColor Yellow
& $gh auth login --web -h github.com

Write-Host ""
Write-Host "=== Creating GitHub repo ===" -ForegroundColor Cyan
& $gh repo create jd-automotive --public --source=. --push

Write-Host ""
Write-Host "=== All done! ===" -ForegroundColor Green
Write-Host "Repo is live at: https://github.com/omgilley/jd-automotive" -ForegroundColor Green
Start-Process "https://github.com/omgilley/jd-automotive"
Read-Host "Press Enter to close"
