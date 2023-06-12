<template>
    <div class="main">
        <h1>Tic Tac Toe</h1>
        <div class="omProjekt">
            <h2>Om projektet</h2>
            <p>Detta är Tic Tac Toe (Tre i rad) i en C# konsol app. Man kör 2 spelare och du går ut på att få tre av 
                samma tecken i rad. Men om hela planen fylls utan att någon får 3 tecken i rad så blir det lika.
            </p>
        </div>
        <div class="resultat">
            <h2>Resultat</h2>
            <img src="https://i.gyazo.com/89034326feab4fa858fecff29be6c98e.png">
        </div>
        <div class="code">
            <h2>Code</h2>
            <div class="bilder">
                <img src="https://i.gyazo.com/9d7cc7d3437afbc8f034e6345a1084cd.png">
                <img src="https://i.gyazo.com/e65cad4657561a153ee591527b457489.png">
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