// Описание отдельной секции футера
export type FooterLinkSection = {
    title: string; // Заголовок секции
    links?: string[]; // Список ссылок (опционально)
    description?: string; // Альтернативное описание (если нет ссылок)
};

// Основной тип данных футера
export type FooterData = {
    columns: {
        firstColumn: FooterLinkSection[];
        secondColumn: FooterLinkSection[];
        thirdColumn: FooterLinkSection[];
        fourthColumn: FooterLinkSection[];
    };
};