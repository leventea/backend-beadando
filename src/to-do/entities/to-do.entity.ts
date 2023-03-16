import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ToDo {
    @PrimaryGeneratedColumn("uuid")
    @IsUUID()
    id: string;

    @Column()
    @IsNotEmpty()
    title: string;

    @Column()
    @IsString()
    content: string;

    @Column({ nullable: true })
    @IsOptional()
    @IsString()
    location?: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    @IsDateString()
    added: Date;

    @Column({ type: 'timestamptz', nullable: true })
    @IsOptional()
    @IsDateString()
    deadline?: Date;
}
