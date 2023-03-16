import { PickType } from '@nestjs/swagger';
import { ToDo } from '../entities/to-do.entity';

export class CreateToDoDto extends PickType(ToDo, ['title', 'content', 'location', 'deadline']) {};
