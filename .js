const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts. Real growth comes from pushing forward when everything inside you wants to stop.",
    author: "Winston Churchill"
  },
  {
    text: "In the middle of every difficulty lies opportunity. The difference between those who succeed and those who fail is the ability to recognize it and act without hesitation.",
    author: "Albert Einstein"
  },
  {
    text: "Do not wait for the perfect moment. Take the moment and make it perfect through action, persistence, and continuous improvement.",
    author: "Unknown"
  },
  {
    text: "Discipline is choosing between what you want now and what you want most. Long-term success is built on daily decisions, not occasional effort.",
    author: "Abraham Lincoln"
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life. Have the courage to follow your heart and intuition; they somehow already know what you truly want.",
    author: "Steve Jobs"
  },
  {
    text: "It always seems impossible until it is done. The key is to keep moving forward, even when progress feels invisible.",
    author: "Nelson Mandela"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today. Confidence and action remove barriers faster than talent alone.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it. Focus on building value, and results will follow naturally.",
    author: "Henry David Thoreau"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going. Time rewards those who stay consistent longer than others.",
    author: "Sam Levenson"
  },
  {
    text: "Opportunities don't happen, you create them. The world responds to action, not intention.",
    author: "Chris Grosser"
  },
  {
    text: "A person who never made a mistake never tried anything new. Growth demands risk, and risk always includes failure.",
    author: "Albert Einstein"
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm. Resilience is the real competitive advantage.",
    author: "Winston Churchill"
  },
  {
    text: "If you want to achieve greatness stop asking for permission. Most people stay average because they wait for approval.",
    author: "Unknown"
  },
  {
    text: "The future depends on what you do today. Every small action compounds into long-term results.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Hard work beats talent when talent doesn’t work hard. Consistency will outperform natural ability over time.",
    author: "Tim Notke"
  },
  {
    text: "Do what you can, with what you have, where you are. Progress is always possible if you start immediately.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Success is not about how fast you move, but how long you keep moving without stopping.",
    author: "Unknown"
  },
  {
    text: "Great things are done by a series of small things brought together. Focus on stacking small wins every day.",
    author: "Vincent Van Gogh"
  },
  {
    text: "You don’t need to be extreme, just consistent. Consistency is the real shortcut to success.",
    author: "Unknown"
  },
  {
    text: "Push yourself, because no one else is going to do it for you. Self-drive is the foundation of all achievement.",
    author: "Unknown"
  }
];

let quote = document.querySelector('p');
let author = document.querySelector('h3');
const button =document.querySelector('button');
button.addEventListener('click',()=>{
  let index = Math.floor(Math.random()*quotes.length)
  quote.textContent=quotes[index].text
  author.textContent=quotes[index].author
})
