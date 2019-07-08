// recaptacha
var onloadCallback = function() {
    var recaptchas = document.querySelectorAll('.g-recaptcha');

    for( i = 0; i < recaptchas.length; i++) {
        grecaptcha.render( recaptchas[i], {
        'sitekey' : '6Lf9gKwUAAAAAJHavRbL5-8FcjgmGkl2-fXldhPU',
        });
    }
}




// built in
function showWeeklySprints() {
    document.getElementById("Rectangle_61").style.fill = "#ffffff";
    document.getElementById("Rectangle_56").style.fill = "#32BDC2";
    document.getElementById("Rectangle_57").style.fill = "#32BDC2";
    document.getElementById("Rectangle_58").style.fill = "#32BDC2";
    document.getElementById("Rectangle_59").style.fill = "#32BDC2";
    document.getElementById("Rectangle_60").style.fill = "#32BDC2";

    document.getElementById('rapid-tangible').style.display = 'none';
    document.getElementById('weekly-sprints').style.display = 'block';
    document.getElementById('engineering').style.display = 'none';
    document.getElementById('quality').style.display = 'none';
    document.getElementById('build').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
}

function showRapidTangible() {
    document.getElementById("Rectangle_61").style.fill = "#32BDC2";
    document.getElementById("Rectangle_56").style.fill = "#ffffff";
    document.getElementById("Rectangle_57").style.fill = "#32BDC2";
    document.getElementById("Rectangle_58").style.fill = "#32BDC2";
    document.getElementById("Rectangle_59").style.fill = "#32BDC2";
    document.getElementById("Rectangle_60").style.fill = "#32BDC2";

    document.getElementById('rapid-tangible').style.display = 'block';
    document.getElementById('weekly-sprints').style.display = 'none';
    document.getElementById('engineering').style.display = 'none';
    document.getElementById('quality').style.display = 'none';
    document.getElementById('build').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
}

function showEngg() {
    document.getElementById("Rectangle_61").style.fill = "#32BDC2";
    document.getElementById("Rectangle_56").style.fill = "#32BDC2";
    document.getElementById("Rectangle_57").style.fill = "#ffffff";
    document.getElementById("Rectangle_58").style.fill = "#32BDC2";
    document.getElementById("Rectangle_59").style.fill = "#32BDC2";
    document.getElementById("Rectangle_60").style.fill = "#32BDC2";

    document.getElementById('rapid-tangible').style.display = 'none';
    document.getElementById('weekly-sprints').style.display = 'none';
    document.getElementById('engineering').style.display = 'block';
    document.getElementById('quality').style.display = 'none';
    document.getElementById('build').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
}

function showQuality() {
    document.getElementById("Rectangle_61").style.fill = "#32BDC2";
    document.getElementById("Rectangle_56").style.fill = "#32BDC2";
    document.getElementById("Rectangle_57").style.fill = "#32BDC2";
    document.getElementById("Rectangle_58").style.fill = "#ffffff";
    document.getElementById("Rectangle_59").style.fill = "#32BDC2";
    document.getElementById("Rectangle_60").style.fill = "#32BDC2";

    document.getElementById('rapid-tangible').style.display = 'none';
    document.getElementById('weekly-sprints').style.display = 'none';
    document.getElementById('engineering').style.display = 'none';
    document.getElementById('quality').style.display = 'block';
    document.getElementById('build').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
}

function showBR() {
    document.getElementById("Rectangle_61").style.fill = "#32BDC2";
    document.getElementById("Rectangle_56").style.fill = "#32BDC2";
    document.getElementById("Rectangle_57").style.fill = "#32BDC2";
    document.getElementById("Rectangle_58").style.fill = "#32BDC2";
    document.getElementById("Rectangle_59").style.fill = "#ffffff";
    document.getElementById("Rectangle_60").style.fill = "#32BDC2";

    document.getElementById('rapid-tangible').style.display = 'none';
    document.getElementById('weekly-sprints').style.display = 'none';
    document.getElementById('engineering').style.display = 'none';
    document.getElementById('quality').style.display = 'none';
    document.getElementById('build').style.display = 'block';
    document.getElementById('feedback').style.display = 'none';
}

