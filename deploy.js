const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = path.dirname(__filename);
const git = 'C:\\Program Files\\Git\\cmd\\git.exe';
const gh = 'C:\\Program Files\\GitHub CLI\\gh.exe';

function run(cmd, label) {
  console.log(`\n--- ${label} ---`);
  try {
    const result = execSync(cmd, { cwd: dir, encoding: 'utf8', timeout: 60000 });
    console.log(result);
    return result;
  } catch(e) {
    console.log('ERROR:', e.message);
    if (e.stdout) console.log('STDOUT:', e.stdout);
    if (e.stderr) console.log('STDERR:', e.stderr);
    return null;
  }
}

// Step 1: git init
run(`"${git}" init`, 'Git Init');

// Step 2: git add all
run(`"${git}" add -A`, 'Git Add');

// Step 3: git commit
run(`"${git}" commit -m "Initial commit: Trinh Media portfolio site - cinematic web design studio"`, 'Git Commit');

// Step 4: Create GitHub repo
run(`"${gh}" repo create trinh-media-site --public --source=. --push`, 'Create GitHub Repo & Push');

// Write success
fs.writeFileSync(path.join(dir, 'deploy-result.txt'), 'DEPLOY SCRIPT COMPLETE', 'utf8');
console.log('\nDONE');
