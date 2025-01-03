export const sendVerificationEmail = async (email: string, code: string) => {
    try {
        const response = await fetch("/api/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, code }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Ошибка при отправке email");
        }

        console.log("Preview URL:", data.previewUrl);
        return true;
    } catch (error) {
        console.error("Ошибка при отправке email:", error);
        throw error;
    }
};
