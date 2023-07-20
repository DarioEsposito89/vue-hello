"use scrict"
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data



const app = Vue.createApp({
    data() {
        return {
            messaggio: "esercizio di prova",
            car: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
        };
    },

methods: {
    
}
});

app.mount("#app")

