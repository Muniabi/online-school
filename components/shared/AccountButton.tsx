import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
} from "@/components/ui/index";
import { LockKeyhole } from "lucide-react";

interface Props {
    className?: string;
}

export const AccountButton: React.FC<Props> = ({ className }) => {
    const { data: session } = useSession();

    return (
        <div className={className}>
            {!session ? (
                <div className="flex items-center gap-2">
                    <Link href="/login">
                        <Button variant={"ghost"} className="dark:text-white">
                            <LockKeyhole size={24} />
                            Войти
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button>Регистрация</Button>
                    </Link>
                </div>
            ) : (
                <>
                    <Link href="/account">
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </>
            )}
        </div>
    );
};