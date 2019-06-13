const pressed = [];
const secretKey = 'sarah';



window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretKey.length - 1, pressed.length - secretKey.length)
    console.log(pressed);

    if (pressed.join('').includes(secretKey)) {
        console.log('unlocking vault');
        cornify_add()
    }
})