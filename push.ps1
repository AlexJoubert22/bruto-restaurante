# push.ps1 — Auto-commit and push all changes to GitHub
# Usage: .\push.ps1   OR   .\push.ps1 "mensaje personalizado"

param(
    [string]$Message = ""
)

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

if ($Message -eq "") {
    $commitMsg = "update: $timestamp"
} else {
    $commitMsg = "$Message [$timestamp]"
}

Write-Host "`n🔄 Subiendo cambios a GitHub..." -ForegroundColor Cyan

git add .

$status = git status --porcelain
if ($status) {
    git commit -m $commitMsg
    git push origin main
    Write-Host "`n✅ Cambios subidos correctamente!" -ForegroundColor Green
    Write-Host "   Commit: $commitMsg" -ForegroundColor Gray
} else {
    Write-Host "`n⚠️  No hay cambios nuevos para subir." -ForegroundColor Yellow
}
