import { DATE_OPTION,TAG_COLORS,TAG_NAMES } from "./options.js";
import {makeFriendlyNumber} from "./helpers.js"
import { configCardNode } from "./lastNewsCardConfig.js";

export default function outCards (news, {id, configCardNode}) {
    const newsContainer = document.getElementById(id);
    console.log(newsContainer, "!!!!!!NEWSCNTR"); // Check if newsContainer is null or an element
    const bigNewsCart = newsContainer.children[0];
    console.log(bigNewsCart,"BGNWSCRT"); 
    cleanOldNews(newsContainer,bigNewsCart);
      for (let oneNews of news){
          const copy = bigNewsCart.cloneNode(true);
        //   console.log(oneNews,'???')
          configCardNode(copy, oneNews);
          newsContainer.append(copy);
      }

}

function cleanOldNews (newsContainer, newsCart){
newsContainer.innerHTML ='';
newsContainer.append(newsCart);
}