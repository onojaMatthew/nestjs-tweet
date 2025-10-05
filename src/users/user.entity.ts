import { Profile } from "../profile/profile.entity";
import { Tweet } from "../tweet/tweet.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 24,
    nullable: false
  })
  username: string

  @Column({
    type: "varchar",
    unique: true,
    nullable: false,
    length: 100
  })
  email: string

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: ["insert", "remove"],
  })
  profile: Profile

  @Column({
    type: "varchar",
    nullable: false,
    length: 100,

  })
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];
}