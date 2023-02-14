import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    OneToMany,
    JoinColumn
  } from "typeorm";
  import { uuid } from "uuidv4";
  import { Exclude } from "class-transformer";
  import { Ads } from "./ads.entitie";
  import { Addresses } from "./addresses.entitie";


  @Entity("users")
  class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
  
    @Column({ length: 50 })
    name: string;
  
    @Column({ length: 50, unique: true })
    email: string;
  
    @Column({ length: 120 })
    @Exclude()
    password: string;

    @Column({ length: 13, unique: true })
    phoneNumber: string;

    @Column({ length: 8 })
    birthDate: string;

    @Column({ length: 120 })
    description: string;

    @Column({ length: 8 })
    accountType: string;
  
    @Column({ default: false })
    readonly isAdm: boolean;
  
    @Column({ default: true })
    readonly isActive: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Addresses, { nullable: true })
    @JoinColumn()
    address: Addresses;
    
    @OneToMany(() => Ads, (ads) => ads.user)
    ads: Ads[];
  }
  
  export { User };