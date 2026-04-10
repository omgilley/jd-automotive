# J&D Automotive - GitHub + Vercel Deployment Script
# Run this in a NEW PowerShell window (the PATH update from winget needs a fresh session)

Write-Host "=== J&D Automotive Deployment ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Commit latest changes
Set-Location "C:\Users\OLIVI\Desktop\projects\j&d"
Write-Host "Committing latest changes..." -ForegroundColor Yellow
git add -A
git status

# Step 2: GitHub Auth + Create Repo + Push
Write-Host "`n=== STEP 1: GitHub ===" -ForegroundColor Cyan
Write-Host "Logging into GitHub (browser will open)..." -ForegroundColor Yellow
gh auth login --web -h github.com

Write-Host "`nCreating GitHub repo and pushing..." -ForegroundColor Yellow
gh repo create jd-automotive --public --source=. --remote=origin --push
Write-Host "GitHub repo created and pushed!" -ForegroundColor Green

# Step 3: Vercel Deploy
Write-Host "`n=== STEP 2: Vercel ===" -ForegroundColor Cyan
Write-Host "Logging into Vercel (browser will open)..." -ForegroundColor Yellow
$vercel = "C:\Users\$env:USERNAME\AppData\Roaming\npm\vercel.cmd"
& $vercel login

Write-Host "`nDeploying to Vercel..." -ForegroundColor Yellow
& $vercel --prod --yes

Write-Host "`n=== DONE! ===" -ForegroundColor Green
Write-Host "Your site is live on Vercel." -ForegroundColor Green
Write-Host "Future pushes to GitHub will auto-deploy via Vercel." -ForegroundColor Green
