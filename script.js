const btn=document.querySelector("#calcular");
btn.addEventListener("click",Calquemadas);
const Peso=document.querySelector("#weight");
const Actividadfisica=document.querySelector("#actividad-fisica");
const Objetivo=document.querySelector("#miobjetivo");
const pResult0=document.querySelector("#result0");
const pResult=document.querySelector("#result")


function Calquemadas(){
    const peso=Number(Peso.value);
    const actividadfisica=Actividadfisica.value;
    const objetivo=Objetivo.value;
    let fa;
    let porcentaje;
    let factorgrasa;
    let factorproteina;
    if(actividadfisica=="Poco o ningun ejercicio"){
        fa=1.2;
    }
    else if(actividadfisica=="Ejercicio ligero"){
        fa=1.4
    }
    else if(actividadfisica=="Ejercicio moderado"){
        fa=1.6
    }
    else if(actividadfisica=="Ejercicio fuerte"){
        fa=1.8
    }
    else if("Ejercicio muy fuerte"){
        fa=2.0
    }
    const Calquemadas=22*peso*fa;
    console.log(Calquemadas);
    if(objetivo=="Subir Peso leve"){
        porcentaje=0.1;
    }
    else if(objetivo=="Subir peso moderado"){
        porcentaje=0.15
    }
    else if(objetivo=="Subir peso fuerte"){
        porcentaje=0.2
    }
    else if(objetivo=="Bajar peso leve"){
        porcentaje=-0.1
    }
    else if(objetivo=="Bajar peso moderado"){
        porcentaje=-0.2
    }
    else if(objetivo=="Bajar peso fuerte"){
        porcentaje=-0.3
    }
    const CalObjetivodia=Calquemadas+(porcentaje*Calquemadas);
    console.log(CalObjetivodia);

    if (CalObjetivodia>Calquemadas){
        factorproteina=1.8
        factorgrasa=1.5
    }
    else{
        factorproteina=2.5
        factorgrasa=0.5
    }

    const Proteinasgr=Math.floor(factorproteina*peso);
    const Proteinascal=Proteinasgr*4;

    const Grasagr=Math.floor(factorgrasa*peso);
    const Grasacal=Grasagr*9;

    const HidratosCarbonogr=Math.floor((CalObjetivodia-(Proteinascal+Grasacal))/4);
    pResult0.innerText="Tus calorias consumidas en el dia son "+Calquemadas+"Kcal y según tu objetivo debes llegar a "+CalObjetivodia+" kcal por día";
    pResult.innerText="Necesitas consumir "+Proteinasgr+" g de proteina, "+ Grasagr+ " g de grasa, y "+ HidratosCarbonogr+" gr de hidratos de carbon para cumplir tu objetivo diario."
    console.log(Proteinasgr,Grasagr,HidratosCarbonogr);

}

