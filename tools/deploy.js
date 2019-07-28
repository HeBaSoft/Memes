import FtpDeploy from 'ftp-deploy';
import path from 'path';

const handler = new FtpDeploy();

const config = {
	user: process.env.FTP_USERNAME,
	password: process.env.FTP_PASSWORD,
	host: process.env.FTP_HOST,
	port: 21,
	localRoot: path.resolve(__dirname, '../dist'),
	remoteRoot: process.env.FTP_DEPLOY_DIRECTORY,
	include: ['*', '**/*'],
	deleteRemote: true,
	forcePasv: true
};

console.log(`Deploying local directory '${config.localRoot}' to '${config.remoteRoot}' at '${config.host}:${config.port}'...`);

handler.deploy(config)
	.then(res => console.log(`Finished deployment! Uploaded ${res[0].length} files in total.`))
	.catch(err => console.log(err));
