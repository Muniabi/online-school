import React, { useState } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Settings, X } from "lucide-react";
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

interface ProfileSettingsProps {
    className?: string;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({
    className,
}) => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const onClick = () => {
        // TODO: Сохранить настройки
        toast.success("Настройки сохранены");
    };

    return (
        <>
            <DropdownMenuItem
                className="flex items-center justify-between text-left"
                onClick={(e) => {
                    e.preventDefault(); // Предотвращаем закрытие DropdownMenu
                    setIsAlertOpen(true); // Открываем AlertDialog вручную
                }}
            >
                Настройки
                <Settings />
            </DropdownMenuItem>
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-lg font-semibold">
                            Настройки
                        </AlertDialogTitle>
                        {/* Иконка для закрытия */}
                        <X
                            className="absolute top-3 right-3 cursor-pointer"
                            onClick={() => setIsAlertOpen(false)}
                        />
                        <AlertDialogDescription>
                            Это настройки профиля
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => onClick()}>
                            Сохранить
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
