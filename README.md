# Куберкод

## Документация:

-   [Техническое задание](./docs/TZ.md)
-   [UseCase](./docs/UseCases.md)

## _на React и Next.js_

Проект представляет собой платформу онлайн-школы, которая использует React и Next.js в качестве основного фронтенд-фреймворка. Проект построен с использованием Tailwind CSS (TLV) для стилизации и TypeScript для типизации. Также подключен ShadCN для создания компонентов UI.

## Tech

Для правильной работы KuberCode использует ряд проектов с открытым исходным кодом:

-   React – основная библиотека для построения интерфейсов
-   Next.js – фреймворк для серверного рендеринга и маршрутизации
-   Tailwind CSS (TLV) – для стилизации проекта
-   TypeScript – для статической типизации
-   ShadCN – библиотека компонентов для UI
-   gRPC и GraphQL – для взаимодействия с серверной частью и API

## Команды для запуска проекта:

Установите зависимости и devDependencies и запустите сервер.

```sh
npm i
```

Запускает сервер разработки на localhost:3000

Сборка проекта для продакшена:

```sh
npm run build
```

Собирает оптимизированную версию приложения для продакшена.

Запуск сборки:

```sh
npm start
```

## Структура проекта:

    •   app/ – все страницы приложения.
    •	components/ – переиспользуемые компоненты UI.
    •	public/ – статичные файлы, такие как изображения и шрифты.

## Development

    •	ShadCN помогает в создании компонентов UI с Tailwind. Все компоненты можно настраивать под нужды проекта.
    •	Использование gRPC и GraphQL будет реализовано для взаимодействия с бэкендом на серверной части приложения.

## License

MIT

## Авторизация

В проекте используется NextAuth для управления аутентификацией.

### Основные особенности:

-   Вся авторизация проходит через NextAuth
-   Токены и данные пользователя хранятся в сессии NextAuth
-   Поддерживается авторизация через социальные сети (GitHub, Google, VK)
-   Реализована авторизация по email/password
-   Сессия содержит все необходимые данные пользователя

### Использование данных сессии в компонентах:

```typescript
const { data: session } = useSession();

// Доступ к данным
console.log(session?.user?.email);
console.log(session?.user?.accessToken);
console.log(session?.user?.isTeacher);
```

### Доступные методы авторизации:

-   Email/Password
-   GitHub
-   Google
-   VK

### Структура данных пользователя в сессии:

```typescript
interface User {
    id: string;
    email: string;
    name: string;
    accessToken: string;
    isTeacher: boolean;
}
```

### Защита роутов:

Для защиты роутов используйте хук useSession:

```typescript
const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
        redirect("/login");
    },
});
```

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
