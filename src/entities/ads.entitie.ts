import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entitie";

@Entity("ads")
class Ads {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 120, nullable: false })
  title: string;

  @Column({ length: 120, nullable: false })
  description: string;

  @Column({ length: 10, nullable: false })
  typeVehicle: "motorbike" | "car";

  @Column({ default: true })
  isPublished: boolean;

  @Column({ default: "sell" })
  typeAds: "sell" | "bid";

  @Column({ length: 50, nullable: false })
  releaseYear: string;

  @Column({ length: 50 })
  mileage: string;

  @Column({ length: 50, nullable: false })
  price: string;

  @Column({ length: 124 })
  cover: string;

  @Column({ length: 124 })
  gallery_image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, { eager: true })
  user: User;
}

export { Ads };
