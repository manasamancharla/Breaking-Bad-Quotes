//'https://api.breakingbadquotes.xyz/v1/quotes'


const genButton  = document.getElementById('genQuote') as HTMLButtonElement;
const url : string = "https://api.breakingbadquotes.xyz/v1/quotes"

const genQuote = (): void => {
    fetch(url)
        .then(response => response.json())
        .then((json: { quote: string, author: string }[]) => {
            const quote = json[0].quote;
            document.querySelector('#quoteDiv')!.innerHTML = `<p>" ${quote}"</p>`;
            const author = json[0].author;
            document.querySelector('#authorDiv')!.innerHTML = `<h4><b>${author}</b></h4>`;
        });
};

// Adding event listener
genButton.onclick = () => genQuote();

