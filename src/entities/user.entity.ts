import { Column, Entity, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity('user_')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}
