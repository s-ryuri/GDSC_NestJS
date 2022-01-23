import { JwtPayload } from './../dto/auto.dto';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload): Promise<{
        nickname: string;
        id: number;
    }>;
}
export {};
