import { DATE_OPTION,TAG_COLORS,TAG_NAMES } from "./options.js";
import {makeFriendlyNumber} from "./helpers.js"

export default function (news, {id, configCardNode}) {
    const newsContainer = document.getElementById(id);
    const bigNewsCart = newsContainer.children[0];
    cleanOldNews(newsContainer,bigNewsCart);
      for (let oneNews of news){
          const copy = bigNewsCart.cloneNode(true);
          console.log(oneNews,'???')
          configCardNode(copy, oneNews);
          newsContainer.append(copy);
      }

}

function cleanOldNews (newsContainer, newsCart){
newsContainer.innerHTML ='';
newsContainer.append(newsCart);
}