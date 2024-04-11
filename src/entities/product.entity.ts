import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import {
  IsDate,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from "class-validator";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  @IsString({ message: "name deve ser uma string" })
  @IsNotEmpty()
  @Length(1, 100, { message: "o nome deve ter entre 1 e 100 caracteres" })
  name: string;

  @Column({ length: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  brand: string;

  @Column({ length: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  store: string;

  @Column({ type: "int" })
  @IsPositive()
  @IsInt()
  quantity: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  @IsPositive()
  @IsDecimal()
  price_un: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  @IsNumber()
  freight: number;

  @Column({ type: "int", nullable: true })
  @IsNumber()
  durability_days: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  @IsNumber()
  @IsPositive()
  purchase_value: number;

  @Column({ type: "date" })
  @IsDate()
  purchase_date: Date;

  @Column({ type: "date", nullable: true })
  @IsOptional()
  @IsDate()
  initial_date: Date;

  @Column({ type: "date", nullable: true })
  @IsOptional()
  @IsDate()
  final_date: Date;

  @Column({ length: 100, nullable: true })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  observation: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
