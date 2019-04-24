// const sql = require('../database');

exports.generatePdf = (req, res) => {
  sql.query('SELECT * FROM users', (error, results, fields) => {
    if (error) throw error;
    res.json({
      success: true,
      data: results
    });
  });
}