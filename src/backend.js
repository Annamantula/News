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
export const allComments = [

  {
  
  id: 1,
  
  newsId: 1,
  
  text: 'текст комметария',
  
  user: {
  
  userId: 1,
  
  username: 'Иван Иванов',
  
  img: './public/user_logo3.jpg'
  
  },
  
  subComments: [
  
  {
  
  id: 1,
  
  commentId: 1,
  
  newsId: 1,
  
  userToAnswer: {
  
  userId: 2,
  
  username: 'Олег Викторов',
  
  img: './public/user_logo2.jpg'
  
  },
  
  text: 'текс подкомментария',
  
  user: {
  
  userId: 1,
  
  username: 'Иван Иванов',
  
  img: './public/user_logo3.jpg'
  
  },
  
  }
  
  ],
  
  },
  
  {
  
  id: 2,
  
  newsId: 1,
  
  text: 'текст комметария2',
  
  user: {
  
  userId: 1,
  
  username: 'Иван Иванов',
  
  img: './public/user_logo3.jpg'
  
  },
  
  subComments: [
  
  {
  
  id: 1,
  
  commentId: 1,
  
  newsId: 1,
  
  userToAnswer: {
  
  userId: 2,
  
  username: 'Олег Викторов',
  
  img: './public/user_logo2.jpg'
  
  },
  
  text: 'текс подкомментария',
  
  user: {
  
  userId: 1,
  
  username: 'Иван Иванов',
  
  img: './public/user_logo3.jpg'
  
  }
  
  }
  
  ],
  
  }
  
  ];
