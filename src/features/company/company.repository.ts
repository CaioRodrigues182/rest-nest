
import { EntityRepository, Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
    async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
        const company = this.create(createCompanyDto).save();
        return company;
    }
}