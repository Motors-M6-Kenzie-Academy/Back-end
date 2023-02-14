import { Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn
 } from "typeorm";
 import { uuid } from "uuidv4"; 

@Entity("addresses")
  class Addresses {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
  
    @Column({ length: 120, nullable:false })
    roadName: string;

    @Column({ length: 10, nullable:false })
    houseNumber: string;

    @Column({ length: 50, nullable:true })
    complement: string;
  
    @Column({ length: 50, nullable:false })
    zipCode: string;
    
    @Column({ length: 50 })
    state: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }

export { Addresses };