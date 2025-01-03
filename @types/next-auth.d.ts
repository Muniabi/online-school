// @types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
            accessToken: string;
            refreshToken: string;
            isTeacher: boolean;
        };
    }

    interface User {
        id: string;
        email: string;
        name: string;
        accessToken: string;
        refreshToken: string;
        isTeacher: boolean;
    }
}
