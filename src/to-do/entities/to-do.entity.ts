import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ToDo {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({ nullable: true })
    location: string;

    @Column()
    added: Date;

    @Column()
    deadline: Date;
}
