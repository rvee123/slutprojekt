<template>
    <div class="main">
        <h1>CV Portfolio</h1>
        <div class="omProjekt">
            <h2>Om projektet</h2>
            <p>Detta är en Portfoilo sida gjorde med node js och handlebars. Den är väldigt simpel och består bara av 
                3 sidor som ska innehålla information om mig, projekt och kontaktuppgifter. Detta är bara ett exempel dock 
                och sidorna har bara rubriker och lorem text för att det inte ska vara tomt.
            </p>
        </div>
        <div class="resultat">
            <h2>Resultat</h2>
            <img src="https://i.gyazo.com/bd70e00d2ed1407ffe4759d0a1004479.png">
        </div>
        <div class="code">
            <h2>Code</h2>
            <div class="bilder">
                <img src="https://i.gyazo.com/ca8eb25ca5225f042c1fede07bad1753.png">
                <img src="https://i.gyazo.com/40bc6e5d0970dfdfffbc89f17cc275bf.png">
                <img src="https://i.gyazo.com/6f9a76ab96c917ea024b7bd69e10283c.png">
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
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 20px;
    max-width: 75%;
    border-radius: 5px;
    opacity: 0;
    animation: fade-in .5s .25s forwards;
}
.code{
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 20px;
    max-width: 75%;
    border-radius: 5px;
    opacity: 0;
    animation: fade-in .5s .5s forwards;
}
.bilder{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
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