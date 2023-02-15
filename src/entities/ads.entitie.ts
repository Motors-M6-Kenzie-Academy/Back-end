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
import { Images } from "./images.entities";

@Entity("ads")
class Ads {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  description: string;

  @Column()
  typeVehicle: string;

  @Column()
  releaseYear: number;

  @Column()
  mileage: number;

  @Column()
  price: number;

  @Column()
  cover: string;

  @Column()
  images: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  @OneToMany(() => Images, (images) => images.ads)
  imagesList: Images[];

  @ManyToOne(() => User, { eager: true })
  user: User;
}

export { Ads };
