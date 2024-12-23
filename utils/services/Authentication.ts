import axios, { AxiosError } from "axios";

export const IP = "http://localhost:8080";

interface RegisterResponse {
    status: number;
    data: {
        message: string;
    };
}

interface LoginResponse {
    [x: string]: any;
    data: {
        accessToken: {
            accessToken: {
                token: string;
            };
        };
        account: {
            email: string;
            isTeacher: boolean;
        };
    };
    status: number;
}

export const register = async (
    email: string,
    password: string,
    isTeacher: boolean
): Promise<RegisterResponse> => {
    try {
        console.log("email: ", email);
        const response = await axios.post(`${IP}/register`, {
            email,
            password,
            isTeacher,
        });
        console.log("response", response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);

        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        const err = error as AxiosError;
        if (err.response?.status === 401) {
            throw new Error("Неверный логин или пароль.");
        } else if (err.response?.status === 500) {
            throw new Error("Ошибка сервера. Попробуйте позже.");
        } else {
            throw new Error("Ошибка. Проверьте соединение с интернетом.");
        }
    }
};

export const login = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    try {
        const response = await axios.post(`${IP}/login`, {
            email,
            password,
        });

        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        const err = error as AxiosError;

        if (err.response?.status === 401) {
            throw new Error("Неверный логин или пароль.");
        } else if (err.response?.status === 500) {
            throw new Error("Ошибка сервера. Попробуйте позже.");
        } else {
            throw new Error("Ошибка. Проверьте соединение с интернетом.");
        }
    }
};

export const logOut = async () => {
    // Логика для logOut будет зависеть от вашего API. Если нужно, напишите, и я помогу её реализовать.
};
