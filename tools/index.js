require('@babel/register');
require('dotenv').config();

console.log(`Running tool: ${process.env.TOOL}`);
require(`./${process.env.TOOL}.js`);
