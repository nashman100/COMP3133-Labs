const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const filePath = path.join(__dirname, 'input_countries.csv')

const files = ['canada.txt', 'usa.txt'];

files.forEach((file) => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`${file} deleted`);
      } catch (err) {
        console.error(`Error deleting ${file}:`, err.message);
      }
    }
  });

fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
        const{country, year, population} = row;

        if(country.toLowerCase() === 'canada'){
            fs.appendFileSync(
                'canada.txt',
                `${country}, ${year}, ${population}\n`,
                'utf-8'
            );
        } else if(country.toLowerCase() === 'united states'){
            fs.appendFileSync(
                'usa.txt',
                `${country}, ${year}, ${population}\n`,
                'utf-8'
            );         
        }
    })
    .on('end', () => {
        console.log('csv file processed successfully!');
    });