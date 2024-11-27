const fs = require('fs');

function countCharacters(filePath) {
    const charCount = {};
    let totalChars = 0;

    const stream = fs.createReadStream(filePath, { encoding: 'utf-8', highWaterMark: 1024 * 1024 });

    stream.on('data', (chunk) => {
        for (const char of chunk) {
            if (/[a-zA-Z]/.test(char)) { 
                totalChars++;
                const lowerChar = char.toLowerCase();
                charCount[lowerChar] = (charCount[lowerChar] || 0) + 1;
            }
        }
    });

    stream.on('end', () => {
        for (const [char, count] of Object.entries(charCount)) {
            const percentage = (count / totalChars * 100).toFixed(2);
            console.log(`${char} — ${percentage}%`);
        }
    });

    stream.on('error', (err) => {
        console.error('Ошибка чтения файла:', err);
    });
}

const filePath = 'test.txt'; 
countCharacters(filePath);
