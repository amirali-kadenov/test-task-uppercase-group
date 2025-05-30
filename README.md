# Приложение для просмотра фильмов

## Инструкция по установке и запуску

### Требования
- Node.js 18+ 
- PNPM

### Установка

```bash
# Установка зависимостей
pnpm install
```

### Запуск

```bash
# Запуск в режиме разработки
pnpm dev

# Сборка для продакшена
pnpm build

# Запуск продакшен-версии
pnpm start
```

## Архитектура проекта

Проект следует архитектуре [Feature-Sliced Design](https://feature-sliced.design/):

- **app** - Next.js App Router
- **src**
  - **entities** - бизнес-сущности (фильмы, избранное)
  - **features** - пользовательские фичи (добавление в избранное, поиск)
  - **pages** - страницы приложения
  - **shared** - переиспользуемые компоненты и утилиты
  - **widgets** - композиционные компоненты

## Основные функции

- Просмотр списка фильмов с бесконечной прокруткой
- Детальная страница фильма
- Добавление/удаление фильмов в избранное
- Поиск фильмов
- Адаптивный дизайн

## Технологический стек

- [Next.js 15](https://nextjs.org) - React-фреймворк
- TypeScript - типизация
- [React Query](https://tanstack.com/query/latest) - управление серверным состоянием
- [Zustand](https://github.com/pmndrs/zustand) - управление клиентским состоянием
- [Shadcn UI](https://ui.shadcn.com/) - компоненты интерфейса
- [Tailwind CSS](https://tailwindcss.com/) - стилизация
- [Axios](https://axios-http.com/) - HTTP-клиент

## Дополнительные фичи

- Серверные компоненты React
- Streaming и прогрессивная загрузка контента
- Оптимизированная загрузка изображений
- Темная/светлая тема
- Кэширование запросов
- Бесконечная прокрутка с использованием Intersection Observer
- Дебаунс при поиске
