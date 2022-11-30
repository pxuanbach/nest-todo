
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class Task {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;
 
  @Column()
  content: string;

  @Column()
  status: string;
}
 
export default Task;