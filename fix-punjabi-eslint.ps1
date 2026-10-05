$ErrorActionPreference = "Stop"

$path = "i18n/dictionaries/pa.ts"

if (-not (Test-Path $path)) {
    throw "File not found: $path"
}

$content = Get-Content -Raw -LiteralPath $path

# Add proper dictionary/item types after the English dictionary import.
if (-not $content.Contains('type Dictionary = typeof en;')) {
    $content = $content.Replace(
        'import en from "./en.json";',
@'
import en from "./en.json";

type Dictionary = typeof en;
type ServiceItem = Dictionary["services"]["items"][number];
type ProjectItem = Dictionary["projects"]["items"][number];
'@
    )
}

# Remove explicit any from the main dictionary.
$content = $content.Replace(
    'const dictionary: any = JSON.parse(JSON.stringify(en));',
    'const dictionary: Dictionary = JSON.parse(JSON.stringify(en));'
)

# Company facts callback can infer its type from the strongly typed dictionary.
$content = $content.Replace(
    '(fact: any, index: number) => ({',
    '(fact, index) => ({'
)

# Team handling: remove explicit any annotations/casts.
$content = $content.Replace(
    'dictionary.about.team.map((member: any) => ({',
    'dictionary.about.team.map((member) => ({'
)
$content = $content.Replace(
    'Object.values(dictionary.about.team) as any[]',
    'Object.values(dictionary.about.team)'
)

# Give service/project override maps useful types instead of any.
$content = $content.Replace(
    'const serviceCopy: Record<string, any> = {',
    'const serviceCopy: Record<string, Partial<ServiceItem>> = {'
)
$content = $content.Replace(
    'const projectCopy: Record<string, any> = {',
    'const projectCopy: Record<string, Partial<ProjectItem>> = {'
)

# Item callbacks infer ServiceItem/ProjectItem from the dictionary arrays.
$content = $content.Replace('(item: any) =>', '(item) =>')

Set-Content -LiteralPath $path -Value $content -Encoding utf8

Write-Host "Updated $path" -ForegroundColor Green
Write-Host ""
Write-Host "Now run:" -ForegroundColor Cyan
Write-Host "  npm run lint"
Write-Host "  npm run build"
