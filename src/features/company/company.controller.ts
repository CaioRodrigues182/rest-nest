import { Controller, Post, Body } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ReturnCompanyDto } from './dto/return-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post()
  async createAdminUser(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<ReturnCompanyDto> {
    const company = await this.companyService.createCompany(createCompanyDto);
    return {
      company,
      message: 'Empresa cadastrado com sucesso',
    };
  }
}