function showFeedback() {
    document.getElementById("Rectangle_61").style.fill = "#32BDC2";
    document.getElementById("Rectangle_56").style.fill = "#32BDC2";
    document.getElementById("Rectangle_57").style.fill = "#32BDC2";
    document.getElementById("Rectangle_58").style.fill = "#32BDC2";
    document.getElementById("Rectangle_59").style.fill = "#32BDC2";
    document.getElementById("Rectangle_60").style.fill = "#ffffff";

    document.getElementById('rapid-tangible').style.display = 'none';
    document.getElementById('weekly-sprints').style.display = 'none';
    document.getElementById('engineering').style.display = 'none';
    document.getElementById('quality').style.display = 'none';
    document.getElementById('build').style.display = 'none';
    document.getElementById('feedback').style.display = 'block';
}
setInterval(function(){
    setTimeout("showWeeklySprints()", 5000);
    setTimeout("showRapidTangible()", 10000);
    setTimeout("showEngg()", 15000);
    setTimeout("showQuality()", 20000);
    setTimeout("showBR()", 25000);
    setTimeout("showFeedback()", 30000);
    clearInterval();
},5000);
clearInterval();

// stratergic
function showMobiltity() {
    // mobility
    document.getElementById('Path_453').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55').style.stroke = '#B8D5DD';

    // much more
    document.getElementById('Path_448').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-2').style.stroke = '#eaf2f4';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-3').style.stroke = '#eaf2f4';

    // support
    document.getElementById('Path_453-3').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-4').style.stroke = '#eaf2f4';

    // web
    document.getElementById('Path_453-4').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-5').style.stroke = '#eaf2f4';

    // big data
    document.getElementById('Path_453-7').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-6').style.stroke = '#eaf2f4';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-7').style.stroke = '#eaf2f4';

    // iot
    document.getElementById('Path_453-5').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-8').style.stroke = '#eaf2f4';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-9').style.stroke = '#eaf2f4';

    document.getElementById('mobility').style.display = 'block';
    document.getElementById('enterprise').style.display = 'none';
    document.getElementById('web').style.display = 'none';
    document.getElementById('cloud').style.display = 'none';
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('bigdata').style.display = 'none';
    document.getElementById('iot').style.display = 'none';
    document.getElementById('muchmore').style.display = 'none';
}

function showMuchMore() {
    // mobility
    document.getElementById('Path_453').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55').style.stroke = '#eaf2f4';

    // much more
    document.getElementById('Path_448').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55-2').style.stroke = '#B8D5DD';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-3').style.stroke = '#eaf2f4';

    // support
    document.getElementById('Path_453-3').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-4').style.stroke = '#eaf2f4';

    // web
    document.getElementById('Path_453-4').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-5').style.stroke = '#eaf2f4';

    // big data
    document.getElementById('Path_453-7').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-6').style.stroke = '#eaf2f4';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-7').style.stroke = '#eaf2f4';

    // iot
    document.getElementById('Path_453-5').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-8').style.stroke = '#eaf2f4';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-9').style.stroke = '#eaf2f4';


    document.getElementById('mobility').style.display = 'none';
    document.getElementById('enterprise').style.display = 'none';
    document.getElementById('web').style.display = 'none';
    document.getElementById('cloud').style.display = 'none';
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('bigdata').style.display = 'none';
    document.getElementById('iot').style.display = 'none';
    document.getElementById('muchmore').style.display = 'block';
}

function showCloud() {
    // mobility
    document.getElementById('Path_453').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55').style.stroke = '#eaf2f4';

    // much more
    document.getElementById('Path_448').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-2').style.stroke = '#eaf2f4';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55-3').style.stroke = '#B8D5DD';

    // support
    document.getElementById('Path_453-3').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-4').style.stroke = '#eaf2f4';

    // web
    document.getElementById('Path_453-4').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-5').style.stroke = '#eaf2f4';

    // big data
    document.getElementById('Path_453-7').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-6').style.stroke = '#eaf2f4';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-7').style.stroke = '#eaf2f4';

    // iot
    document.getElementById('Path_453-5').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-8').style.stroke = '#eaf2f4';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-9').style.stroke = '#eaf2f4';

    document.getElementById('mobility').style.display = 'none';
    document.getElementById('enterprise').style.display = 'none';
    document.getElementById('web').style.display = 'none';
    document.getElementById('cloud').style.display = 'block';
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('bigdata').style.display = 'none';
    document.getElementById('iot').style.display = 'none';
    document.getElementById('muchmore').style.display = 'none';
}

