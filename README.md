# Online School

## _на React и Next.js_

Проект представляет собой платформу онлайн-школы, которая использует React и Next.js в качестве основного фронтенд-фреймворка. Проект построен с использованием Tailwind CSS (TLV) для стилизации и TypeScript для типизации. Также подключен ShadCN для создания компонентов UI.

## Tech

Dillinger uses a number of open source projects to work properly:

-   React – основная библиотека для построения интерфейсов
-   Next.js – фреймворк для серверного рендеринга и маршрутизации
-   Tailwind CSS (TLV) – для стилизации проекта
-   TypeScript – для статической типизации
-   ShadCN – библиотека компонентов для UI
-   gRPC и GraphQL – для взаимодействия с серверной частью и API

## Команды для запуска проекта:

Install the dependencies and devDependencies and start the server.

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

    •   pages/ – все страницы приложения.
    •	components/ – переиспользуемые компоненты UI.
    •	styles/ – глобальные стили, настроенные с использованием Tailwind.
    •	public/ – статичные файлы, такие как изображения и шрифты.

## Development

    •	ShadCN помогает в создании компонентов UI с Tailwind. Все компоненты можно настраивать под нужды проекта.
    •	Использование gRPC и GraphQL будет реализовано для взаимодействия с бэкендом на серверной части приложения.

## License

MIT

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
