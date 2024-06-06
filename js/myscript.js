// stampa in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    console.log(i);

    // richiamo container html
    const container = document.querySelector(".container");

    // creo nuovo elemento div
    let box = document.createElement("div");

    let messaggio;

        // multipli sia di 3 che di 5 stampi “FizzBuzz”
        if(i % 3 === 0 && i % 5 === 0) {
            messaggio = "FizzBuzz"
            box.classList.add("fizzbuzz")
        // multipli di 3 stampi “Fizz”
        }else if(i % 3 === 0) { 
            messaggio = "Fizz"
            box.classList.add("fizz")
        // multipli di 5 stampi “Buzz”
        }else if(i % 5 === 0) {
            messaggio = "Buzz"
            box.classList.add("buzz")
        }else {
            messaggio = i;
            box.classList.add("box")
        }

    console.log(messaggio);

    // inserisco i div nel container
    container.append(box);

    // inserisco il messaggio nei div
    box.append(messaggio);
}