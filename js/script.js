var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 72) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});

//scrollspy
window.addEventListener( "resize", ResizeWindow );

            function ResizeWindow( )
            {
                var dataSpyList = [].slice.call( document.querySelectorAll( '[data-bs-spy="scroll"]' ) );
                
                dataSpyList.forEach( function ( dataSpyElement )
                {
                    bootstrap.ScrollSpy.getInstance( dataSpyElement ).refresh( );
                } );
            }

// quote generator script
const quoteContent = document.querySelector(".quote-container .quote-content");
const quoteAuthor = document.querySelector(".quote-container .quote-author");
const newQuoteButton = document.querySelector(
  ".quote-container .new-quote-btn"
);

const updateQuote = (data) => {
  quoteContent.innerHTML = data.content;
  quoteAuthor.innerHTML = data.author;
};

const nextQuote = () => {
  fetch("https://api.quotable.io/random?maxLength=100")
    .then((response) => response.json())
    .then((data) => {
      updateQuote(data);
    });
};

nextQuote();

newQuoteButton.addEventListener("click", nextQuote);



const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 72 < sec[len].offsetTop) {
        li.forEach(ltx => ltx.classList.remove("active")); 
        li[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);
}