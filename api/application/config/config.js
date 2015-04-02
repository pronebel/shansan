/** 
 * Configuration
 */

//port number
global.sleekConfig.appPort = 3001;

global.sleekConfig.appHost = '127.0.0.1';

global.sleekConfig.env = 'development';

//themeing
global.sleekConfig.theme = 'default';

global.sleekConfig.configLibs = ['mongodb','session'];

//logging
global.sleekConfig.logToFile = false; // if true, logs will write to file instead of console.
global.sleekConfig.accesslog = 'application/var/logs/access.log'; // logging each access
global.sleekConfig.errorlog = 'application/var/logs/error.log'; // application errors
global.sleekConfig.systemlog = 'application/var/logs/system.log'; // manual logging
