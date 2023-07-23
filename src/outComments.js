function configComments ({user,id,text,commentId,answerTo},node){
    const copy = node.children[0].cloneNode(true);
    copy.style.display = "flex";
    copy.id = id;
    copy.children[0].src = user.img;
    const contentContainer = copy.children[1];

    configText(contentContainer.children[1],answerTo,text);
    return copy;
}