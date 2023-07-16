import { DATE_OPTION,TAG_COLORS,TAG_NAMES } from "./options.js";
import {addImage,addStatistic,addTag} from "./helpers.js";
export default{
  id: "main-news-container",
  configCardNode,
};
// export default function (news) {
//     const bigCartContainer = document.getElementById("main-news-container");
//     const bigNewsCart = bigCartContainer.children[0];
//     cleanOldNews(bigCartContainer,bigNewsCart);
//       for (let oneNews of news){
//           const copy = bigNewsCart.cloneNode(true);
//           configCartNode(copy, oneNews);
//           bigCartContainer.append(copy);
//       }

// }
//etogo net poka na stranice7
function cleanOldNews (newsContainer, newsCart){
newsContainer.innerHTML ='';
newsContainer.append(newsCart);
}

function configCardNode(node, oneNews){
    const {id,tag,date,title,description,commentsCount, likesCount, img}= oneNews;
    node.style.display = "block";
    node.id=id;
    addImage(node.children[0],img);
    addInfo(node.children[1],tag,date,commentsCount,likesCount);
    addTextContent(node.children[2],title,description);
}
function addTextContent(node,title,description){
    node.children[0].innerText = title;
    node.children[1].innerText= description;
}
function addInfo(node,tag,date,commentsCount,likesCount){
    addTag(node.children[0],tag);
    node.children[1].innerText = date.toLocaleString('ru', DATE_OPTION);
    addStatistic(node.children[2],likesCount,commentsCount);
}