const express = require('express');
const app = express();

// Serve static files from /public
app.use(express.static('public'));

// Start server
app.listen(2222, () => {
	console.log('Server running on port 2222!');
});

// const express = require('express');
// const app = express();

// // Serve static files from /public
// app.use(
// 	express.static('public', {
// 		setHeaders: (res, path, stat) => {
// 			if (path.endsWith('.wasm')) {
// 				// Serve .wasm files with correct mime type
// 				res.set('Content-Type', 'application/wasm');
// 			}
// 		},
// 	}),
// );

// // Start server
// app.listen(2222, () => {
// 	console.log('Server running on port 2222!');
// });
