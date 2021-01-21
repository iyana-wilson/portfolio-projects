const quotes = ['Believe you can and your halfway there.',
"Nothing is impossible, the word itself says, I'm possible!",
'Life is 10 percent what happens to me and 90 percent of how I react to it.',
'To handle yourself, use your head; to handle others, use your heart.',
'Too many of us are not living our dreams because we are living our fears.',
'Change your thoughts and you change your world.',
"I learned over the years that when one's mind is made up, this diminishes fear."]

function newQuote(){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    console.log(quotes[randomNumber]);
}

/*function genQuote(){
    for(let i = Math.floor(Math.random() * (quotes.length)); i > quotes.length; i++){
        return newQuote
    }
}
*/
