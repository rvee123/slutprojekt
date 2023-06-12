<template>
    <div class="main">
        <h1>Träningsdagbok</h1>
        <div class="omProjekt">
            <h2>Om projektet</h2>
            <p>Detta är en Träningsdagbok byggd i MVC. Användaren kan lägga till övningar med namn och beskrivning. 
                Man kan också lägga till träningspass där man väljer övningar, hur mycket av övningarna man ska göra och 
                ett datum till övningspasset. På startsidan så visas alla övningar och pass där kan man också ta bort övningar/pass 
                eller skapa nya.
            </p>
        </div>
        <div class="resultat">
            <h2>Resultat</h2>
            <img src="https://i.imgur.com/Z1gBKWS.png">
        </div>
        <div class="code">
            <h2>Code</h2>
            <div class="bilder">
                <img src="https://i.gyazo.com/e96aa5220e54510507cd26bb966aa076.png">
                <img src="https://i.gyazo.com/8965ff9bbace2b92a6ea7d1ae0ee8fb7.png">
                <img src="https://i.gyazo.com/ae6b2aa19481c0a4db22755b17472c3d.png">
                <img src="https://i.gyazo.com/e01bdda3798fa4e530496ccc2a1bd167.png">
                <img src="https://i.gyazo.com/a0359c9e3dbb07fb81d4f1c4ad794d1d.png">
                <img src="https://i.gyazo.com/398daaa093f270752528af17d3b051e6.png">
                <img src="https://i.gyazo.com/32c81ff7a4a681de66d2d388476a0f7d.png">
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