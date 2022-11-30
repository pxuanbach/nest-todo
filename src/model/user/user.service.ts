import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService { // extend BaseService
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository
    ) { }

    async getAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getById(id: string): Promise<User> {
        const user = await this.userRepository.findOneBy({ id: id });
        if (user) {
            return user;
        }
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    async create(createDto: CreateUserDto): Promise<User> {
        const User = this.userRepository.create(createDto);
        return this.userRepository.save(User);
    }

    async update(id: string, updateDto: UpdateUserDto): Promise<User> {
        await this.userRepository.update(id, updateDto)
        const user = await this.userRepository.findOneBy({ id: id })
        if (user) {
            return user;
        }
    }

    async delete(id: string) {
        const deletedUser = await this.userRepository.delete({ id: id })
        if (!deletedUser.affected) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return { deleted: true };
    }
}