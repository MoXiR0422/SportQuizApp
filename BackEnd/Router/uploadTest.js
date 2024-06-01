const exceljs = require('exceljs')

const { Pool } = require('pg');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'sport_base',
    password:'20010422',
    port:'5432',
});

const createQuiz = async (req, res) => {
    const { date, clock, timeout, group, sciense, max_ball } = req.body;
    const workbook = new exceljs.Workbook();
    workbook.xlsx
      .readFile(req.file.path)
      .then(async () => {
        const worksheet = workbook.getWorksheet(1);
        const data = [];
        let ctr=0;
        worksheet.eachRow(async(row, rowNumber) => {
          const question = row.getCell(1).value;
          const answers = [];
          const answeri = [];
          let trueAnswer;
          for (let i = 2; i <= row.actualCellCount; i++) {
            const answer = {
              variant: row.getCell(i).value,
              key: i === 2 ? true : false,
            };
            answers.push(answer);
            answeri.push(answer.variant);
          } 
          for (let i = answers.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
          }


        let infos = `INSERT INTO quizForm (ide, question, options, asnswer) 
        VALUES('1', '${question}', ARRAY['${answeri}'], '${answeri[0]}')`;
        console.log(infos);
        await pool.query(infos);
          data.push({ question, answers });
        });
  
        res.status(200).json({ message: "Success!" });
      })
      .catch((err) => {
        res.status(500).json({ message: "Произошла ошибка при чтении файла" });
      });
  };
  module.exports = createQuiz;