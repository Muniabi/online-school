import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { email, code } = await request.json();

        // Создаем тестовый аккаунт
        const testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        const mailOptions = {
            from: '"KuberCode" <noreply@kubercode.com>',
            to: email,
            subject: "Подтверждение регистрации",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Подтверждение регистрации</h2>
                    <p>Ваш код подтверждения:</p>
                    <h1 style="font-size: 32px; letter-spacing: 5px; text-align: center; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">${code}</h1>
                    <p>Код действителен в течение 10 минут.</p>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        return NextResponse.json({
            success: true,
            previewUrl: nodemailer.getTestMessageUrl(info),
        });
    } catch (error) {
        console.error("Ошибка при отправке email:", error);
        return NextResponse.json(
            { error: "Ошибка при отправке email" },
            { status: 500 }
        );
    }
}
