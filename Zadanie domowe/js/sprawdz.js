//////////////////////////////zadanie1/////////////////////////////////////
// function sprawdz_z1(){
//     var x = document.getElementById("input_z1").value;
    
//     if(x>=10){
//         alert("Warunek spełniony");
//     }
//     else{
//         alert("Błąd! Warunek niespełniony!");
//     }
// };

//////////////////////////////zadanie2/////////////////////////////////////


// function sprawdz_z2() {
//     var x = Number(document.getElementById("input_z2").value);
//     switch (x) { 
//         case 1:
//             alert("Poniedziałek");
//             break;
//         case 2:
//             alert("Wtorek");
//             break;
//         case 3:
//             alert("Środa");
//             break;
//         case 4:
//             alert("Czwartek");
//             break;
//         case 5:
//             alert("Piątek");
//             break;
//         case 6:
//             alert("Sobota");
//             break;
//         case 7:
//             alert("Niedziela");
//             break;
//         default:
//             alert("Błędny numer tygodnia!");
//     }
// }

//////////////////////////////zadanie3/////////////////////////////////////

// function sprawdz_cb_zad3(){
//     var x = document.getElementById("zad_3_cb").checked;
//     if(x==true){
//         alert("Pole zaznaczone!");
//     }
//     else{
//         alert("Pole odznaczone!"); 
//     }
   
// }

//////////////////////////////zadanie4/////////////////////////////////////



function delta(){
    var a = Number(document.getElementById("ZmiennaA").value);
    var b = Number(document.getElementById("ZmiennaB").value);
    var c = Number(document.getElementById("ZmiennaC").value);
    var delta = (b*b)-(4*a*c);
    var x1;
    var x2;
    if(delta==0){
        var d = Math.sqrt(delta);
        x1 = (-b-d)/(2*a);
        var t ="Delta = " + d + "\nx = " + x1;
        var x = document.getElementById("wynik").value=t;

    }
    else if(delta>0){
        var d = Math.sqrt(delta);
        x1 = (-b-d)/(2*a);
        x2 = (-b+d)/(2*a);
        var t ="Delta = " + d + "\nx1 = " + x1 +"\nx2 = " +x2;
        var x = document.getElementById("wynik").value=t;
    }
    else{
        var x = document.getElementById("wynik").value = 'Delta ujemna, brak rozwiązań!';
    }
} 