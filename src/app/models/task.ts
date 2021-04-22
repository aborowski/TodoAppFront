import { PriorityEnum } from './priority-enum';
import { User } from './user';
import { SoftDeletable } from './soft-deletable';
export interface Task {
    id: Number;
    title: string;
    description: string;
    priority: PriorityEnum;
    user: User | null;
    watchers: User[];
    deleted: SoftDeletable | null;
}