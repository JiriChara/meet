import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
  @Exclude()
  private readonly saltRounds = 10;

  @Exclude()
  public password: string;

  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  email: string;

  @Exclude()
  @Column({
    type: 'varchar',
    length: 255,
  })
  passwordEncrypted: string;

  @BeforeInsert()
  updatePassword() {
    this.passwordEncrypted = bcrypt.hashSync(this.password, this.saltRounds);
  }
}
