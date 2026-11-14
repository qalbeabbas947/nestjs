import { Injectable } from '@nestjs/common';
import { LoggerService } from './dto/user.logger.js';

interface User {
    id: number;
    name: string;
    email: string;
}

@Injectable()
export class UserService {
    constructor( private readonly logger: LoggerService ) {

    }

    private users: User[] = [
        { id: 1, name: 'Abbas', email: 'abbas@abbas.com' },
        { id: 2, name: 'Alvi', email: 'abbas@abbas.com' },
        { id: 3, name: 'kashan', email: 'kashan@kashan.com' }
    ];


    findAllUser( name: string='' ) {
        this.logger.log('Find All User is called.');

        return this.users.filter( (user) => user.name.includes(name.toLowerCase()) );
    }
}
