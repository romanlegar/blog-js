const list = document.querySelector('.list');

class Message {
  constructor(text, login, data, image, like, comments, id) {
    this.text = text;
    this.login = login;
    this.data = data;
    this.image = image;
    this.like = like;
    this.comments = comments;
    this.id = id;
  }

  createMessage() {
    const tegLi = document.createElement('li');
    const post = list.appendChild(tegLi);
    post.classList.add('element');
    this.createPost(post);
    if(this.image != ''){
      console.log('start');
      let img = `<img src=${this.image}  />'`;
      post.innerHTML += img;
    }
    const tegButton = document.createElement('button');
    const counterLike = post.appendChild(tegButton);
    counterLike.classList.add('postCounter');
    counterLike.textContent = this.like;
    counterLike.onclick = this.counter.bind(this);

    const tegButton1 = document.createElement('button');
    const comment = post.appendChild(tegButton1);
    comment.classList.add('btn-info');
    comment.textContent = 'Коментировать';

    const tegButton2 = document.createElement('button');
    const delet = post.appendChild(tegButton2);
    delet.textContent = 'X';
    delet.classList.add('btn-danger');
    delet.addEventListener('click', this.remove.bind(this, post));

    const tegLi2 = document.createElement('li');
    const conteinerComments = post.appendChild(tegLi2);
    this.getComments(conteinerComments);

    comment.addEventListener('click', this.consoleComment.bind(this, conteinerComments, comment));
  }

  getComments(post) {
    while (post.firstChild) {
      post.removeChild(post.firstChild);
    }
    if(Array.isArray(this.comments)) {
      this.comments.map((element)=>{
        let comment = new Comment(element.text, element.login);
        comment.createComments(post);
      });
    }
  }
  consoleComment(post, comment) {
    const tegTextarea = document.createElement('textarea');
    tegTextarea.classList.add('consoleComment');
    const commentText = post.appendChild(tegTextarea);
    const tegButton = document.createElement('button');
    const submit = post.appendChild(tegButton);
    submit.textContent = 'отправить';
    submit.classList.add('commentInput', 'btn-warning', 'btn');
    submit.addEventListener('click', this.addComments.bind(this, submit, commentText, post, comment));
  }
  addComments( submit, commentText, post, comment) {
    post.removeChild(commentText);
    post.removeChild(submit);
    let text = commentText.value;
    if(text != ''){
      let comment = {text: text, login: this.login};
      if(!Array.isArray(this.comments)){
        this.comments = [];
      }
      this.comments.push(comment);
      let newArr = JSON.stringify(this.comments);
      this.updateMessage('comments', this.id, newArr);
    }
    this.getComments(post);
  }
  update() {
    fetch('/data/data', {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: `text=${this.text}&login=${this.login}&data=${this.data}&image=${this.image}&like=${this.like}&comments=${this.comments}&id=${this.id}`
    })
  }
  updateMessage(type, id, attribute) {
    console.log(2, attribute);
    fetch(`/data/${type}`, {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: `id=${id}&attribute=${attribute}`
    })

  }
  counter(event) {
    let target = event.target;
    this.like ++;
    target.textContent = this.like;
    this.updateMessage('like', this.id, this.like);
  }
  createPost(post) {
    post.textContent = this.data;
    const modelPost = `<div class="header-h1">
                        <h1>${this.login}</h1>
                      </div>
                       <h3>${this.text}</h3>
                        `;
    post.innerHTML += modelPost;
  }
  remove(post, event) {
    let target = event.target;
    let element = target.parentElement;
    element.remove();
    this.updateMessage('delete', this.id, null);
  }

}
class Comment extends Message {
  createComments(post){
      const tegLi = document.createElement('li');
      tegLi.classList.add('listComment');
      const notice = post.appendChild(tegLi);
      this.createPost(notice);
  }
}
export default Message;
