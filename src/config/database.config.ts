import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import Task from '../model/task/task.entity';
import { User } from '../model/user/entity/user.entity';

console.log(__dirname)
const databaseConfig: DataSourceOptions = {
  name: 'default',
  migrationsRun: true,
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '1',
  database: process.env.POSTGRES_DB || 'app',
  entities: [Task, User],
  logging: true,
  migrationsTableName: "migrations",
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  synchronize: true,
};
export default databaseConfig;