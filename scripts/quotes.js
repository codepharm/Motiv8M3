// Execute a JavaScript immediately after a page has been loaded (using body onload Event in welcome.html for the desired effect):
function newQuote() {
    var quotes = [
        'In the long run we shape our lives and shape ourselves. The process never ends until we die. And the choices we make are ultimately our own responsibility. - Eleanor Roosevelt',
        'You\'re braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne',
        'The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs',
        'A person who never made a mistake never tried anything new. - Albert Einstein',
        'The most difficult thing is the decision to act; the rest is merely tenacity. - Amelia Earhart',
        'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean',
        'Nothing is impossible. The word itself says \"I\'m possible!\" - Audrey Hepburn',
        'Strong minds discuss ideas, average minds discuss events, weak minds discuss people - Socrates',
        'The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius',
        'We have two lives, and the second begins when we realize we only have one! - Confucius',
        'You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius',
        'Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin',
        'It is during the darkest moments that we focus to see the light. - Aristotle',
        'Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson',
        'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
        'The way to get started is to quit talking and begin doing. - Walt Disney',
        'When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt',
        'Don\'t judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson',
        'In the end, it\'s not the years in your life that count. It\'s the life in your years. - Abraham Lincoln',
        'Many of life\'s failures are people who did not realize how close they were to success when they gave up. - Thomas Edison',
        'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss',
        'Life is a succession of lessons which must be lived to be understood. - Ralph Waldo Emerson',
        'Go confidently in the direction of your dreams! Live the life you\'ve imagined. - Henry David Thoreau',
        'Do not let making a living prevent you from making a life. - John Wooden',
        'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking. - Steve Jobs',
        'Success is not final; failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
        'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
        'If you really look closely, most overnight successes took a long time. - Steve Jobs',
        'The secret of success is to do the common thing uncommonly well. - John D. Rockefeller Jr.',
        'Don\'t be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you. - Zig Ziglar',
        'I never dreamed about success, I worked for it. - Estee Lauder',
        'There are no secrets to success. It is the result of preparation, hard work, and learning from failure. - Colin Powell',
        'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
        'It is better to fail in originality than to succeed in imitation. - Herman Melville',
        'Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier; wish you were better. - Jim Rohn',
        'The road to success and the road to failure are almost exactly the same. - Colin R. Davis',
        'I failed my way to success. - Thomas Edison',
        'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success. - James Cameron',
        'A successful man is one who can lay a firm foundation with the bricks others have thrown at him. - David Brinkley',
        'Don\'t be afraid to give up the good to go for the great. - John D. Rockefeller',
        'Try not to become a man of success. Rather become a man of value. - Albert Einstein',
        'Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill',
        'If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn',
        'You miss 100% of the shots you don\'t take. - Wayne Gretzky',
        'Whether you think you can or you think you can\'t, you\'re right. - Henry Ford',
        'The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson',
        'I have learned over the years that when one\'s mind is made up, this diminishes fear. - Rosa Parks',
        'Believe you can and you\'re halfway there. - Theodore Roosevelt',
        'Everything you\'ve ever wanted is on the other side of fear. - George Addair',
        'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it - Henry Ford',
        'Life is 10% what happens to me and 90% of how I react to it. - Charles Swindoll',
        'Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill',
        'I attribute my success to this: I never gave or took any excuse. - Florence Nightingale',
        'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. - Mark Twain',
        'The only reason for time is so that everything doesn\'t happen at once. - Albert Einstein',
        'We cannot solve our problems with the same thinking we used when we created them - Albert Einstein',













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


