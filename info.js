exports.info = async function() {
   
    while(true) {

        await client.setMyStatus('Bina, da god of bot created by Satyam Mayengbam!');
        await Sleep(60000)
        await client.setMyStatus('It is not like i am horny ✨️');
        await Sleep(60000)
        await client.setMyStatus('Legends actually die lol 🔱️');
        await Sleep(60000)
    }

}

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
