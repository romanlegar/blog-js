import Page from "./modules/Page";
import Message from "./modules/Message";
import Activator from "./modules/Activator";
Page();

const send = document.getElementById('send');
console.log(send);
send.addEventListener('click', Activator);
