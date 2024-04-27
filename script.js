let gzk = document.getElementById('gzk');
let text = document.getElementById('text');
gzk.addEventListener('click', function(){
    text.value = '';
    let password = '';
    for(let i = 0; i < 12; i++){
        let randomNumber = Math.floor(Math.random() * 94) + 33;
        password += String.fromCharCode(randomNumber);
    }
    text.value += password;
});