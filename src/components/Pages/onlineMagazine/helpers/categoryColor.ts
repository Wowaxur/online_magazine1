// categoryStyles.ts
import {blueLogo, greenLogo, orangeLogo, redLogo} from "../assets/images/ColorBlocks";

export const categoryStyles: Record<string, { logo: string; color: string }> = {
    Tech: { logo: blueLogo, color: "#007bff" },
    Lifestyle: { logo: orangeLogo, color: "#ff6700" },
    Home: { logo: greenLogo, color: "#008000" },
    Politics: { logo: redLogo, color: "#ff0000" },
    Startups: { logo: 'startupsLogo.png', color: '#6f42c1' }, // Добавьте Startups
    Humans: { logo: 'humansLogo.png', color: '#20c997' },
};