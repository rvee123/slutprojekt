<template>
    <div class="main">
        <h1>Blogg</h1>
        <div class="omProjekt">
            <h2>Om projektet</h2>
            <p>
                Detta är en Blogg sida byggd i Vue JS som också använder en API. På startsidan så kan man se alla inlägg och 
                över inläggen så kan man skriva sitt eget inlägg. Klickar man på ett specifikt inlägg så kan man ändra vad 
                som står i inlägget och sedan klicka på en knapp för att spara det. Man kan också tabort inlägget helt på 
                samma sida om man inte vill ha kvar det. Sidan använder sig av en API som kopplar ihop sidan med en SQL databas. 
                APIn gör så att man kan hämta information från databasen, lägga till saker, uppdatera saker i databasen och tabort 
                infortmation helt och hållet.
            </p>
        </div>
        <div class="resultat">
            <h2>Resultat</h2>
            <div class="bilder">
                <img src="https://i.gyazo.com/dcd61077ddd02033591f7f66081a6fdc.png">
                <img src="https://i.gyazo.com/e814db02c55dfd42f34111f879f53f84.png">
            </div>
        </div>
        <div class="API">
            <h2>API Code</h2>
            <div class="bilder">
                <img src="https://i.gyazo.com/13e5ea7734c79f80176f9b4baa0647ee.png">
                <img src="https://i.gyazo.com/bfbdaeaa21abb7c5e38cd63c64f39591.png">
                <img src="https://i.gyazo.com/77e6789e600a3f0a3bfb0f6f32a7d03c.png">
                <img src="https://i.gyazo.com/ec3be9ca551308d6bd4be95dea870a67.png">
                <img src="https://i.gyazo.com/1bbd5e7a2c388c3d206de10f08de98c8.png">
                <img src="https://i.gyazo.com/fc36c6a6bfdacaeb3569be6bce9b0d19.png">
                <img src="https://i.gyazo.com/4dd6dae23aa8efae26a52eb8630c535c.png">
            </div>
        </div>
        <div class="code">
            <h2>Code</h2>
            <div class="bilder">
                <img src="https://i.gyazo.com/807d08291d203ba48ae582c3171f573e.png">
                <img src="https://i.gyazo.com/d9263fde5e72350b175b11187d2567b6.png">
                <img src="https://i.gyazo.com/ffd9155ebf7da7b24d27c3579e8cdf48.png">
                <img src="https://i.gyazo.com/fbf9ef7c504dd276645357b71a79a701.png">
                <img src="https://i.gyazo.com/cf8616a1578b887e2910740d436e51f0.png">
                <img src="https://i.gyazo.com/385f318fa4e476315004f0f793ba42ec.png">
                <img src="https://i.gyazo.com/c4e60fdbc92071c15e8efacc8d4826e7.png">
                <img src="https://i.gyazo.com/920f6c9d800500056a728c3d31e37715.png">
                <img src="https://i.gyazo.com/14cf1e7c62c4ad56e30492d1a1fed569.png">
                <img src="https://i.gyazo.com/b8035a94fbc9839d0017828bfa93d82f.png">
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.omProjekt{
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    padding: 20px;
    width: 75%;
    opacity: 0;
    animation: fade-in .5s forwards;
}
.resultat{
    background-color: rgba(0, 0, 0, 0.75);
    padding: 20px;
    min-width: 25%;
    max-width: 75%;
    border-radius: 5px;
    opacity: 0;
    animation: fade-in .5s .25s forwards;
}
.API{
    background-color: rgba(0, 0, 0, 0.75);
    padding: 20px;
    min-width: 25%;
    max-width: 75%;
    border-radius: 5px;
    opacity: 0;
    animation: fade-in .5s .5s forwards;
}
.code{
    background-color: rgba(0, 0, 0, 0.75);
    padding: 20px;
    min-width: 25%;
    max-width: 75%;
    border-radius: 5px;
    opacity: 0;
    animation: fade-in .5s .75s forwards;
}
.bilder{
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-end;
}
img{
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