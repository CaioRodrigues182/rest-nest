import { Company } from '../company.entity';

export class ReturnCompanyDto {
  company: Company;
  message: string;
}