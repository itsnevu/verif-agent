const http = require('http');

console.log('Checking http://localhost:3001/privacy...');
http.get('http://localhost:3001/privacy', (res) => {
    console.log('Status Code:', res.statusCode);
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        console.log('Body length:', data.length);
        if (data.length > 0) {
            console.log('Title likely:', data.match(/<title>(.*?)<\/title>/)?.[1]);
            console.log('Contains "Privacy Policy":', data.includes('Privacy Policy'));
            console.log('Preview:', data.substring(0, 500));
        }
    });
}).on('error', (err) => {
    console.log('Error:', err.message);
});
