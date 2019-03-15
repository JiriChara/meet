import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column()
  description: string;
}
