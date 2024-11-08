const fs = require('fs');
const path = require('path');

function writeFile() {
  const filePath = path.join(__dirname, 'example.txt');
  fs.writeFileSync(filePath, 'Hello, Docker!', 'utf8');
  console.log('File created and written to successfully.');
}

writeFile();
