import { FooterData } from "./components/Pages/onlineMagazine/Features/footer/footerDataTypes";



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
];export const news: NewsItem[] = [
    // Politics
    {
        id: 1,
        category: "Politics",
        title: "New Climate Policy Announced by Government",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nisl nec velit auctor pellentesque. Curabitur blandit quam et interdum molestie. Maecenas sit amet lorem vel magna feugiat feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempus turpis vitae mauris suscipit, nec pharetra justo interdum. Ut luctus, felis id venenatis vestibulum, risus lacus ultrices justo, at feugiat justo elit at magna.",
        date: "2024-12-01",
        author: "Jane Doe",
        tags: ["Main"]
    },
    {
        id: 2,
        category: "Politics",
        title: "International Summit Addresses Global Security",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend auctor erat. Ut tincidunt diam vel nisi pretium, in faucibus orci consectetur. Vestibulum id tincidunt felis. Fusce malesuada ultricies sapien, a vulputate nisi dapibus ut. Ut nec eros dolor. Mauris luctus auctor quam, vitae sodales augue ullamcorper in.",
        date: "2024-11-30",
        author: "Samantha Brown",
        tags: []
    },
    {
        id: 3,
        category: "Politics",
        title: "Election Results Spark Nationwide Debate",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt ligula vel nulla eleifend, nec sagittis lectus dictum. Phasellus euismod mollis nulla, vitae molestie nisi tempor in. Nam luctus id quam nec egestas. Suspendisse fringilla est eu sem dictum feugiat. Donec tincidunt non lorem id efficitur.",
        date: "2024-11-25",
        author: "Paul Davis",
        tags: []
    },
    {
        id: 4,
        category: "Politics",
        title: "New Tax Legislation Faces Criticism",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate ex, ac facilisis sapien luctus non. Fusce id neque vehicula, dignissim nulla a, dictum risus. Cras at lectus id libero luctus gravida. Suspendisse viverra, nisi sit amet mollis fermentum, eros justo suscipit est, id tincidunt odio erat vel elit. Integer ac accumsan neque. Ut pharetra, lectus non tincidunt tristique, lacus velit vehicula nulla, eget laoreet justo risus ac sapien.",
        date: "2024-12-03",
        author: "Lucy Evans",
        tags: []
    },
    {
        id: 5,
        category: "Politics",
        title: "Government Approves New Trade Deal",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, eros sed aliquet dapibus, ligula magna ultricies ligula, vel feugiat turpis ligula non velit. Integer at accumsan orci. Sed dictum mi eu tortor dignissim, ac consectetur nisi congue. Nam malesuada nisl at pharetra tristique.",
        date: "2024-12-02",
        author: "Chris White",
        tags: []
    },

    // Home
    {
        id: 6,
        category: "Home",
        title: "3D-Printed Houses: The Future of Affordable Living",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan dolor nec enim ultricies, non consequat nisl gravida. Suspendisse nec est lectus. Ut elementum justo sit amet mi feugiat, quis pellentesque nunc auctor. Nullam pellentesque vehicula quam, vitae rutrum est tempor id. Sed rhoncus lacus nec ligula gravida, sit amet luctus lacus dignissim.",
        date: "2024-12-03",
        author: "John Smith",
        tags: ["Main"]
    },
    {
        id: 7,
        category: "Home",
        title: "Innovative Smart Kitchens on the Rise",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit eros in erat malesuada, in bibendum libero porttitor. Cras convallis, orci sed rutrum hendrerit, neque ipsum vehicula lorem, vel congue nisi turpis vitae libero. Etiam fringilla vehicula lorem, nec aliquet purus porttitor et.",
        date: "2024-12-04",
        author: "David Wilson",
        tags: []
    },
    {
        id: 8,
        category: "Home",
        title: "Eco-Friendly Home Designs Gaining Popularity",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada tempor urna. Vestibulum consectetur, eros in vehicula iaculis, felis nisi condimentum magna, eget interdum orci felis sed augue. Nulla vel fringilla erat. Sed non ligula sapien. Aliquam sit amet eros vestibulum, vehicula lectus vitae, varius odio.",
        date: "2024-11-28",
        author: "Emma Green",
        tags: []
    },
    {
        id: 9,
        category: "Home",
        title: "Tiny Homes Movement Continues to Expand",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel erat ligula. Ut feugiat mollis odio, sit amet interdum eros vehicula id. Integer aliquam leo lectus, vel pellentesque sapien rutrum id. Pellentesque at dui gravida, faucibus ipsum vel, feugiat sem. Proin eu neque interdum.",
        date: "2024-12-01",
        author: "Oliver Brown",
        tags: []
    },
    {
        id: 10,
        category: "Home",
        title: "Smart Home Security Systems Advancing Rapidly",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend est id viverra efficitur. Mauris rhoncus sed lacus non tempus. Suspendisse potenti. Nam suscipit eros at ultricies facilisis. Integer molestie, sapien a vehicula sagittis, dolor nisi rhoncus ante, vitae egestas lacus nisl non sem.",
        date: "2024-12-02",
        author: "Sophia Walker",
        tags: []
    },

    // Lifestyle
    {
        id: 11,
        category: "Lifestyle",
        title: "Top 10 Travel Destinations for 2025",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non erat libero. Sed euismod felis ut fermentum feugiat. Morbi sit amet orci vehicula, egestas dui eu, dapibus lectus. Nullam volutpat est non nunc maximus, et venenatis orci interdum. Sed euismod consequat risus sit amet sollicitudin. Aliquam tempor urna sit amet metus placerat, sit amet tempor purus pharetra.",
        date: "2024-11-28",
        author: "Emily Carter",
        tags: ['Main']
    },
    {
        id: 12,
        category: "Lifestyle",
        title: "The Return of Minimalist Fashion",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nunc vel lacus sodales, nec posuere justo consectetur. Vestibulum tincidunt enim justo, in congue justo aliquet ac. Curabitur id tincidunt felis. Sed egestas lacinia lorem at efficitur. Nunc non velit non sapien volutpat convallis.",
        date: "2024-12-04",
        author: "Rachel Young",
        tags: []
    },
    {
        id: 13,
        category: "Lifestyle",
        title: "Fitness Trends to Watch in 2025",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor metus ipsum, sed mollis ante ullamcorper et. Ut tempor, justo sed sollicitudin suscipit, lorem dolor posuere justo, eu porttitor velit turpis ut nisi. Pellentesque nec tempor risus. Aliquam et turpis at arcu rhoncus sollicitudin.",
        date: "2024-11-29",
        author: "Liam Harris",
        tags: []
    },
    {
        id: 14,
        category: "Lifestyle",
        title: "Sustainable Fashion Brands to Follow",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ex et lorem auctor fermentum. Integer malesuada erat id nunc consectetur viverra. Curabitur ac bibendum enim. Nam eget nisl non lorem tincidunt dictum. Fusce at massa nunc. Sed sit amet nunc nulla. Etiam id gravida neque.",
        date: "2024-12-01",
        author: "Mia Collins",
        tags: []
    },
    {
        id: 15,
        category: "Lifestyle",
        title: "The Rise of Plant-Based Diets",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet augue eu velit dictum efficitur non at eros. Integer viverra maximus purus a convallis. Sed luctus, dui sit amet maximus dapibus, eros ex egestas lectus, non vulputate purus lorem et ipsum. Donec pellentesque suscipit neque id vulputate.",
        date: "2024-12-02",
        author: "Ethan Carter",
        tags: []
    },

    // Tech
    {
        id: 16,
        category: "Tech",
        title: "AI-Powered Gadgets to Watch in 2025",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a lacus ut ligula iaculis scelerisque. Sed ac bibendum purus. Nunc condimentum quam ac fermentum hendrerit. Mauris accumsan ligula non dui aliquet posuere. Curabitur non ex nec felis eleifend gravida. Phasellus fermentum orci a eros lacinia.",
        date: "2024-12-02",
        author: "Michael Lee",
        tags: ['Main']
    },
    {
        id: 17,
        category: "Tech",
        title: "The Evolution of 5G Networks",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac enim nec risus rutrum suscipit. Vestibulum interdum et magna nec vulputate. Etiam vestibulum id odio nec tempus. Fusce non sapien a orci varius cursus eu non ligula. Nam ullamcorper, justo a sollicitudin facilisis, purus eros mollis dui, a vulputate sapien dolor sit amet justo.",
        date: "2024-11-30",
        author: "Sophia Johnson",
        tags: []
    },
    {
        id: 18,
        category: "Tech",
        title: "Quantum Computing Breakthroughs in 2024",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus id purus auctor, interdum justo eget, pretium orci. Pellentesque nec est sit amet ligula pharetra lobortis. Aliquam condimentum, purus ut faucibus pharetra, lorem ipsum varius purus at vehicula elit. Nullam vel egestas metus.",
        date: "2024-12-01",
        author: "William Brown",
        tags: []
    },
    {
        id: 19,
        category: "Tech",
        title: "Top Cybersecurity Trends for the Coming Year",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus sollicitudin quam non malesuada. Ut vitae turpis at nulla vehicula cursus. Quisque vel odio nec metus tincidunt consequat ut at orci. Ut auctor, erat sit amet feugiat viverra, arcu sapien fermentum justo, id laoreet ligula sem vel purus.",
        date: "2024-12-03",
        author: "Ella Wilson",
        tags: []
    },
    {
        id: 20,
        category: "Tech",
        title: "Electric Cars to Dominate the Market by 2030",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisi et ipsum accumsan, ac laoreet purus iaculis. Phasellus ut ligula tincidunt, ultricies augue ut, euismod urna. Curabitur eget orci neque. Integer suscipit volutpat lacus non efficitur. Fusce tincidunt mi nec quam maximus condimentum.",
        date: "2024-12-04",
        author: "James White",
        tags: []
    },

    // Startups
    {
        id: 21,
        category: "Startups",
        title: "New FinTech Startup Aims to Simplify Banking",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis, nisi et convallis convallis, lorem nulla lobortis nisi, at placerat nisi lectus ut risus. Aenean volutpat, metus non malesuada tincidunt, purus odio scelerisque urna, id fringilla erat dolor vitae magna. Etiam quis velit ac velit malesuada sollicitudin.",
        date: "2024-12-01",
        author: "Lucas Wright",
        tags: ['Main']
    },
    {
        id: 22,
        category: "Startups",
        title: "GreenTech Startup Develops Innovative Solar Panels",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus orci sit amet eros feugiat, in vehicula libero egestas. Pellentesque volutpat, magna a feugiat vehicula, turpis lorem volutpat nisi, at dignissim libero nulla nec neque. Fusce bibendum, enim eu euismod tempus, tortor sapien congue purus, vel vulputate ligula felis id metus.",
        date: "2024-12-03",
        author: "Olivia Martinez",
        tags: []
    },
    {
        id: 23,
        category: "Startups",
        title: "HealthTech Revolutionizes Patient Care",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam placerat volutpat est at iaculis. Donec congue velit vitae sollicitudin lobortis. Phasellus congue, mauris et vulputate ultricies, velit nunc sollicitudin lectus, at egestas turpis velit eu orci. Aliquam erat volutpat. Nunc tincidunt sapien ligula, at volutpat augue vulputate et.",
        date: "2024-11-29",
        author: "Benjamin Davis",
        tags: []
    },
    {
        id: 24,
        category: "Startups",
        title: "EdTech Startup Launches New Learning Platform",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non dictum odio, vel sodales nisl. Pellentesque ut nisi at sem convallis cursus ac id libero. Nullam aliquam, nisi ac luctus feugiat, sem ligula varius elit, ac auctor turpis leo vel turpis. Vivamus euismod, libero a interdum dictum, dui neque efficitur ex, sit amet venenatis odio arcu id urna.",
        date: "2024-12-02",
        author: "Grace Johnson",
        tags: []
    },
    {
        id: 25,
        category: "Startups",
        title: "Agritech Startup Tackles Food Waste",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices mi vel lorem congue, vel facilisis eros hendrerit. Nam tempus lectus ac ligula varius cursus. Ut in enim ut lorem condimentum efficitur. Mauris gravida augue vel mauris viverra, vitae ultricies odio consequat. Nulla facilisi. Integer egestas, orci et tincidunt euismod, felis ipsum sodales enim, ac cursus turpis libero sit amet ipsum.",
        date: "2024-12-04",
        author: "Daniel Thompson",
        tags: []
    },

    // Humans
    {
        id: 26,
        category: "Humans",
        title: "Inspirational Story: Overcoming Adversity",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget orci purus. Cras et sem in purus sollicitudin accumsan. Mauris venenatis arcu sed nisl pharetra, non tempor urna consequat. Ut accumsan nulla ac lacus scelerisque placerat. Fusce vehicula, ligula id vestibulum porttitor, orci arcu convallis ipsum, ac volutpat risus felis ac ligula.",
        date: "2024-12-03",
        author: "Anna Scott",
        tags: ['Main']
    },
    {
        id: 27,
        category: "Humans",
        title: "Volunteers Making a Difference in Disaster Relief",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum nunc ut mollis vehicula. Suspendisse potenti. Sed pretium ligula at metus venenatis scelerisque. Phasellus convallis, enim sit amet fringilla euismod, nulla neque sollicitudin leo, sed vulputate eros odio ac nisl. Aliquam erat volutpat. Vivamus volutpat, lorem at convallis feugiat, nisl urna feugiat eros, nec dignissim libero risus a nulla.",
        date: "2024-11-30",
        author: "Thomas Edwards",
        tags: []
    },
    {
        id: 28,
        category: "Humans",
        title: "Artists Redefining Creativity in 2025",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nunc nec mi cursus euismod. Aenean aliquet, tortor nec condimentum venenatis, ante ligula pharetra eros, non aliquam velit libero non arcu. Donec a orci nunc. Pellentesque nec odio sed risus tincidunt scelerisque. Mauris dictum, lorem a egestas interdum, arcu purus lobortis purus, a suscipit ante arcu et velit.",
        date: "2024-12-01",
        author: "Charlotte Morgan",
        tags: []
    },
    {
        id: 29,
        category: "Humans",
        title: "The Rise of Community-Led Initiatives",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum ligula leo, a vehicula ligula cursus ac. Nam tempus et erat eget vestibulum. Etiam vel bibendum ligula, id dictum enim. Cras non mi urna. Aenean ullamcorper mauris in felis suscipit tincidunt. Nunc vitae mauris et lectus tincidunt tincidunt sit amet eget lorem.",
        date: "2024-11-28",
        author: "Henry Carter",
        tags: []
    },
    {
        id: 30,
        category: "Humans",
        title: "Unsung Heroes: Teachers Shaping the Future",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit nulla orci, eu luctus lorem cursus in. Pellentesque cursus purus eget libero aliquam, in feugiat nulla scelerisque. Nulla facilisi. Sed viverra velit ut nisi malesuada, ac vestibulum urna aliquet. Nam eget neque ac sapien fringilla efficitur.",
        date: "2024-12-02",
        author: "Isabella King",
        tags: []
    }
];


export const topCategories: string[] = ['Food', 'Travel', 'Leadership', '100 Best Companies', 'Gadgets'];