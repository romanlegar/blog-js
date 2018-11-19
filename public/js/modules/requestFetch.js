import Message from "./Message"
const requestMessages = () =>{
  const list = document.querySelector('.list');
  fetch('/data/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if(data.length != 0){
      data.map(item=>{
        let post = new Message(item.text, item.login, item.data, item.image, item.like, item.comments, item.id);
        post.createMessage();
      })
    }
  })
}
export {requestMessages};
