import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  brand: string;

  @Column({ length: 100 })
  store: string;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price_un: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  freight: number;

  @Column({ type: "int", nullable: true })
  durability_days: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  purchase_value: number;

  @Column({ type: "date" })
  purchase_date: Date;

  @Column({ type: "date", nullable: true })
  initial_date: Date;

  @Column({ type: "date", nullable: true })
  final_date: Date;

  @Column({ length: 100, nullable: true })
  observation: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
