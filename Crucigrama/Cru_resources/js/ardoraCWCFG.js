//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FF373D"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#FFFFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades, lo has logrado!"; messageTime="¡Se te ha acabado el tiempo!"; messageError="¡Te has equivocado!"; messageErrorG="¡Te has equivocado!"; messageAttempts="¡Ups, se te han acabado los intentos!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og==","Og==","Og==","Og==","Uw==","RQ==","Vg==","SQ==","TA==","TA==","QQ=="],["Og==","Og==","Wg==","Og==","Og==","Og==","QQ==","Og==","Og==","Og==","Og=="],["Og==","Qg==","QQ==","Ug==","Qw==","RQ==","TA==","Tw==","Tg==","QQ==","Og=="],["Tw==","Og==","Ug==","Og==","Og==","Og==","RQ==","Og==","Og==","Og==","Og=="],["Vg==","Og==","QQ==","Og==","Og==","Og==","Tg==","Og==","Og==","Og==","Og=="],["SQ==","Og==","Rw==","QQ==","TA==","SQ==","Qw==","SQ==","QQ==","Og==","Og=="],["RQ==","Og==","Tw==","Og==","Og==","Og==","SQ==","Og==","Og==","Og==","Og=="],["RA==","Og==","Wg==","Og==","Og==","TQ==","QQ==","RA==","Ug==","SQ==","RA=="],["Tw==","Og==","QQ==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="]];
var x1=[5,7,2,3,6,3,1];
var y1=[1,1,3,6,8,2,4];
var x2=[11,7,10,9,11,3,1];
var y2=[1,8,3,6,8,9,9];
var imaCW=["","","","","","",""];
var audioCW=["","","","","","",""];
var defCW=["Andalucía","Comunidad Valenciana","Cataluña","Santiago de Compostela","Comunidad de Madrid","Aragón","Principado de asturias"];
var colNum=11;
var rowNum=9;
