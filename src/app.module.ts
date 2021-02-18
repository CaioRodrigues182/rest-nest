import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { CompanyModule } from './features/company/company.module';
import { UserModule } from './features/user/user.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CompanyModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
