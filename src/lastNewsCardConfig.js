export default{
    id: "news-description",
    configCardNode,
  };
function configCardNode(node, {id,title,date}){
    const card = document.createElement('div')
    card.classList.add("news-description")
    card.id=id;
    card.append(createDateSpan(date));
    card.append(title);
    return card
}

function createDateSpan(date){
    const span = document.createElement('span');
    span.innerText= `${date.getHours()}:${date.getMinutes()}`;
    return span;
}