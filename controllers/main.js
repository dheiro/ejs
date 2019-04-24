// const sql = require('../database');

exports.root = (req, res) => {
  res.send('This is a root server');
}

exports.getPdf = (req, res) => {
  const axios = require('axios');
  const kaizenId = req.params.id;
  axios.get('http://klagen01.server.redeva.id:3000/kaizens/' + kaizenId)
    .then(response => {
      res.render('../views/report_pdf_ss.ejs', {
        data: response.data.data
      });
    })
    .catch(error => {
      console.log(error);
    });
}

exports.generatePdf = (req, ress) => {
  const requestify = require('requestify');
  const pdf = require('html-pdf');
  requestify.get('http://localhost:3000/pdf/ss/190').then(function (response) {
    // Get the raw HTML response body
    var html = response.body; 
    var config = {
      // format: 'A4',
      // orientation: 'portrait',
      "height": "297mm",        // allowed units: mm, cm, in, px
      "width": "210mm", 
    }; // or format: 'letter' - see https://github.com/marcbachmann/node-html-pdf#options
 
 // Create the PDF
    pdf.create(html, config).toFile('files/generated.pdf', function (err, res) {
       if (err) return console.log(err);
       console.log(res); // { filename: '/pathtooutput/generated.pdf' }
       ress.json({
         status: 'Generated'
        });
    });
 });
}