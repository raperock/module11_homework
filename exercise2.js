let num;

let flag = true;

function justNumber(num) {
    if (num == 0 || num == 1) {
         return console.log(flag = false);

    }
    if (num>=1000){
        return console.log('Число больше 1000');
    }
    else
        {
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    flag = false;
                    break; // выйдем из цикла
                }

            }
        }
    console.log(flag);
    }
justNumber(999);



