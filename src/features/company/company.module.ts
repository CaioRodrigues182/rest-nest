import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRepository } from './company.repository';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyRepository])],
    providers: [CompanyService],
    controllers: [CompanyController]
})
export class CompanyModule {}
