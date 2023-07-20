import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'reyou_database',
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: [`${__dirname}/migrations/{.ts,*.js}`],
  synchronize: true,
});

export default AppDataSource;
