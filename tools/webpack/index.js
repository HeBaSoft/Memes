require('@babel/register');
module.exports = (env) => require(`./webpack.${env.dev ? 'dev' : 'prod'}.js`);
