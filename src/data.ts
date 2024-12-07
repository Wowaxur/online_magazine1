import { FooterData } from "./components/Pages/onlineMagazine/footer/footerDataTypes";



export interface NewsItem {
    id: number; // Уникальный идентификатор
    category: "Politics" | "Home" | "Lifestyle" | "Tech" | "Startups" | "Humans"; // Категория новости
    title: string; // Заголовок новости
    content: string; // Основной текст новости
    date: string; // Дата публикации в формате YYYY-MM-DD
    author: string; // Автор новости
    tags: string[]; // Теги (например, "Main" для главной новости)
}

export const categories: string[] = [
    "Home",
    "Tech",
    "POLITICS",
    "HUMAN",
    "ROYALS",
    "LIFESTYLE",
    "TV",
    "MUSIC",
    "HEALTH",
    "STARTUPS",
    "EVENTS",
];

interface CategoryRubrics {
    [key: string]: string[]; // Маппинг категории на список рубрик
}

export const categoryRubrics: CategoryRubrics = {
    Tech: ["Programming", "Machine Learning", "Data Science", "Visualization", "Gadgets"],
    Lifestyle: ["Religion", "Leadership", "Sexuality", "Veganism", "Spirit"],
    Home: ["Design", "Interior", "Plants", "Building", "Feng Shui"],
    Politics: ["Democratic", "Rights", "Information War", "Election", "Europe"],
    Startups: ["Venture", "Innovation", "Funding", "Entrepreneurship"],
    Humans: ["Genes", "Identity", "Society", "Psychology", "Culture"]
};

export const footerData: FooterData = {
    columns: {
        firstColumn: [
            {
                title: "POLITICS",
                links: ["Democratic", "Rights", "Information War", "Election", "Europe"],
            },
            {
                title: "ROYALS",
                links: ["Queen", "Princess Diana", "Kate Middleton"],
            },
        ],
        secondColumn: [
            {
                title: "STARTUPS",
                links: ["Venture", "Silicon Valley", "Investing"],
            },
            {
                title: "HOME",
                links: ["Design", "Interior", "Plant", "Building", "Feng Shui"],
            },
        ],
        thirdColumn: [
            {
                title: "HUMAN",
                links: ["Genes", "Identity"],
            },
            {
                title: "TECH",
                links: ["Programming", "Machine Learning", "Data Science"],
            },
            {
                title: "MUSIC",
                links: ["VMA", "Pop Culture"],
            },
        ],
        fourthColumn: [
            {
                title: "HEALTH",
                links: ["Health Explainers", "Tests", "Cancer"],
            },
            {
                title: "ABOUT US",
                links: ["About", "Careers", "Contact", "FAQ"],
            },
        ],
    },
};

