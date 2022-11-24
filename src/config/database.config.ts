import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import PostEntity from '../post/post.entity';
console.log(__dirname )
const databaseConfig: DataSourceOptions = {
  name: 'default',
  migrationsRun: true,
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +process.env.POSTGRES_PORT || 5433,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '1',
  database: process.env.POSTGRES_DB || 'todos',
  entities: [PostEntity],
  logging: true,
  migrationsTableName: "migrations",
  migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
  synchronize: false,
};
export default databaseConfig;