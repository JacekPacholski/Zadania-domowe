//////////////////////////////zadanie2/////////////////////////////////////


function sprawdz_z2() {
    var x = Number(document.getElementById("input_z2").value);
    switch (x) { 
        case 1:
            alert("Poniedziałek");
            break;
        case 2:
            alert("Wtorek");
            break;
        case 3:
            alert("Środa");
            break;
        case 4:
            alert("Czwartek");
            break;
        case 5:
            alert("Piątek");
            break;
        case 6:
            alert("Sobota");
            break;
        case 7:
            alert("Niedziela");
            break;
        default:
            alert("Błędny numer tygodnia!");
    }
}