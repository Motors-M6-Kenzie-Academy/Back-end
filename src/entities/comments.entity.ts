import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Ads } from "./ads.entitie";
import { User } from "./user.entitie";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 120, nullable: false })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: "CASCADE",
  })
  user: User;

  @ManyToOne(() => Ads, (ads) => ads.comments, {
    onDelete: "CASCADE",
  })
  ad: Ads;
}

export { Comment };
