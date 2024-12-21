export function addOpacityToColor(color: string, opacity: number): string {
    if (color.startsWith('#')) {
        // Преобразование HEX в RGBA
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (color.startsWith('rgb')) {
        // Преобразование RGB в RGBA
        return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
    }
    return color; // Вернуть исходный цвет, если формат не поддерживается
}