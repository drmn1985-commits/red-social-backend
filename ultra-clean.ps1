Write-Host "?? Iniciando limpieza profunda del proyecto..."

# 1?? Eliminar carpeta node_modules si existe
if (Test-Path "node_modules") {
    Write-Host "?? Eliminando node_modules..."
    Remove-Item -Recurse -Force "node_modules"
} else {
    Write-Host "?? No se encontró node_modules, continuando..."
}

# 2?? Eliminar package-lock.json si existe
if (Test-Path "package-lock.json") {
    Write-Host "?? Eliminando package-lock.json..."
    Remove-Item -Force "package-lock.json"
} else {
    Write-Host "?? No se encontró package-lock.json, continuando..."
}

# 3?? Eliminar carpeta .next o dist si existe
if (Test-Path ".next") {
    Write-Host "?? Eliminando carpeta .next..."
    Remove-Item -Recurse -Force ".next"
}
if (Test-Path "dist") {
    Write-Host "??? Eliminando carpeta dist..."
    Remove-Item -Recurse -Force "dist"
}

# 4?? Instalar dependencias nuevamente
Write-Host "?? Reinstalando dependencias..."
npm install

# 5?? Auditoría y reparación automática
Write-Host "?? Ejecutando auditoría..."
npm audit fix --force

Write-Host ""
Write-Host "? Limpieza completa."
Write-Host "?? Nota: Si aún ves vulnerabilidades en dependencias de desarrollo, puedes ignorarlas o revisarlas manualmente."
