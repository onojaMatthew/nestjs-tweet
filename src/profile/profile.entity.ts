import { User } from "../users/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 100,
    nullable: true,
  })
  firstName: string

  @Column({
    type: "varchar",
    length: 100,
    nullable: true,
  })
  lastName: string

  @Column({
    type: "varchar",
    length: 8,
    nullable: true,
  })
  gender: string

  @Column({
    type: "timestamp",
    nullable: true
  })
  dateOfBirth: Date

  @Column({
    type: "text",
    nullable: true
  })
  bio: string

  @Column({
    type: "text",
    nullable: true
  })
  profileImage: string

  @OneToOne(() => User, (user) => user.profile, { onDelete: "CASCADE" }) //Declare a one to one relattionship and point to the field in the user table that is reference in the Profile table. When a user is deleted, the corresponding profile should is deleted
  @JoinColumn()
  user: User
}