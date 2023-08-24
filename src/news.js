import { addStatistic, addTag } from "./helpers.js";
import outCards from "./outCards.js";
import outComments from "./outComments.js";
import { switchToNews } from "./router.js";
import { addComment } from "./backend.js";
import {news} from "./background.js";
import {configCardNode} from "./lastNewsCardConfig.js"



export default function outNews(newsId){
    const newsPage = document.getElementById("news-page");
    console.log("OutNewscheck")
    newsPage.id= newsId;
    const sortedByDate =[...news].sort(
        (n1,n2)=>n2.date-n1.date);
        outCards(sortedByDate, {configCardNode, id: "last-news-container-newspage"});
        const oneNews = fullNews.find(n=>n.id===newsId);
        addStatistic(newsPage.children[0], oneNews.likesCount, oneNews.commentsCount);
        outOneNews(newsPage.children[1], oneNews);
        configAddCommentContainer(newsId);
        outCards(newsId);
        switchToNews();
    }

    function outOneNews(newsContainer,{tag,title,date,img,text}){
        const infoContainer = newsContainer.children[0];
        addTag(infoContainer.children[0],tag);
        infoContainer.children[1].innerText = date.toLocalString("ru", DATE_OPTION);
        newsContainer.children[1].innerText= title;
        newsContainer.children[2].src=img;
        newsContainer.children[3].innerText = text;
    }
 
    function configAddCommentContainer(newsId) {
        configAddCommentContainer.children[0].src = loggedUser.img;
        const contentContainer = addCommentContainer.children[1];
        const buttonContainer = contentContainer.children[1];
        buttonContainer.children[0].onclick =()=>{
            contentContainer.children[0].value ="";
        };
        buttonContainer.children[1].onclick =() =>{
            console.log("onclickcheck")
            addComment(contentContainer.children[0].value, newsId);
            contentContainer.children[0].value ="";
            outComments(newsId);
        };
      }