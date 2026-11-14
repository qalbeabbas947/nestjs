import { Controller, Get, Query, Param, Body, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto.js';
import { UpdateUserDTO } from './dto/update-user.dto.js';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }
    //Get Firt User
    @Get()
    getUsers() {
        this.userService.findAllUser('abbas');
        
        return [
            {
                id: 1,
                name: 'Jon Doe'
            },
            {
                id: 2,
                name: 'Adrian'
            }
        ];
    }

     @Get('all')  //  user/all
    getUsersall() {
        return [
            {
                id: 1,
                name: 'Jon Doe'
            },
            {
                id: 2,
                name: 'Adrian'
            }
        ];
    }

    // @Get('single/:id')  //  user/1
    // getUser( @Param('id') idno: number):User {
    //     return {
    //             idno: idno,
    //             name: 'Jon Doe',
    //         };
    // }

    @Get('query')  //  user/query?name=value
    getQueryUser(@Query('name') name: string) {
        // return [
        //     {
        //         id: 1,
        //         name: name || 'Jon Doe'  //replaces the name in return array
        //     },
        //     {
        //         id: 2,
        //         name: 'Adrian'
        //     }
        // ];

        const users = [
            {
                id: 1,
                name: 'abbas'  //replaces the name in return array
            },
            {
                id: 2,
                name: 'Adrian'
            }
        ];

        if( name ) {
            return users.filter((user) => user.name.includes(name.toLowerCase()));
        }

        return users;
    }

    @Post('creatuser')
    creatuser(@Body() body: CreateUserDTO ) {
        return { message: 'Item created', data: body };
    }

    @Put('updateuser/:id')
    updateuser( @Param('id') id:number, @Body() body: UpdateUserDTO ) {
        return { message: 'Item updated', ...body };

    }


}
