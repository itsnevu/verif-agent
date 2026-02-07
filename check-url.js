const http = require('http');

console.log('Checking http://localhost:3000/privacy...');
http.get('http://localhost:3000/privacy', (res) => {
    console.log('Status Code:', res.statusCode);
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        console.log('Body length:', data.length);
        console.log('Title likely:', data.match(/<title>(.*?)<\/title>/)?.[1]);
        console.log('Contains "Privacy Policy":', data.includes('Privacy Policy'));
        console.log('Preview:', data.substring(0, 500));
    });
}).on('error', (err) => {
    console.log('Error:', err.message);
});
