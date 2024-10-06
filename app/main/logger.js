import log from 'electron-log';
import path from 'path';

log.transports.file.resolvePathFn = () => path.join(__dirname, '../../logs/main.log');  // Используем resolvePathFn

log.info('Logger initialized');

export default log;
