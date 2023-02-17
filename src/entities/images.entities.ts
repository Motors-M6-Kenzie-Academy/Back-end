import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Ads } from "./ads.entitie";

@Entity("images")
class Images {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 250 })
  urlImage: string;

  @ManyToOne(() => Ads)
  ads: Ads;
}

export { Images };
