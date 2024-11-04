import React, { useState } from "react";
import { DropdownMenuItem } from "@/components/ui/index";
import { Sparkles, X } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/index";
import { toast } from "sonner";

interface ProSubscriptionInfoProps {
    className?: string;
}

export const ProSubscriptionInfo: React.FC<ProSubscriptionInfoProps> = ({
    className,
}) => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const onClick = () => {
        // TODO: Логика для получения PRO подписки
        toast.success("Подписка на PRO активирована!", {
            style: {
                background: "#4CAF50", // Цвет фона
                color: "#FFFFFF", // Цвет текста
                borderRadius: "8px",
            },
            duration: 5000, // Продолжительность отображения
        });
    };

    return (
        <>
            <DropdownMenuItem
                onClick={(e) => {
                    e.preventDefault(); // Предотвращаем закрытие DropdownMenu
                    setIsAlertOpen(true); // Открываем AlertDialog вручную
                }}
            >
                <Sparkles />
                Получить PRO
            </DropdownMenuItem>
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-lg font-semibold">
                            Подписка на PRO
                        </AlertDialogTitle>
                        {/* Иконка для закрытия */}
                        <X
                            className="absolute top-3 right-3 cursor-pointer"
                            onClick={() => setIsAlertOpen(false)}
                        />
                        <AlertDialogDescription>
                            <p className="mb-2">
                                Получите доступ к эксклюзивным возможностям,
                                включая:
                            </p>
                            <ul className="list-disc pl-5 mb-2">
                                <li>Приоритетная поддержка</li>
                                <li>
                                    Неограниченные возможности использования
                                </li>
                                <li>
                                    Доступ к специальным функциям и обновлениям
                                </li>
                            </ul>
                            <p className="font-semibold">Цена: $9.99 в месяц</p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => onClick()}>
                            Активировать PRO
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
