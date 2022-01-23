import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    test(user: any): void;
}
