import { UserRepository } from './../repository/users.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    validateUser(userEmail: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
