import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entitie";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  roadName: string;

  @Column()
  houseNumber: number;

  @Column()
  complement: string;

  @Column()
  zipCode: string;

  @Column()
  state: string;

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

  @OneToOne(() => User)
  @JoinColumn()
  userAddress: User;
}

export { Addresses };
