import styles from "../Features/mainContent/MainNewsBlock/rightSideBar/popular/popular.module.css";

export const getCategoryClass = (category: string): string => {
    switch (category.toUpperCase()) {
        case "TECH":
            return styles.tech;
        case "POLITICS":
            return styles.politics;
        case "HOME":
            return styles.home;
        case "HUMANS":
            return styles.human;
        case "STARTUPS":
            return styles.startups;
        case "HEALTH":
            return styles.health;
        case "LIFESTYLE":
            return styles.lifestyle;
        default:
            return "";
    }
}