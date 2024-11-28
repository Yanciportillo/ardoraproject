//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Lo has logrado!"; messageTime="Se acabo el tiempo"; messageError="Esa no es, intenta otra vez"; messageErrorG="Esa no es, intenta otra vez"; messageAttempts="Vuelve a empezar."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYV8x"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["RQ==","Qw==","Tw==","Uw==","SQ==","Uw==","VA==","RQ==","TQ==","QQ=="],["TA==","TA==","","Tw==","","","RQ==","Ug==","VQ==","VA=="],["RQ==","Tw==","","TA==","","","TQ==","Tw==","VA==","Tw=="],["TQ==","Ug==","","","","","UA==","Uw==","QQ==","TQ=="],["RQ==","Tw==","Ug==","Tw==","","","RQ==","SQ==","Qw==","Tw=="],["Tg==","Rg==","","","","","Ug==","Tw==","SQ==",""],["VA==","SQ==","","","","","QQ==","Tg==","Tw==",""],["Tw==","TA==","","","","","VA==","Tg==","Tg==",""],["","QQ==","","","","","VQ==","","",""],["","","","","","","Ug==","","",""],["","","","","","","QQ==","","",""]];
var x1=[1,2,7,8,9,10,7,7,7,1,4,7,1,1,1];
var y1=[1,1,1,1,1,1,2,3,4,1,1,8,2,3,4];
var x2=[10,2,7,8,9,10,10,10,10,1,4,9,2,2,2];
var y2=[1,9,11,8,8,5,2,3,4,8,3,8,2,3,4];
var imaCW=["","","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","","",""];
var defCW=["Conjunto de organismos vivos que interactúan entre sí y con su entorno físico en un área específica, formando una unidad funcional.","Pigmento verde presente en las plantas que es esencial para la fotosíntesis, al absorber la luz necesaria para transformar energía.","Magnitud física que mide el nivel de calor o energía térmica de un cuerpo o sistema.","Desgaste y transporte de suelo y rocas por agentes naturales como el agua, el viento o el hielo.","Cambio en la secuencia de ADN de un organismo, que puede ser heredado o adquirido, y que puede afectar su desarrollo o funcionamiento.","La unidad más pequeña de un elemento químico que conserva sus propiedades. Está compuesto por protones, neutrones y electrones.","","","","Sustancia química pura formada por átomos del mismo tipo, que no puede descomponerse en sustancias más simples mediante procesos químicos ordinarios.","Estrella ubicada en el centro del sistema solar, formada principalmente por hidrógeno y helio.","","","",""];
var altCW=["","","","","","","","","","","","","","",""];
var colNum=10;
var rowNum=11;