export const information = [
    {
        title: "INFORMAT",
        description:
            "© 2019 Enim tempor velit enim irure nostrud irure cupidatat amet deserunt cillum laborum. Ad nisi est consequat adipisicing sint aliquip. Mollit officia ullamco. Enim tempor velit enim irure nostrud irure cupidatat amet deserunt.",
    },
];
export const news: NewsItem[] = [
    // Politics
    {
        id: 1,
        category: "Politics",
        title: "New Climate Policy Announced by Government",
        content: "The government has unveiled a bold new climate policy aimed at reducing emissions by 40% by 2030. The plan includes investments in renewable energy and stricter regulations on industrial emissions.",
        date: "2024-12-01",
        author: "Jane Doe",
        tags: ["Main"]
    },
    {
        id: 2,
        category: "Politics",
        title: "International Summit Addresses Global Security",
        content: "World leaders gathered for a summit to discuss pressing global security concerns, including cyber threats and international conflicts. The summit highlighted the need for stronger collaboration.",
        date: "2024-11-30",
        author: "Samantha Brown",
        tags: []
    },
    {
        id: 3,
        category: "Politics",
        title: "Election Results Spark Nationwide Debate",
        content: "The recent election results have led to widespread discussions about the future direction of the country. Analysts weigh in on the potential policy changes.",
        date: "2024-11-25",
        author: "Paul Davis",
        tags: []
    },
    {
        id: 4,
        category: "Politics",
        title: "New Tax Legislation Faces Criticism",
        content: "Proposed tax reforms have sparked backlash from both sides of the political spectrum. Experts predict challenges in passing the legislation.",
        date: "2024-12-03",
        author: "Lucy Evans",
        tags: []
    },
    {
        id: 5,
        category: "Politics",
        title: "Government Approves New Trade Deal",
        content: "A landmark trade agreement was approved, promising to boost economic growth and strengthen international relations.",
        date: "2024-12-02",
        author: "Chris White",
        tags: []
    },

    // Home
    {
        id: 6,
        category: "Home",
        title: "3D-Printed Houses: The Future of Affordable Living",
        content: "A new startup is revolutionizing the housing market with 3D-printed homes. These houses can be built in just 48 hours and cost significantly less than traditional construction methods.",
        date: "2024-12-03",
        author: "John Smith",
        tags: ['Main']
    },
    {
        id: 7,
        category: "Home",
        title: "Innovative Smart Kitchens on the Rise",
        content: "Smart kitchens equipped with AI-driven appliances and automated systems are becoming a reality. These kitchens promise to make cooking easier and more efficient than ever.",
        date: "2024-12-04",
        author: "David Wilson",
        tags: []
    },
    {
        id: 8,
        category: "Home",
        title: "Eco-Friendly Home Designs Gaining Popularity",
        content: "Sustainable architecture is on the rise, with eco-friendly materials and energy-efficient designs leading the way.",
        date: "2024-11-28",
        author: "Emma Green",
        tags: []
    },
    {
        id: 9,
        category: "Home",
        title: "Tiny Homes Movement Continues to Expand",
        content: "Tiny homes are becoming a popular choice for those seeking affordability and sustainability in housing.",
        date: "2024-12-01",
        author: "Oliver Brown",
        tags: []
    },
    {
        id: 10,
        category: "Home",
        title: "Smart Home Security Systems Advancing Rapidly",
        content: "New advancements in smart home technology are making security systems more efficient and reliable than ever.",
        date: "2024-12-02",
        author: "Sophia Walker",
        tags: []
    },

    // Lifestyle
    {
        id: 11,
        category: "Lifestyle",
        title: "Top 10 Travel Destinations for 2025",
        content: "As the new year approaches, travel experts have compiled a list of the top 10 destinations to visit in 2025.",
        date: "2024-11-28",
        author: "Emily Carter",
        tags: ['Main']
    },
    {
        id: 12,
        category: "Lifestyle",
        title: "The Return of Minimalist Fashion",
        content: "Minimalism is making a comeback in the fashion world, with designers embracing clean and simple designs.",
        date: "2024-12-04",
        author: "Rachel Young",
        tags: []
    },
    {
        id: 13,
        category: "Lifestyle",
        title: "Fitness Trends to Watch in 2025",
        content: "New fitness trends are emerging, focusing on holistic well-being and mental health alongside physical fitness.",
        date: "2024-11-29",
        author: "Liam Harris",
        tags: []
    },
    {
        id: 14,
        category: "Lifestyle",
        title: "Sustainable Fashion Brands to Follow",
        content: "Eco-friendly fashion is on the rise, with more brands committing to sustainability and ethical production practices.",
        date: "2024-12-01",
        author: "Mia Collins",
        tags: []
    },
    {
        id: 15,
        category: "Lifestyle",
        title: "The Rise of Plant-Based Diets",
        content: "More people are turning to plant-based diets for health and environmental benefits. Experts weigh in on its growing popularity.",
        date: "2024-12-02",
        author: "Ethan Carter",
        tags: []
    },

    // Tech
    {
        id: 16,
        category: "Tech",
        title: "AI-Powered Gadgets to Watch in 2025",
        content: "Artificial intelligence continues to transform technology. Here are the top AI-powered gadgets expected to dominate the market in 2025.",
        date: "2024-12-02",
        author: "Michael Lee",
        tags: ['Main']
    },
    {
        id: 17,
        category: "Tech",
        title: "The Evolution of 5G Networks",
        content: "5G technology is expanding, promising faster internet speeds and enhanced connectivity for users worldwide.",
        date: "2024-11-30",
        author: "Sophia Johnson",
        tags: []
    },
    {
        id: 18,
        category: "Tech",
        title: "Quantum Computing Breakthroughs in 2024",
        content: "Researchers have made significant strides in quantum computing, paving the way for advancements in various industries.",
        date: "2024-12-01",
        author: "William Brown",
        tags: []
    },
    {
        id: 19,
        category: "Tech",
        title: "Top Cybersecurity Trends for the Coming Year",
        content: "With cyber threats on the rise, experts share the latest trends in cybersecurity to keep systems and data safe.",
        date: "2024-12-03",
        author: "Ella Wilson",
        tags: []
    },
    {
        id: 20,
        category: "Tech",
        title: "Electric Cars to Dominate the Market by 2030",
        content: "Automakers are ramping up production of electric vehicles as consumer demand continues to grow.",
        date: "2024-12-04",
        author: "James White",
        tags: []
    },

    // Startups
    {
        id: 21,
        category: "Startups",
        title: "New FinTech Startup Aims to Simplify Banking",
        content: "A new financial technology company is streamlining banking services with an innovative mobile app.",
        date: "2024-12-01",
        author: "Lucas Wright",
        tags: ['Main']
    },
    {
        id: 22,
        category: "Startups",
        title: "GreenTech Startup Develops Innovative Solar Panels",
        content: "A startup has developed next-generation solar panels that are more efficient and affordable than ever.",
        date: "2024-12-03",
        author: "Olivia Martinez",
        tags: []
    },
    {
        id: 23,
        category: "Startups",
        title: "HealthTech Revolutionizes Patient Care",
        content: "A HealthTech startup is leveraging AI to improve patient outcomes and streamline medical processes.",
        date: "2024-11-29",
        author: "Benjamin Davis",
        tags: []
    },
    {
        id: 24,
        category: "Startups",
        title: "EdTech Startup Launches New Learning Platform",
        content: "An EdTech company has launched a platform designed to make education more engaging and accessible.",
        date: "2024-12-02",
        author: "Grace Johnson",
        tags: []
    },
    {
        id: 25,
        category: "Startups",
        title: "Agritech Startup Tackles Food Waste",
        content: "This startup is using AI and IoT to reduce food waste across supply chains, benefiting both consumers and the environment.",
        date: "2024-12-04",
        author: "Daniel Thompson",
        tags: []
    },

    // Humans
    {
        id: 26,
        category: "Humans",
        title: "Inspirational Story: Overcoming Adversity",
        content: "Meet a young entrepreneur who turned their struggles into a thriving business, inspiring others along the way.",
        date: "2024-12-03",
        author: "Anna Scott",
        tags: ['Main']
    },
    {
        id: 27,
        category: "Humans",
        title: "Volunteers Making a Difference in Disaster Relief",
        content: "Discover the inspiring stories of volunteers who are providing crucial support in disaster-stricken areas.",
        date: "2024-11-30",
        author: "Thomas Edwards",
        tags: []
    },
    {
        id: 28,
        category: "Humans",
        title: "Artists Redefining Creativity in 2025",
        content: "A new generation of artists is using technology to push the boundaries of creative expression.",
        date: "2024-12-01",
        author: "Charlotte Morgan",
        tags: []
    },
    {
        id: 29,
        category: "Humans",
        title: "The Rise of Community-Led Initiatives",
        content: "Local communities are stepping up to create impactful changes, showcasing the power of collaboration.",
        date: "2024-11-28",
        author: "Henry Carter",
        tags: []
    },
    {
        id: 30,
        category: "Humans",
        title: "Unsung Heroes: Teachers Shaping the Future",
        content: "Explore the stories of educators who are making a lasting impact on the next generation.",
        date: "2024-12-02",
        author: "Isabella King",
        tags: []
    }
];


export const topCategories: string[] = ['Food', 'Travel', 'Leadership', '100 Best Companies', 'Gadgets'];