function showSupport() {
    // mobility
    document.getElementById('Path_453').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55').style.stroke = '#eaf2f4';

    // much more
    document.getElementById('Path_448').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-2').style.stroke = '#eaf2f4';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-3').style.stroke = '#eaf2f4';

    // support
    document.getElementById('Path_453-3').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55-4').style.stroke = '#B8D5DD';

    // web
    document.getElementById('Path_453-4').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-5').style.stroke = '#eaf2f4';

    // big data
    document.getElementById('Path_453-7').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-6').style.stroke = '#eaf2f4';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-7').style.stroke = '#eaf2f4';

    // iot
    document.getElementById('Path_453-5').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-8').style.stroke = '#eaf2f4';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-9').style.stroke = '#eaf2f4';

    document.getElementById('mobility').style.display = 'none';
    document.getElementById('enterprise').style.display = 'none';
    document.getElementById('web').style.display = 'none';
    document.getElementById('cloud').style.display = 'none';
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('support').style.display = 'block';
    document.getElementById('bigdata').style.display = 'none';
    document.getElementById('iot').style.display = 'none';
    document.getElementById('muchmore').style.display = 'none';
}

function showWeb() {
    // mobility
    document.getElementById('Path_453').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55').style.stroke = '#eaf2f4';

    // much more
    document.getElementById('Path_448').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-2').style.stroke = '#eaf2f4';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-3').style.stroke = '#eaf2f4';

    // support
    document.getElementById('Path_453-3').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-4').style.stroke = '#eaf2f4';

    // web
    document.getElementById('Path_453-4').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55-5').style.stroke = '#B8D5DD';

    // big data
    document.getElementById('Path_453-7').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-6').style.stroke = '#eaf2f4';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-7').style.stroke = '#eaf2f4';

    // iot
    document.getElementById('Path_453-5').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-8').style.stroke = '#eaf2f4';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-9').style.stroke = '#eaf2f4';

    document.getElementById('mobility').style.display = 'none';
    document.getElementById('enterprise').style.display = 'none';
    document.getElementById('web').style.display = 'block';
    document.getElementById('cloud').style.display = 'none';
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('bigdata').style.display = 'none';
    document.getElementById('iot').style.display = 'none';
    document.getElementById('muchmore').style.display = 'none';
}

function showBigData() {
    // mobility
    document.getElementById('Path_453').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55').style.stroke = '#eaf2f4';

    // much more
    document.getElementById('Path_448').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-2').style.stroke = '#eaf2f4';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-3').style.stroke = '#eaf2f4';

    // support
    document.getElementById('Path_453-3').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-4').style.stroke = '#eaf2f4';

    // web
    document.getElementById('Path_453-4').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-5').style.stroke = '#eaf2f4';

    // big data
    document.getElementById('Path_453-7').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55-6').style.stroke = '#B8D5DD';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-7').style.stroke = '#eaf2f4';

    // iot
    document.getElementById('Path_453-5').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-8').style.stroke = '#eaf2f4';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-9').style.stroke = '#eaf2f4';

    document.getElementById('mobility').style.display = 'none';
    document.getElementById('enterprise').style.display = 'none';
    document.getElementById('web').style.display = 'none';
    document.getElementById('cloud').style.display = 'none';
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('bigdata').style.display = 'block';
    document.getElementById('iot').style.display = 'none';
    document.getElementById('muchmore').style.display = 'none';
}

