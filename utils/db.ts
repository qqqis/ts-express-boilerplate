import { URL } from 'url';
import { toNumber } from './env';

export interface MySQLConnectionConfig {
    schema: string;
    username: string;
    password: string;
    scheme: string;
    host: string;
    port: number;
}

export function parse(uri: string): MySQLConnectionConfig {
    const url = new URL(uri);

    return {
        schema: url.pathname.replace('/', ''),
        scheme: url.protocol.replace(':', ''),
        username: url.username,
        password: url.password,
        host: url.hostname,
        port: toNumber(url.port),
    };
}
