import { UserRepository } from './../repository/users.repository';
import { Strategy } from 'passport-local';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(userEmail: string, password: string): Promise<any>;
}
export {};
