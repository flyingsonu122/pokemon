


const btn = document.getElementById('btn');



btn.addEventListener('click',getOne);

getOne();

async function getOne(){
    let index = Math.floor(Math.random() * 100 );
    console.log(index)
    const Url = `https://pokeapi.co/api/v2/pokemon/${index} `
     fetch(Url)
        .then((data) => {
            if (data.ok) {
                return data.json()
            }
            throw new Error('Response not ok.');
        })
        .then(pokemon => generateHtml(pokemon))
        .catch(error => console.error('Error:', error))


}    


const generateHtml = (data) => {
    console.log(data)

    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `
    
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}