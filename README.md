# Online School

## _на React и Next.js_

Проект представляет собой платформу онлайн-школы, которая использует React и Next.js в качестве основного фронтенд-фреймворка. Проект построен с использованием Tailwind CSS (TLV) для стилизации и TypeScript для типизации. Также подключен ShadCN для создания компонентов UI.

-   Type some Markdown on the left
-   See HTML in the right
-   ✨Magic ✨

## Features

-   Import a HTML file and watch it magically convert to Markdown
-   Drag and drop images (requires your Dropbox account be linked)
-   Import and save files from GitHub, Dropbox, Google Drive and One Drive
-   Drag and drop markdown and HTML files into Dillinger
-   Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is \*actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

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
