import { DataSource } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'reyou_database',
  entities: ['user'],
  migrations: [`src/migrations/{.ts,*.js}`],
  synchronize: true,
});

export default AppDataSource;
