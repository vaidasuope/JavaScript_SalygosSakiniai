let vardas="Simas";
let vedes=false;
let atlyginimas=800;

if (vedes == true && atlyginimas>800){
    console.log("Sveikiname! "+vardas+ " gavo paskola!");
}
else if (vedes==false && atlyginimas>1000){
    console.log("Jums "+vardas+" paskola bus suteikta!");
}
else {
    console.log("Atvykite i banka!");
}

//naudojam switch, kad nereiktu daug kartu rasyti if else salygos sakinio
let pazymys=10;

switch (pazymys){
    case 3:
        console.log("Neigiamas");
        break;
    case 5:
        console.log("Vos vos");
        break;
    case 7:
        console.log("Patenkinamai");
        break;
    case 8:
        console.log("Neblogai neblogai :)");
        break;
    case 10:
        console.log("Tobulai!");
}


//Namu darbas
let scoreJ1=89;
let scoreJ2=120;
let scoreJ3=156;

let scoreM1=89;
let scoreM2=120;
let scoreM3=156;

let scoreMa1=89;
let scoreMa2=120;
let scoreMa3=156;


avgJ=(scoreJ1+scoreJ2+scoreJ3)/3;
avgM=(scoreM1+scoreM2+scoreM3)/3;
avgMa=(scoreMa1+scoreMa2+scoreMa3)/3;

if (avgJ>avgM && avgJ>avgMa){
    console.log("John'\s team is the winner with avg score = "+avgJ+"!");
}
else if (avgM>avgJ && avgM>avgMa) {
    console.log("Mike'\s team is the winner with avg score = "+avgM+"!");
}
else if (avgMa>avgJ && avgMa>avgM) {
    console.log("Marry'\s team is the winner with avg score = "+avgMa+"!");
}
else {
    console.log("All teams are the winners! Score = "+avgMa);
}