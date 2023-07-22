import { Column, Entity, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity('user_')
export class User {
    @Column({ primary: true, generated: 'uuid' })
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}
