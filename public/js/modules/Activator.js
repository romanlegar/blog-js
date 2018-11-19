import Message from "./Message"

const Activator = (event) => {
  event.preventDefault();

  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let time = hours + ':'+ min;
  let formGener = event.target.parentElement;
  let comment = [];
  let id = getRandomInt(1, 200000)
  let text = formGener.elements.message.value;
  let int = 0;
  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if(text != ''){
    let imageUrl = formGener.elements.createImg.value;
    fetch('/data/user')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let post = new Message(text, data.login, time, imageUrl, int, comment, id);
      post.createMessage();
      post.update();
    })
  }
}

export default Activator;
