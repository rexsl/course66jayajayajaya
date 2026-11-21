import http from 'node:http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'course66 API ready' }));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
