# Use Cases для платформы “Куберкод”

## 1. Use Cases для студентов

#### 1.1 Регистрация

Цель: Студент создает учетную запись для доступа к платформе.
Акторы: Студент, система платформы.
Процесс:

1. Студент вводит email и пароль.
2. Подтверждает email через код из письма.
3. Система создает учетную запись.
4. Студент получает доступ к базовому функционалу.

#### 1.2 Авторизация

Цель: Вход в платформу для продолжения обучения.
Акторы: Студент, система платформы.
Процесс:

1. Студент вводит email и пароль.
2. Система проверяет данные и предоставляет доступ.

#### 1.3 Просмотр списка курсов

Цель: Найти интересный курс для изучения.
Процесс:

1. Студент открывает страницу с курсами.
2. Система отображает список доступных курсов с описанием и рейтингами.
3. Студент фильтрует курсы по категории, уровню сложности или преподавателю.

#### 1.4 Запись на курс

Цель: Зарегистрироваться на выбранный курс.
Процесс:

1. Студент выбирает курс и нажимает “Записаться”.
2. Если курс платный, система предлагает оплату.
3. После успешной оплаты студент получает доступ к материалам.

#### 1.5 Прохождение урока

Цель: Изучить материалы курса.
Процесс:

1. Студент открывает страницу урока.
2. Система отображает текстовые материалы, видео, тесты.
3. Студент выполняет тесты и получает результаты.

#### 1.6 Участие в соревнованиях

Цель: Прокачивать навыки и соревноваться с другими студентами.
Процесс:

1. Студент регистрируется на соревнование.
2. Система предоставляет задачу для кодинга.
3. После выполнения задачи система сравнивает результаты участников.

#### 1.7 Просмотр достижений

Цель: Мотивировать себя через прогресс и бонусы.
Процесс:

1. Студент открывает профиль.
2. Система отображает список достижений и текущий рейтинг.

## 2. Use Cases для преподавателей

#### 2.1 Регистрация

Цель: Создать учетную запись преподавателя.
Процесс:

1. Преподаватель вводит email, пароль, описание опыта.
2. Подтверждает email через код из письма.
3. Система активирует аккаунт после проверки.

#### 2.2 Авторизация

Цель: Получить доступ к инструментам преподавателя.
Процесс:

1. Преподаватель вводит email и пароль.
2. Система проверяет данные и предоставляет доступ.

#### 2.3 Создание курса

Цель: Разработать новый курс для студентов.
Процесс:

1. Преподаватель выбирает “Создать курс”.
2. Вводит название, описание, программу курса.
3. Загружает учебные материалы (видео, тесты).
4. Система публикует курс после модерации.

#### 2.4 Управление курсами

Цель: Редактировать или удалять курсы.
Процесс:

1. Преподаватель открывает список своих курсов.
2. Выбирает курс для редактирования.
3. Вносит изменения (тексты, тесты, видео).
4. Система сохраняет обновления.

#### 2.5 Проведение вебинаров

Цель: Общаться со студентами в реальном времени.
Процесс:

1. Преподаватель планирует вебинар.
2. Указывает дату, время, тему.
3. Система отправляет приглашения студентам.
4. Во время вебинара преподаватель взаимодействует через чат и видео.

#### 2.6 Просмотр статистики

Цель: Анализировать успехи студентов.
Процесс:

1. Преподаватель открывает раздел статистики.
2. Система отображает успеваемость, выполненные тесты, участие в соревнованиях.

## 3. Use Cases для администратора

#### 3.1 Управление пользователями

Цель: Модерировать платформу.
Процесс:

1. Администратор просматривает список пользователей.
2. Редактирует или блокирует аккаунты при необходимости.

#### 3.2 Модерация курсов

Цель: Обеспечить качество контента.
Процесс:

1. Администратор проверяет новые курсы.
2. Одобряет или возвращает на доработку преподавателю.

#### 3.3 Анализ статистики

Цель: Оптимизировать работу платформы.
Процесс:

1. Администратор открывает панель аналитики.
2. Анализирует данные о регистрации, активности студентов, популярности курсов.

## 4. Use Cases для системы

#### 4.1 Отправка уведомлений

Цель: Информировать пользователей о важных событиях.
Процесс:

1. Система отправляет email при регистрации, записи на курс, обновлениях.

#### 4.2 Хранение и обработка данных

Цель: Обеспечить надежное хранение информации.
Процесс:

1. Система сохраняет данные в базе (курсы, профили, достижения).
2. Обрабатывает запросы через REST API.

## 5. Альтернативные сценарии

    •	Неудачная регистрация: Если пользователь не подтверждает email, учетная запись не активируется.
    •	Отказ в модерации курса: Если курс не соответствует стандартам, он возвращается преподавателю с комментариями.
    •	Срыв вебинара: При технических проблемах система отправляет уведомление о переносе.

##### Эти Use Cases охватывают все ключевые взаимодействия пользователей и системы на платформе “Куберкод”, обеспечивая полный цикл работы для студентов, преподавателей и администраторов.
