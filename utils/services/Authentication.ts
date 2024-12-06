import axios, { AxiosError } from "axios";

export const IP = "http://localhost:3001";

interface RegisterResponse {
    status: number;
    data: {
        message: string;
    };
}

interface LoginResponse {
    data: {
        accessToken: {
            accessToken: {
                token: string;
            };
        };
        refreshToken: {
            refreshToken: {
                token: string;
            };
        };
        account: {
            email: string;
            isCompany: boolean;
        };
    };
    status: number;
}

export const register = async () => {};

export const login = async () => {};
