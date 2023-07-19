import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5441,
  username: 'postgres',
  password: 'postgres',
  database: 'basegeografica',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
