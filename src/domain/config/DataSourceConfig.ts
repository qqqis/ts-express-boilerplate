import { AppDataSource } from './DataSource';

async function loadMysqlDB() {
    try {
        await AppDataSource.initialize();
        console.info('mysql loaded and connected.');
    } catch (e) {
        console.error('ERROR >> MySQL Connection\n', e);
    }
}

export { loadMysqlDB };
