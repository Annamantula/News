import outBigCartNews from "./newsMainCardConfig.js"
import outCards from "./outCards.js";
import trendsNewsCardConfig from "./trendsNewsCardConfig.js";
import newsMainCardConfig from "./newsMainCardConfig.js";


const news=[
    {id:1,
    tag:'sport',
    img:'./piblic/news1.jpg',
    date: new Date(2020,10,4,11,58),
    title:"Требониан Галл просиходил из странного рода.В конце правления императора"+"Деция Траяна он занимал должность легата",
    description:"Будущий император Гай Вибий Требониан Галл родился около 206 года.",
    likesCount: 11500,
    commentsCount:1500,
    isLiked:true,
    },
    {id:2,
    tag:'nature',
    img:'./piblic/news1.jpg',
     date: new Date(2021,10,4,11,58),
    title:"China is using satellites to police the protection of nature — but will it work?",
    description:"China's government is the first to use satellites to monitor land set aside for conservation to ensure its protection from illegal development. Scientists hope that the move will safeguard ecologically important habitats and provide a model of remote-sensing use for conservation that other countries could follow.",
    likesCount: 11000,
     commentsCount:100,
    isLiked:true,
    },
    {id:3,
    tag:'finances',
    img:'./piblic/news1.jpg',
    date: new Date(2021,10,4,11,58),
    title:"Green Energy Stocks Set To Fuel Huge Gains For Investors",
    description:"Over the years, I have consistently delivered highly profitable stock tips to my devoted readers, making them the envy of investors everywhere.",
    commentsCount:100,
    isLiked:true,
     },
     {id:4,
    tag:'fashion',
    img:'./piblic/news1.jpg',
    date: new Date(2021,10,4,11,58),
    title:"BY LAURA HAWKINS AND ALICE NEWBOLD",
    description:"For the fashion world in Ukraine it has been a time of recalibration, rehabilitation and resistance, as brands have worked to adapt against a backdrop of hardship and suffering.",
    commentsCount:100,
    isLiked:true,
    },
    {id:5,
    tag:'stocks',
    img:'./piblic/news1.jpg',
    date: new Date(2021,10,4,11,58),
    title:"After debt-ceiling negotiations, America faces a debt deluge",
    description:"Having flirted with madness, Congress decided to avert a sovereign default and allow the government to resume borrowing. But although the debt-ceiling negotiations are over, their aftershocks will ripple through financial markets for months to come. In order to stave off disaster, the Treasury spent much of the past six months running down its cash holdings, eventually reaching the point where it had almost nothing left",
    commentsCount:100,
    isLiked:true,
    },
];

const sortedByRateNews= [...news].sort(
    (n1,n2)=>n2.likesCount-n1.likesCount);
    outCards(news, newsMainCardConfig);
    outCards(sortedByRateNews,trendsNewsCardConfig)

