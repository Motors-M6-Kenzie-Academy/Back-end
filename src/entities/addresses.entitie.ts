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

  @Column({ length: 100 })
  roadName: string;

  @Column()
  houseNumber: number;

  @Column({ length: 100 })
  complement: string;

  @Column({ length: 9 })
  zipCode: string;

  @Column({ length: 50 })
  state: string;

  @Column({ length: 100 })
  city: string;

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

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "refUserID" })
  userAddress: User;
}

export { Addresses };
