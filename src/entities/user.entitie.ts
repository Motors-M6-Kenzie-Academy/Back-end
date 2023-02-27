import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Ads } from "./ads.entitie";
import { Addresses } from "./addresses.entitie";
import { Exclude } from "class-transformer";
import { Comment } from "./comments.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ length: 100 })
  @Exclude()
  password: string;

  @Column({ length: 17 })
  phoneNumber: string;

  @Column({ length: 17 })
  birthDate: string;

  @Column({ length: 250 })
  description: string;

  @Column({ length: 10 })
  accountType: "Anunciante" | "Comprador";

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

  @OneToOne(() => Addresses)
  address: Addresses;

  @OneToMany(() => Ads, (ads) => ads.user, { eager: true })
  ads: Ads[];

  @OneToMany(() => Comment, (comments) => comments.user, {
    cascade: true,
    eager: true,
  })
  comments: Comment[];
}

export { User };
