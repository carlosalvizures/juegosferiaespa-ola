//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFF00"; colorButton="#FF0000"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES!!!! LO HICISTE BIEN"; messageTime="SE ACABO EL TIEMPO"; messageError="ERROR!!! MAL MAL MAL"; messageErrorG="ERROR!!! MAL MAL MAL"; messageAttempts="SIN INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y2FwaXRhbGVz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Q29tdW5pZGFkIGRlIE1hZHJpZA==", "TWFkcmlk"],["Q2F0YWx1w7Fh", "QmFyY2Vsb25h"],["Q29tdW5pZGFkIFZhbGVuY2lhbmE=", "VmFsZW5jaWE="],["QW5kYWx1Y2lh", "U2V2aWxsYQ=="],["Q2FzdGlsbGEgeSBsZW9u", "VmFsbGFkb2xpZA=="]];
var c=[[19,6],[8,9],[20,8],[9,7],[15,10]];
var con1=["Comunidad de Madrid","Cataluña","Comunidad Valenciana","Andalucia","Castilla y leon"];
var con2=["Madrid","Barcelona","Valencia","Sevilla","Valladolid"];
var sel1=""; join1=[]; join2=[];
