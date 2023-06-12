<template>
    <div class="main">
        <h1>Todo</h1>
        <div class="omProjekt">
            <h2>Om projektet</h2>
            <p>
                Detta är en Todo-lista (att göra lista) som är gjord i Vue JS. Den har en sida som visar alla olika 
                uppgifter som du behöver göra. Man kan lägga till uppgifter och markera dem när man är klar. När du har 
                markerat en uppgift som klar så blir backgrunden grön och du får ett alternativ att ta bort uppgiften 
                så att du inte behöver ha kvar den i listan längre.
            </p>
        </div>
        <div class="resultat">
            <h2>Resultat</h2>
            <img src="https://i.imgur.com/CDMfAlI.png">
        </div>
        <div class="code">
            <h2>Code</h2>
            <div class="bilder">
                <img src="https://i.gyazo.com/4d7654fd071b34e55905b7ad383f3d7b.png">
                <img src="https://i.gyazo.com/cc05ece2ddd8e3fdb6b381c83de1c6c5.png">
                <img src="https://i.gyazo.com/5f27d4cfb85d2bbfcb1935e10cd384e7.png">
                <img src="https://i.gyazo.com/16e2849cab1d4c9ea850bc050f230ef1.png">
                <img src="https://i.gyazo.com/b5fd92b3292974e29b8702446738a750.png">
                <img src="https://i.gyazo.com/c9c7563e3929c431c00f77f29d9a4228.png">
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
    width: 80%;
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