const { execSync } = require('child_process');
const fs = require('fs');
const out = 'C:\Users\Sean T\trinh-media\trinh-media-site\deploy-out.txt';
const err = 'C:\Users\Sean T\trinh-media\trinh-media-site\deploy-err.txt';
try {
  const result = execSync('npx vercel --prod --yes', {
    cwd: 'C:\Users\Sean T\trinh-media\trinh-media-site',
    timeout: 120000,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe']
  });
  fs.writeFileSync(out, result);
  fs.writeFileSync(err, '');
} catch(e) {
  fs.writeFileSync(out, e.stdout || '');
  fs.writeFileSync(err, e.stderr || e.message || '');
}
