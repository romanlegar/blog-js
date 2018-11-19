/*
  Private Functions for demo 1;
*/

function doSomePrivateStuff(){
  return 'SectetToken';
}
function decryptSecretToken( SecretToken ){
  console.log('Our user is:', SecretToken );
  return {
    user: 'SuperAdminUser',
    emain: 'Super@props.ua'
  };
}

        // commander: Comander,
        // let SecretToken = doSomePrivateStuff();
        // let Comander = decryptSecretToken( SecretToken );
