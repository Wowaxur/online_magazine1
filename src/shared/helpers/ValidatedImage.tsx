import React from "react";

interface ValidatedImageProps {
    src: string | undefined;
    width: string;
    height: string;
}

const ValidatedImage: React.FC<ValidatedImageProps> = ({ src, width, height }) => {
    // console.log("ValidatedImage src:", src); // Отладка

    // Проверяем, является ли изображение недействительным
    if (!src || src === "None") {
        return null; // Возвращаем null, чтобы не отрисовывать ничего
    }

    // Проверяем и создаем безопасное значение для src
    const safeSrc = src && src !== "None" ? src : undefined;

    return (
        <img
            style={{ width, height }}
            src={safeSrc} // Используем безопасное значение
            alt=""
            onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none"; // Скрыть изображение при ошибке загрузки
            }}
        />
    );
};

export default ValidatedImage;