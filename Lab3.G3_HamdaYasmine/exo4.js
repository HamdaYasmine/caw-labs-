
const fs = require('fs');


const args = process.argv.slice(2);


if (args.length === 1) {
   
    const text = args[0];
    fs.writeFileSync('f.txt', text);
    console.log('The file has been saved!');
} else if (args.length >= 2) {
   
    const fileName = args[0];
    const text = args[1];
    
  
    fs.writeFileSync(fileName, text);
    console.log('The file has been saved!');
    
  
    const content = fs.readFileSync(fileName, 'utf8');
    console.log(content);
} else {
    console.log('Usage: node exo4.js "text"');
    console.log('Or: node exo4.js filename.txt "text"');
}