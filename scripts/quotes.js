// Execute a JavaScript immediately after a page has been loaded (using body onload Event in welcome.html for the desired effect):
function newQuote() {
    var quotes = [
        'In the long run we shape our lives and shape ourselves. The process never ends until we die. And the choices we make are ultimately our own responsibility. - Eleanor Roosevelt',
        'You\'re braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne',
        'The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs',
        'A person who never made a mistake never tried anything new. - Albert Einstein',
        'The most difficult thing is the decision to act; the rest is merely tenacity. - Amelia Earhart',
        'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean',
        'Nothing is impossible.The word itself says \"I\'m possible!\" - Audrey Hepburn',


    ];
    var randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById('randomQuote').innerHTML = quotes[randomQuote];
}




// Using IIFE(Immediately Invoked Function Expression); keeping this here for reference (use case for IIFE: when you want to protect your variables and you don't want to pollute the global scope)
/*
(function newQuote() {
    var quotes = [
        list of quotes,
    ];
    var randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById('randomQuote').innerHTML = quotes[randomQuote];
})();
*/


