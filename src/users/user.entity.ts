import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 100,
    nullable: false
  })
  firstName: string

  @Column({
    type: "varchar",
    length: 100,
    nullable: false
  })
  lastName: string

  @Column({
    type: "varchar",
    unique: true,
    nullable: false,
    length: 100
  })
  email: string

  @Column({
    type: "varchar",
    nullable: false,
    length: 100,

  })
  password: string

  @Column({
    type: "varchar",
    nullable: true,
    length: 8
  })
  gender: string
}