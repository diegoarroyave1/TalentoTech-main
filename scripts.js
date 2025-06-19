function main() {
    const celdas = document.querySelector('table');

    celdas.addEventListener("click", (event) => {
       
        
        if (event.target.innerText == "") {
            console.log(event)
        }else{
            alert(event.target.innerText)
        }




    });

    
    // function eventLogger(event){
    //     const phase = {
    //         1:"captura",
    //         2:"objetivo",
    //         3:"burbuja",
    //     }

    //     console.log('El target es =>', event.target.id);
    //     console.log('El actual es =>', event.currentTarget.id);
    //     console.log(phase[event.eventPhase]);

    // }

    // window.onload = () => {
    //     const outer = document.querySelector('#outer');
    //     const middle = document.querySelector('#middle');
    //     const inner = document.querySelector('#inner');

    //     outer.addEventListener('click',eventLogger,true);
    //     middle.addEventListener('click',eventLogger,true);
    //     inner.addEventListener('click',eventLogger,true);

    //     outer.addEventListener('click',eventLogger,false);
    //     middle.addEventListener('click',eventLogger,false);
    //     inner.addEventListener('click',eventLogger,false);
    // }

 

}
window.onload = main;