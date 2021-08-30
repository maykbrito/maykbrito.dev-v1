// This file removes the bundle.js file
// and the <script> tag from index.html
// after build since the bundle.js file is empty.
// If you want to generate bundle.js, just remove 
// the '&& node onBuildEnd.js' part from build script

const fs = require('fs');
const path = require('path');

(() => {
	const outputPath = path.join(__dirname, 'dist');
	const bundle = path.join(outputPath, "bundle.js") || null;
	const htmlFile = path.join(outputPath, "index.html");

	if (bundle) {
		fs.unlinkSync(bundle);
		console.log('Script file removed');
	}

	fs.readFile(htmlFile, 'utf-8', function(err, data){
	if (err) throw err;
					
	const newValue = data.replace(/<script src="bundle.js"><\/script>/g, '');
					
	fs.writeFile(htmlFile, newValue, 'utf-8', function (err) {
		if (err) throw err;

		console.log('Script tag removed');
	});
	});
})();