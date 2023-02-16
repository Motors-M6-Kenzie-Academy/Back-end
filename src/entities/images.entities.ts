import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Ads } from "./ads.entitie";

@Entity("images")
class Images {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  urlImage: string;

  @ManyToOne(() => Ads, { eager: true })
  ads: Ads;
}

export { Images };
