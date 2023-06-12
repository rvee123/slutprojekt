<template>
    <div class="main">
        <h2>Om mig</h2> <br>
        <div class="omMig">
            <p class="text">Jag heter Rasmus och är 20 år gammal. På min fritid så tycker jag om att spela datorspel
                och nu till hösten har jag tänkt att börja plugga datateknik på högskola. <br> <br>
                
                Jag har kunskaper inom databaser, frontend och backend när det kommer till att bygga webbsidor. Jag vet hur man skapar en 
                databas, fixar en tabell och lite om hur man designar tabellerna. Jag vet också hur man kopplar ihop databasen med backenden 
                och kan sedan använda det i frontenden av mina webbsidor. <br> <br>

                Det roligaste med att bygga webbsidor skulle jag nog säga är att 
                fixa till frontenden och få webbsidan att se så bra ut som jag kan. Jag gillar däremot också all problemlösning med att 
                programmera men det kan vara väldigt frustrerande om man fastnar förlänge på ett problem.
            </p>
        </div> <br>
        <h2>Projekt</h2> <br>
        <div class="projekt">
            <div class="griditem" v-for="p in projekt" :key="p.id" @click="projektById(p.id)">
                <h3>{{ p.title }}</h3>
                <img :src="p.result">
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            projekt:[
            {
                    id: 0,
                    title: 'FizzBuzz',
                    description: '',
                    result: 'https://i.gyazo.com/85f110f0de4d5579a78ab44e9200c4b4.png',
                    code: 'https://i.gyazo.com/38e924b6ae31bfee35bbc5b8a76a84a7.mp4'
                },
                {
                    id: 1,
                    title: 'Träningsdagbok',
                    description: '',
                    result: 'https://i.imgur.com/Z1gBKWS.png',
                    code: 'https://i.gyazo.com/e96aa5220e54510507cd26bb966aa076.png',
                    code2: 'https://i.gyazo.com/8965ff9bbace2b92a6ea7d1ae0ee8fb7.png',
                    code3: 'https://i.gyazo.com/ae6b2aa19481c0a4db22755b17472c3d.png',
                    code4: 'https://i.gyazo.com/e01bdda3798fa4e530496ccc2a1bd167.png',
                    code5: 'https://i.gyazo.com/a0359c9e3dbb07fb81d4f1c4ad794d1d.png',
                    code6: 'https://i.gyazo.com/398daaa093f270752528af17d3b051e6.png',
                    code7: 'https://i.gyazo.com/32c81ff7a4a681de66d2d388476a0f7d.png'
                },
                {
                    id: 2,
                    title: 'CV Portfolio',
                    description: '',
                    result: 'https://i.gyazo.com/bd70e00d2ed1407ffe4759d0a1004479.png',
                    code: 'https://i.gyazo.com/a73da9f98c9ad2cfa1821064c52f6eb7.mp4'
                },
                {
                    id: 3,
                    title: 'Tic Tac Toe',
                    description: '',
                    result: 'https://i.gyazo.com/89034326feab4fa858fecff29be6c98e.png',
                    code: 'https://i.gyazo.com/9d7cc7d3437afbc8f034e6345a1084cd.png',
                    code2: 'https://i.gyazo.com/e65cad4657561a153ee591527b457489.png'
                },
                {
                    id: 4,
                    title: 'Todo',
                    description: '',
                    result: 'https://i.imgur.com/CDMfAlI.png'
                },
                {
                    id: 5,
                    title: 'Blogg (API)',
                    description: '',
                    result: 'https://i.gyazo.com/dcd61077ddd02033591f7f66081a6fdc.png',
                    result2: 'https://i.gyazo.com/e814db02c55dfd42f34111f879f53f84.png',
                    code: 'https://i.gyazo.com/65c0d7d520115586a92a31a46e7d2397.mp4'
                }
            ]
        }
    },
    created(){
        // fetch('http://localhost:5213/api/Projekts').then(
        //     data => data.json()
        // ).then(
        //     projekt => {
        //         this.projekt = projekt
        //     }
        // )
    },
    methods:{
        projektById(id){
            this.$router.push('/' + id)
        }
    }
}
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
h2{
    background-color: rgba(0, 0, 0, 0.75);
    width: 7rem;
    padding: 5px 0px;
    border-radius: 5px;
}
.omMig{
    width: 75%;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    opacity: 0;
    animation: fade-in .5s forwards;
}
.text{
    font-size: 20px;
    padding: 20px;
}
.projekt{
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    opacity: 0;
    animation: fade-in .5s .25s forwards;
}
.griditem{
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.75);
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 20px;
    justify-content: center;
    width: 90%;
    height: 300px;
}
.griditem:hover{
    border: 1px solid rgb(0, 0, 0);
    cursor: pointer;
}
.griditem:active{
    background-color: rgba(0, 0, 0, 0.9);
}
img{
    max-height: 80%;
    border-radius: 5px;
}
@keyframes fade-in{
    from{
        opacity: 0;
    }
    to{
        opacity: 100;
    }
}
</style>