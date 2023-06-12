<template>
    <div class="main">
        <h1>FizzBuzz</h1>
        <div class="omProjekt">
            <h2>Om projektet</h2>
            <p>Detta är en C# konsol app som räknar från 1 till 100 och skriver ut Fizz om talet är delbart med 3, 
                Buzz om talet är delbart med 5 och FizzBuzz om talet är delbart med både 3 och 5.
            </p>
        </div>
        <div class="resultat">
            <h2>Resultat</h2>
            <img src="https://i.gyazo.com/85f110f0de4d5579a78ab44e9200c4b4.png">
        </div>
        <div class="code">
            <h2>Code</h2>
            <img src="https://i.gyazo.com/0910050d522565062c0063983303d2da.png">
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
    width: 75%;
    opacity: 0;
    animation: fade-in .5s forwards;
}
.resultat{
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    padding: 20px;
    justify-content: center;
    opacity: 0;
    animation: fade-in .5s .25s forwards;
}
.code{
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    padding: 20px;
    justify-content: center;
    opacity: 0;
    animation: fade-in .5s .5s forwards;
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