/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const fromaPrice = (price) => {

    new window.Intl.NumbresFormat("en-En", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
};

//web api
// Conectamos al server

window
.fetch('${baseUrl}/api/avo')
//procesar la respuesta y convertirla en JSON
.then( (respuesta) => respuesta.json())
// JSON -> Data -> Renderizar info browser
.then( (responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach( (item) => {
        //crear imagen
        const imagen = document.createElement("img");
        //URL de la imagen
        imagen.src = '${baseUrl}${item.imagen}';

        //crear titulo
        const title = document.createElement("h2")
        title.textContent = item.name;
        title.className = "muy-grande;"

        //Crear precio
        const price = document.createElement("div");
        price.textContent = item.price;

        const container = document.createElement("div");
        container.append(imagen, title, price);

        todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);
});
