// People and Personas
function showPeople1() {
    document.getElementById('people-1').style.display = 'block';
    document.getElementById('people-2').style.display = 'none'
    document.getElementById('people-3').style.display = 'none'
    document.getElementById('people-4').style.display = 'none'
    document.getElementById('people-5').style.display = 'none'
    document.getElementById('people-6').style.display = 'none'
}

function showPeople2() {
    document.getElementById('people-1').style.display = 'none';
    document.getElementById('people-2').style.display = 'block'
    document.getElementById('people-3').style.display = 'none'
    document.getElementById('people-4').style.display = 'none'
    document.getElementById('people-5').style.display = 'none'
    document.getElementById('people-6').style.display = 'none'
}

function showPeople3() {
    document.getElementById('people-1').style.display = 'none';
    document.getElementById('people-2').style.display = 'none'
    document.getElementById('people-3').style.display = 'block'
    document.getElementById('people-4').style.display = 'none'
    document.getElementById('people-5').style.display = 'none'
    document.getElementById('people-6').style.display = 'none'
}

function showPeople4() {
    document.getElementById('people-1').style.display = 'none';
    document.getElementById('people-2').style.display = 'none'
    document.getElementById('people-3').style.display = 'none'
    document.getElementById('people-4').style.display = 'block'
    document.getElementById('people-5').style.display = 'none'
    document.getElementById('people-6').style.display = 'none'
}

function showPeople5() {
    document.getElementById('people-1').style.display = 'none';
    document.getElementById('people-2').style.display = 'none'
    document.getElementById('people-3').style.display = 'none'
    document.getElementById('people-4').style.display = 'none'
    document.getElementById('people-5').style.display = 'block'
    document.getElementById('people-6').style.display = 'none'
}

function showPeople6() {
    document.getElementById('people-1').style.display = 'none';
    document.getElementById('people-2').style.display = 'none'
    document.getElementById('people-3').style.display = 'none'
    document.getElementById('people-4').style.display = 'none'
    document.getElementById('people-5').style.display = 'none'
    document.getElementById('people-6').style.display = 'block'
}

setInterval(function(){
    setTimeout("showPeople1()", 5000);
    setTimeout("showPeople2()", 10000);
    setTimeout("showPeople3()", 15000);
    setTimeout("showPeople4()", 20000);
    setTimeout("showPeople5()", 25000);
    setTimeout("showPeople6()", 30000);
},5000)
clearInterval();