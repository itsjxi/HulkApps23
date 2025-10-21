const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Simple static file server
const server = http.createServer((req, res) => {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // Serve from public directory for assets
  if (req.url.startsWith('/images/') || req.url.startsWith('/products.json')) {
    filePath = path.join(__dirname, 'public', req.url);
  }

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found, serve index.html for SPA routing
      filePath = path.join(__dirname, 'index.html');
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      // Set content type based on file extension
      const ext = path.extname(filePath).toLowerCase();
      const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.jsx': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
      };

      const contentType = contentTypes[ext] || 'text/plain';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`🚀 HulkApps E-commerce Development Server`);
  console.log(`📍 Server running at: http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
  console.log(`\n✨ Enhanced Features Available:`);
  console.log(`   • Modern Header with Navigation`);
  console.log(`   • Advanced Search Functionality`);
  console.log(`   • Product Filtering & Sorting`);
  console.log(`   • Responsive Mobile Design`);
  console.log(`   • Security Fixes Applied`);
  console.log(`   • Redux Store Enhanced`);
  console.log(`\n🔧 To stop the server: Press Ctrl+C`);
});