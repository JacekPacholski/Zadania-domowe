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