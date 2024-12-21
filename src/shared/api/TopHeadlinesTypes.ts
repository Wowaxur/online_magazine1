type Source = {
    id: string | null; // Источник может быть null
    name: string; // Имя источника
};

export type Article = {
    source: Source; // Источник статьи
    author: string | null; // Автор может быть null
    title: string; // Заголовок статьи
    description?: string; // Описание может быть необязательным
    url: string; // URL статьи
    urlToImage?: string; // Ссылка на изображение может быть необязательной
    publishedAt: string; // Дата публикации
    content?: string; // Полный контент статьи, может быть необязательным
};

 export type NewsResponse = {
    status: string; // Например, "ok"
    totalResults: number; // Общее количество результатов
    articles: Article[]; // Массив статей
};