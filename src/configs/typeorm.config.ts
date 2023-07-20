import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'reyou_database',
  entities: [`${__dirname}/entity/{.ts,*.js}`],
  migrations: [`${__dirname}/migrations/{.ts,*.js}`],
  migrationsRun: true,
};
