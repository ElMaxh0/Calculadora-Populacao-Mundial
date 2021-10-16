let anosclc=(ano-2020)
let umanomortes=((12*(24*3600)*30)*mortesseg);
let umanonasc=((12*(24*3600)*30)*nascseg)
let diferenca = umanonasc- umanomortes
let totalss= anosclc*(diferenca);
let ttmortes=  mortosesteano + napaginamortes
let PopMundialan=popmundi2020+totalss;
let PopMundiala= PopMundialan + nascidosesteano + napaginanascer;
let PopMundial = PopMundiala - ttmortes;
let PopMundiall = PopMundial/100;
let masculino= PopMundiall*porcentagemmen;
let femenino = PopMundiall*porcentagemmulher;

function atualizarnascer(){
let agora=new Date();
napaginanascer++
nascidoshoje++
nascidosesteano++
estemesnascimento++
mesparanascer++
PopMundiall++
let aguardar2=60400;
document.getElementById('NascimentosPagina').innerHTML = '<p> '+Math.round(napaginanascer)+' </p>';
document.getElementById('Nascimentoshoje').innerHTML = ''+Math.round(nascidoshoje)+'';
document.getElementById('Nascimentosmes').innerHTML = ''+Math.round(estemesnascimento)+'';
document.getElementById('Nascimentosmes1').innerHTML = ''+Math.round(mesparanascer)+'';
document.getElementById('NascimentosAno').innerHTML = ''+Math.round(nascidosesteano)+'';
setTimeout(function(){ atualizarnascer();}, aguardarNascer);
}
function atualizarmortos(){
let agora=new Date();

napaginamortes++
morteshoje++
mesparamortos++
mortosesteano++
let aguardar2=60400;
document.getElementById('MortesPagina').innerHTML = '<p> '+Math.round(napaginamortes)+' </p>';
document.getElementById('MortesPaginaHoje').innerHTML = ''+Math.round(morteshoje)+'';
document.getElementById('MortesPaginaMes').innerHTML = ''+Math.round(mesparamortos)+'';
document.getElementById('MortesPaginaAno').innerHTML = ''+Math.round(mortosesteano)+'';
setTimeout(function(){ atualizarmortos();}, aguardarMortos);

}

function atualizarmundial(value){
    PopMundiallas=value
    PopMundiallas++
    PopMundiallas++
document.getElementById('PoopMundi').innerHTML = '<p> '+PopMundiallas+' </p>'
setTimeout(function(){ atualizarmundial(PopMundiallas);}, 1000);
}
function atualizapopmundial(){

    }
function genero(){
document.getElementById('PoopMundiHomens').innerHTML = ''+masculino+'';
document.getElementById('PoopMundiMulheres').innerHTML = ''+femenino+'';
masculino++
femenino++
setTimeout(function(){ genero();}, 500);
}
function horario(){
    let data=new Date();
    var dia= data.getDate();
    var hora= data.getHours(); 
    var min= data.getMinutes();
    var segundos= data.getSeconds();
    var mseg= data.getMilliseconds();
    var ano= data.getFullYear(); 
    var mes= data.getMonth();
    document.getElementById('horario').innerHTML = ''+hora+':'+min+':'+segundos+'';
    setTimeout(function(){ horario();}, 500);
    }
    function brasil(){
        bra=PopMundiall*0.000000003;
        braman=bra*porcentagemmen;
        bramulher=bra*porcentagemmulher;
        document.getElementById('bra').innerHTML = ''+bra+'';
        document.getElementById('braman').innerHTML = ''+braman+'';
        document.getElementById('bramulher').innerHTML = ''+bramulher+'';
        setTimeout(function(){ brasil();}, 500);
        }
        
    
        brasil();