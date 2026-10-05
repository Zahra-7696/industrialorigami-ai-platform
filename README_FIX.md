# Punjabi dictionary ESLint fix

This update removes the explicit `any` annotations from:

`i18n/dictionaries/pa.ts`

Run from the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\fix-punjabi-eslint.ps1
npm run lint
npm run build
```

Only push after both checks succeed.
