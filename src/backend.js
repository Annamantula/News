export const loggedUser = {
id:1,
username: "Дядя Вова",
img: "./public/user_logo.svg"
};
export function addComment(text,newsId) {
  lastCommentId++;
  allComments.push({
    newsId,
    text,
    id: lastCommentId,
    user: {...loggedUser}
  });
}
 export function addSubComment (newsId, text, user, answerTo) {
     const subComments = allComments.find(c=> c.id === newsId).subComments;
     subComments.push({
       id: subComments[subComments.length-1].id+1,
       text,
       user,
       answerTo
     });
 }
export function updateComment(id,text) {
  allComments.find(c => c.id === id).text = text;
}
export function updateSubComment(id,text) {
  allComments.find(c => c.subComments.find(sc=>sc.id === id))
  .subComments.find(sc => sc.id ===id).text = text;
}
export function makelike(newsId) {
  const oneNews = news.find(n=>n.id === newsId);
  oneNews.isLiked = !oneNews.isLiked;
  const oneFullNews = fullNews.find(n=> n.id === newsId);
  oneFullNews.isLiked = !oneFullNews.isLiked;
}
