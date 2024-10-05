const express = require('express');
const { createServer: createViteServer } = require('vite');
const path = require('path');

const app = express();

async function startServer() {
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  // Use Vite's middleware
  app.use(vite.middlewares);

  // Define API routes
  app.get('/api/status', (req, res) => {
    res.json({ status: 'Server is running!' });
  });

  // Serve React app
  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;
      const template = `
        <!DOCTYPE html>
        <html lang="en">
          <head><title>Job Application Tracker</title></head>
          <body><div id="root"></div></body>
        </html>
      `;
      const html = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

startServer();
