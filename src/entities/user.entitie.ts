import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Ads } from "./ads.entitie";
import { Addresses } from "./addresses.entitie";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Column()
  birthDate: string;

  @Column()
  description: string;

  @Column()
  accountType: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  @OneToOne(() => Addresses, { nullable: true })
  @JoinColumn()
  address: Addresses;

  @OneToMany(() => Ads, (ads) => ads.user.id)
  ads: Ads[];
}

export { User };
