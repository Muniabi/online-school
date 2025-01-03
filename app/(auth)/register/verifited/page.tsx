"use client";
import { useRouter } from "next/navigation";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useEffect, useState } from "react";
import { sendVerificationEmail } from "@/utils/services/emailService";
import { register } from "@/utils/services/Authentication";
import {
    Button,
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/index";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Verifited() {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleResendCode = async () => {
        const email = localStorage.getItem("pendingEmail");
        if (email) {
            const newCode = Math.floor(
                100000 + Math.random() * 900000
            ).toString();
            localStorage.setItem("verificationCode", newCode);
            await sendVerificationEmail(email, newCode);
        }
    };

    const verifyCode = async (inputCode: string) => {
        setIsVerifying(true);
        setError(null);

        try {
            const savedCode = localStorage.getItem("verificationCode");
            if (inputCode === savedCode) {
                setIsSuccess(true);

                // Получаем сохраненные данные для регистрации
                const email = localStorage.getItem("pendingEmail");
                const password = localStorage.getItem("pendingPassword");
                const isTeacher =
                    localStorage.getItem("pendingIsTeacher") === "true";

                if (!email || !password) {
                    throw new Error("Данные для регистрации не найдены");
                }

                // Выполняем регистрацию
                await register(email, password, isTeacher);

                // Очищаем все временные данные
                localStorage.removeItem("verificationCode");
                localStorage.removeItem("pendingEmail");
                localStorage.removeItem("pendingPassword");
                localStorage.removeItem("pendingIsTeacher");

                // Небольшая задержка перед редиректом для отображения анимации успеха
                setTimeout(() => {
                    router.push("/dashboard");
                }, 1500);
            } else {
                setError("Неверный код подтверждения");
                setValue("");
            }
        } catch (error) {
            console.error("Ошибка при регистрации:", error);
            setError("Произошла ошибка при регистрации");
        } finally {
            setIsVerifying(false);
        }
    };

    useEffect(() => {
        if (value.length === 6) {
            verifyCode(value);
        }
    }, [value]);

    return (
        <div className="flex flex-col items-center justify-start min-h-screen mx-auto px-4 py-8 w-[500px]">
            <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-semibold mb-2">
                    Подтвердите почту
                </h2>
                <p className="text-gray-600">
                    Мы отправили письмо с кодом на ваш адрес электронной почты.
                    Пожалуйста, введите его ниже, чтобы подтвердить свой
                    аккаунт.
                </p>
            </motion.div>

            <motion.div
                className="flex justify-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <InputOTP
                    maxLength={6}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    disabled={isVerifying || isSuccess}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </motion.div>

            {isVerifying && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <Loader2 className="h-8 w-8 animate-spin mx-auto" />
                    <p className="mt-2">Проверка кода...</p>
                </motion.div>
            )}

            {isSuccess && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center text-green-500"
                >
                    <svg
                        className="h-16 w-16 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <p className="mt-2">Код подтвержден!</p>
                </motion.div>
            )}

            {error && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 mt-2"
                >
                    {error}
                </motion.p>
            )}

            <motion.div
                className="mt-4 text-center text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <p>Не получили код?</p>
                <Button
                    className="my-3"
                    onClick={handleResendCode}
                    disabled={isVerifying || isSuccess}
                >
                    Отправить еще раз
                </Button>
            </motion.div>
        </div>
    );
}
