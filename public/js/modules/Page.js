import {requestMessages} from './requestFetch';

const Page = () => {

  requestMessages();
  const generAvatar = document.querySelector('.avatar');
  const generHeader = document.querySelector('.header');
  const fonConstructor = document.querySelector('.fonConstructor');
  const testImage = document.querySelector('.testImage');
  const avatarLogin = document.querySelector('.avatarLogin');
  const formEditor = document.querySelector('.formEditor');
  const createImg = document.querySelector('.createImg');


  fetch('/data/user')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    generAvatar.style.backgroundImage = `url(${data.avatar})`;
    generHeader.style.backgroundImage = `url(${data.header})`;
  });
  sendPhoto.addEventListener('click', getImg);
  generHeader.addEventListener('click', generImage.bind(null, generHeader, 'header'));
  generAvatar.addEventListener('click', generImage.bind(null, generAvatar, 'avatar'));

  formEditor.elements.exit.addEventListener('click', exit);
  function getImg(event){
    event.preventDefault();
    sendPhoto.style.display = 'none';
    createImg.style.display = 'block';
  }
  function generImage (target, type){
    fonConstructor.style.display = 'flex';
    formEditor.elements.save.onclick = function(){
      target.style.backgroundImage = 'url(' + formEditor.elements.url.value +')';
      target.style.backgroundSize =  formEditor.elements.size.value + 'px';
      exit();
      fetch(`/data/${type}`, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `type=${formEditor.elements.url.value}`
        })

    }
  }
  function exit(){
    fonConstructor.style.display = 'none';
  }
}

export default Page;
