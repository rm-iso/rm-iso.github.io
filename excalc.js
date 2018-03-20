//Form validation
function validateForm()
{
    var pG = parseInt(document.forms["CalcForm"]["PGreat"].value);
    var G = parseInt(document.forms["CalcForm"]["Great"].value);
    var Note = parseInt(document.forms["CalcForm"]["Notes"].value);
    var CalcEX = getEX(pG, G);
    var MAX = parseInt((Note*2));
    if(pG == null || pG == "")
    {
        alert("Please fill out PGreats");
        return false;
    }
    else if(pG < 0)
    {
        alert("Please fill out a positive number for PGreats");
        return false
    }
    else if(isNaN(pG))
    {
        alert("PGreats value is not a number");
        return false;
    }
    if(G == null || G == "")
    {
        alert("Please fill out Greats");
        return false;
    }
    else if(G < 0)
    {
        alert("Please fill out a positive number for Greats");
        return false
    }
    else if(isNaN(G))
    {
        alert("Greats value is not a number");
        return false;
    }
    if(Note == null || Note == "")
    {
        alert("Please fill out Notes");
        return false;
    }
    else if(Note < 0)
    {
        alert("Please fill out a positive number for Notes");
        return false
    }
    else if(isNaN(Note))
    {
        alert("Notes value is not a number");
        return false;
    }

    if(CalcEX > MAX)
    {
        alert("Calculated EXScore too high, please edit the values in the PGreat or Great input.");
        return false;
    }
    else
    {
        return true;
    }
}

//Displays user's EXScore
function displayCalc()
{
    var PGreat = parseInt(document.getElementById("PGreat").value);
    var Great = parseInt(document.getElementById("Great").value);
    var yourEX = getEX(PGreat, Great);
    document.getElementById("theEX").innerHTML = "Your EXScore is: " + yourEX;
}

//Calculates user's EXScore
function getEX(value1, value2)
{
    return (value1*2) + value2;
}

//Calculates user's Percent in the song
function getPercent(ex1, note1)
{
    return ((ex1/(note1*2))*100).toFixed(2); //Rounds to 2 decimal places
}

//Displays the user's Percent
function displayPercent()
{
    var PGreat = parseInt(document.getElementById("PGreat").value);
    var Great = parseInt(document.getElementById("Great").value);
    var Notes = parseInt(document.getElementById("Notes").value);

    var yourEX = getEX(PGreat, Great);
    var Pcent = getPercent(yourEX, Notes);

    document.getElementById("yourPcent").innerHTML = "Your Percentage is: " + Pcent + "%";
}

//Gets user's DJ Grade
function getGrade(percent)
{
    if(percent >= 88.89)
    {
        return "AAA";
    }
    else if(percent >= 77.78)
    {
        return "AA";
    }
    else if(percent >= 66.67)
    {
        return "A";
    }
    else if(percent >= 55.56)
    {
        return "B";
    }
    else if(percent >= 44.45)
    {
        return "C";
    }
    else if(percent >= 33.34)
    {
        return "D";
    }
    else if(percent >= 22.23)
    {
        return "E";
    }
    else
    {
        return "F";
    }
}

//Displays user's DJ Grade
function displayGrade()
{
    var PGreat = parseInt(document.getElementById("PGreat").value);
    var Great = parseInt(document.getElementById("Great").value);
    var Notes = parseInt(document.getElementById("Notes").value);

    var yourEX = getEX(PGreat, Great);
    var Pcent = getPercent(yourEX, Notes);

    var grade = getGrade(Pcent);

    document.getElementById("Grade").innerHTML = "Your Grade is: " + grade;
}

//Handles if the enter key is pressed in a text input
function handle(e)
{
    if(e.keyCode === 13)
    {
        e.preventDefault(); // Ensure it is only this code that runs

        //alert("Enter was pressed");
        if(validateForm() === true)
        {
            displayCalc();
            displayPercent();
            displayGrade();
        }
    }
}

function clickhandle()
{
    if(validateForm() === true)
    {
        displayCalc();
        displayPercent();
        displayGrade();
    }
}
