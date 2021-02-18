import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'abm-admin',
  password: 'abm@2021',
  database: 'abm',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};