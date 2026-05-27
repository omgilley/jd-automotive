Set-Location "C:\Users\OLIVI\Desktop\projects\j&d"
$env:PATH = "C:\Program Files\nodejs;C:\Users\OLIVI\AppData\Roaming\npm;" + [System.Environment]::GetEnvironmentVariable('PATH','Machine') + ";" + [System.Environment]::GetEnvironmentVariable('PATH','User')
$vercel = "C:\Users\OLIVI\AppData\Roaming\npm\vercel.cmd"

Write-Host "=== Logging into Vercel ===" -ForegroundColor Cyan
Write-Host "Select 'Continue with GitHub' in the browser." -ForegroundColor Yellow
& $vercel login

Write-Host ""
Write-Host "=== Deploying J&D Automotive ===" -ForegroundColor Cyan
& $vercel --prod --yes

Write-Host ""
Write-Host "=== LIVE! Copy your URL above. ===" -ForegroundColor Green
Read-Host "Press Enter to close"
