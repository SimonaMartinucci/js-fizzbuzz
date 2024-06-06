// stampa in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    console.log(i);

    let messaggio;
    
        // multipli sia di 3 che di 5 stampi “FizzBuzz”
        if(i % 3 === 0 && i % 5 === 0) {
            messaggio = "FizzBuzz"
        // multipli di 3 stampi “Fizz”
        }else if(i % 3 === 0) { 
            messaggio = "Fizz"
        // multipli di 5 stampi “Buzz”
        }else if(i % 5 === 0) {
            messaggio = "Buzz"
        }else {
            messaggio = i;
        }

    console.log(messaggio);

}


//  



// 



// .