function showEnterprise() {
    // mobility
    document.getElementById('Path_453').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55').style.stroke = '#eaf2f4';

    // much more
    document.getElementById('Path_448').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-2').style.stroke = '#eaf2f4';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-3').style.stroke = '#eaf2f4';

    // support
    document.getElementById('Path_453-3').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-4').style.stroke = '#eaf2f4';

    // web
    document.getElementById('Path_453-4').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-5').style.stroke = '#eaf2f4';

    // big data
    document.getElementById('Path_453-7').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-6').style.stroke = '#eaf2f4';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55-7').style.stroke = '#B8D5DD';

    // iot
    document.getElementById('Path_453-5').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-8').style.stroke = '#eaf2f4';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-9').style.stroke = '#eaf2f4';

    document.getElementById('mobility').style.display = 'none';
    document.getElementById('enterprise').style.display = 'block';
    document.getElementById('web').style.display = 'none';
    document.getElementById('cloud').style.display = 'none';
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('bigdata').style.display = 'none';
    document.getElementById('iot').style.display = 'none';
    document.getElementById('muchmore').style.display = 'none';
}

function showRoadmap() {
    // mobility
    document.getElementById('Path_453').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55').style.stroke = '#eaf2f4';

    // much more
    document.getElementById('Path_448').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-2').style.stroke = '#eaf2f4';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-3').style.stroke = '#eaf2f4';

    // support
    document.getElementById('Path_453-3').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-4').style.stroke = '#eaf2f4';

    // web
    document.getElementById('Path_453-4').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-5').style.stroke = '#eaf2f4';

    // big data
    document.getElementById('Path_453-7').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-6').style.stroke = '#eaf2f4';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-7').style.stroke = '#eaf2f4';

    // iot
    document.getElementById('Path_453-5').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-8').style.stroke = '#eaf2f4';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55-9').style.stroke = '#B8D5DD';

    document.getElementById('mobility').style.display = 'none';
    document.getElementById('enterprise').style.display = 'none';
    document.getElementById('web').style.display = 'none';
    document.getElementById('cloud').style.display = 'none';
    document.getElementById('roadmap').style.display = 'block';
    document.getElementById('support').style.display = 'none';
    document.getElementById('bigdata').style.display = 'none';
    document.getElementById('iot').style.display = 'none';
    document.getElementById('muchmore').style.display = 'none';
}

function showIot() {
    // mobility
    document.getElementById('Path_453').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55').style.stroke = '#eaf2f4';

    // much more
    document.getElementById('Path_448').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-2').style.stroke = '#eaf2f4';

    // cloud
    document.getElementById('Path_453-2').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-3').style.stroke = '#eaf2f4';

    // support
    document.getElementById('Path_453-3').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-4').style.stroke = '#eaf2f4';

    // web
    document.getElementById('Path_453-4').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-5').style.stroke = '#eaf2f4';

    // big data
    document.getElementById('Path_453-7').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-6').style.stroke = '#eaf2f4';

    // enterprise
    document.getElementById('Path_453-8').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-7').style.stroke = '#eaf2f4';

    // iot
    document.getElementById('Path_453-5').style.fill = '#B8D5DD';
    document.getElementById('Rectangle_55-8').style.stroke = '#B8D5DD';

    // roadmap
    document.getElementById('Path_453-6').style.fill = '#eaf2f4';
    document.getElementById('Rectangle_55-9').style.stroke = '#eaf2f4';

    document.getElementById('mobility').style.display = 'none';
    document.getElementById('enterprise').style.display = 'none';
    document.getElementById('web').style.display = 'none';
    document.getElementById('cloud').style.display = 'none';
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('bigdata').style.display = 'none';
    document.getElementById('iot').style.display = 'block';
    document.getElementById('muchmore').style.display = 'none';
}

setInterval(function(){
    setTimeout("showMobiltity()", 3000);
    setTimeout("showBigData()", 6000);
    setTimeout("showSupport()", 9000);
    setTimeout("showRoadmap()", 12000);
    setTimeout("showCloud()", 15000);
    setTimeout("showEnterprise()", 18000);
    setTimeout("showWeb()", 21000);
    setTimeout("showIot()", 24000);
    setTimeout("showMuchMore()", 27000);
},3000)
clearInterval();
