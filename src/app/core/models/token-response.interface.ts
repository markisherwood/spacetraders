import { User } from "./user.interface";

export interface TokenResponse {
    token: string,
    user: User,
}