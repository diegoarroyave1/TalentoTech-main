function main() {
    const Aum = document.getElementById("Aum")
    const Dis = document.getElementById("Dis")
    const Cont = document.getElementById("Cont")
    var Numinicial = 0
    
    Aum.addEventListener("click", () => {
        Numinicial = Numinicial + 1;
        console.log(Numinicial);
        document.getElementById('Cont').innerText = Numinicial;

        
        

    });

    Dis.addEventListener("click", () => {
        Numinicial = Numinicial - 1;
        console.log(Numinicial);
        document.getElementById('Cont').innerText = Numinicial;

        

    });
}
window.onload = main;