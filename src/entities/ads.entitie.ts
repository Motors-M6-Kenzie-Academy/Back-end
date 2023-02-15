import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany,
    ManyToOne
  } from "typeorm";
  import { uuid } from "uuidv4";
  import { User } from "./user.entitie";
  import { Images } from "./images.entities";


  @Entity("ads")
  class Ads {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
  
    @Column({ length: 120, nullable:false })
    description: string;

    @Column({ length: 10, nullable:false })
    typeVehicle: string;

    @Column({ length: 50, nullable:false })
    releaseYear: string;
  
    @Column({ length: 50 })
    mileage: string;

    @Column({ length: 50, nullable:false })
    price: string;

    @Column({ length: 124 })
    cover: string;

    @Column({ length: 124 })
    images: string;
    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Images, (images) => images.ads)
    imagesList: Images[];
    
    @ManyToOne(() => User, { eager: true })
    user: User;
  }
  
  export { Ads };