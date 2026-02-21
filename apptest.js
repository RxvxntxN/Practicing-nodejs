const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message" required>');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        
        // 1️⃣ Collect data chunks
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        
        // 2️⃣ When all data received
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1].replace(/\+/g, ' ');
            fs.writeFileSync('message.txt', message);
        });
        
        // 3️⃣ Redirect
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);