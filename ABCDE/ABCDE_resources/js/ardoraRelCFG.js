//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=2;
var score=0; scoreMax=12; scoreInc=3; scoreDec=2
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#848BCE"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="¡FELICIDADES!"; messageTime="¡SE TERMINO EL TIEMPO!"; messageError="¡FALLASTE!"; messageErrorG="¡FALLASTE!"; messageAttempts="¡SE TERMINARON LOS INTENTOS!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUJDREU="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Islas Baleares-Palma de Mallorca</p>","<p>Sevilla-Andalucía</p>","<p>La Rioja-Logroño</p>","<p>Aragón-Zaragoza</p>"];
var iL=["","","",""];
var order=["","","",""]; orderR=["","","",""];indexR=0; indexL=0;
var cR=["","","",""]; ansRL=["MA==","MQ==","Mg==","Mw=="];
var iR=["<div  align='center'><img alt='' src='ABCDE_resources/media/islas_baleares.png'></div>","<div  align='center'><img alt='' src='ABCDE_resources/media/sevilla.png'></div>","<div  align='center'><img alt='' src='ABCDE_resources/media/logro__o.png'></div>","<div  align='center'><img alt='' src='ABCDE_resources/media/Zaragoza.png'></div>"];
var auR=[1,2,3,4];
colorText="#000000";colorButton="#6F89E6";colorBack="#FFFFFF";colorSele="#C5E6FA";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
