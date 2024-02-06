import { DataSource } from 'typeorm';
import { parse } from '../../../utils/db';
import { User } from '../rds/user/entity/User';

const dbUri = parse(process.env.DB_URI!);

export const AppDataSource = new DataSource({
  type: dbUri.scheme as 'mysql',
  host: dbUri.host,
  port: dbUri.port,
  username: dbUri.username,
  password: dbUri.password,
  database: dbUri.schema,
  synchronize: false,
  logging: false,
  entities: [User], // __dirname + '/../../**/entity/*{.ts,.js}'
  migrations: [],
  subscribers: [],
});
