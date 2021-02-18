import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { CompanyRepository } from './company.repository';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(CompanyRepository)
        private companyRepository: CompanyRepository,
    ) {}

    async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
        return await this.companyRepository.createCompany(createCompanyDto);
    }
}
