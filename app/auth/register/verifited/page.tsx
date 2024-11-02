"use client";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
    Button,
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/index";
export default function Verifited() {
    return (
        <>
            <div className="flex flex-col items-center justify-start min-h-screen mx-auto px-4 py-8 w-[500px]">
                <div className="text-center mb-6 ">
                    <h2 className="text-2xl font-semibold mb-2">
                        Подтвердите почту
                    </h2>
                    <p className="text-gray-600">
                        Мы отправили письмо с кодом на ваш адрес электронной
                        почты. Пожалуйста, введите его ниже, чтобы подтвердить
                        свой аккаунт.
                    </p>
                </div>
                <div className="flex justify-center mb-4">
                    <InputOTP
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
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
                </div>
                <div className="mt-4 text-center text-gray-500">
                    <p>Не получили код?</p>
                    <Button className="my-3">Отправить еще раз</Button>
                </div>
            </div>
        </>
    );
}
