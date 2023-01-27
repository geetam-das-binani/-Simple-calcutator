let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let value = "";
for (element of buttons) {
    element.addEventListener('click', (e) => {

        buttonelement = e.target.innerText;
        console.log(buttonelement);

        if (buttonelement == 'X') {
            buttonelement = '*';
            value += buttonelement;
            screen.value = value;

        }
        else if (buttonelement == 'C') {
            value = "";
            screen.value = value;
        }

        else if (buttonelement == '=') {


            value = eval(value);
            screen.value = value;
        }
        else {
            value += buttonelement;
            screen.value = value;
        }




    })
}








