import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  @Unique(['cnpj'])
  export class Company extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    fantasyName: string;
  
    @Column({ nullable: false, type: 'varchar', length: 20 })
    cnpj: number;
  
    @Column({ nullable: false, default: true })
    active: boolean;
  
    @Column({ nullable: true })
    photo: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }