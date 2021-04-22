import { SoftDeletable } from './soft-deletable';
export interface User {
    id: Number;
    username: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    deleted: SoftDeletable | null;
}