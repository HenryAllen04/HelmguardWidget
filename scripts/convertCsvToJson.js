// Purpose: Convert questionnaire CSV data to JSON format for use in the HelmGuard Demo Widget

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const inputFile = path.join(__dirname, '..', 'Questionnaire_export.csv');
const outputFile = path.join(__dirname, '..', 'src', 'data', 'questionnaire.json');

const questions = [];

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    // CSV parser handles multiline values automatically
    questions.push({
      question: row.Question.trim(),
      answer: row.Answer.trim()
    });
  })
  .on('end', () => {
    // Write JSON file
    fs.writeFileSync(outputFile, JSON.stringify(questions, null, 2));
    console.log(`✅ Successfully converted ${questions.length} Q&A pairs to JSON`);
    console.log(`📁 Output saved to: ${outputFile}`);
  })
  .on('error', (error) => {
    console.error('❌ Error reading CSV:', error);
  }); 