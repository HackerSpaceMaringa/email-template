const fs = require('fs');
const pug = require('pug');
const juice = require('juice');
const marked = require('marked');

const data = JSON.parse(fs.readFileSync(process.argv[2]));

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const formatCurrency = (value) => formatter.format(value);

const generator = pug.compileFile('pug/template.pug');

const html = generator({
  ...data,
  fns: {
      formatCurrency,
    markdown: marked,
  },
});
const output = juice(html);
fs.writeFileSync(`dist/${data.filename}`, output);
