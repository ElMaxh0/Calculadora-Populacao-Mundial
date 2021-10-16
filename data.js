//ScriptDataFile
//Dados Chave 
        let nascseg=4.4
        let mortesseg= 1.9;
        let porcentagemmen=0.49;
        let porcentagemmulher=0.51;
        let aguardarMortos=(1000/mortesseg);
        let aguardarNascer=(1000/nascseg);
        let napaginanascer =1
        let napaginamortes =1
        let data=new Date();
        var dia= data.getDate();
        var hora= data.getHours(); 
        var min= data.getMinutes();
        var segundos= data.getSeconds();
        var mseg= data.getMilliseconds();
        var ano= data.getFullYear(); 
        var mes= data.getMonth();
        let horasparasegundo=hora*3600
        let minutosparasegundo =min*60
        let temposeghoje= horasparasegundo + minutosparasegundo 
        let nascidoshoje= Math.round(temposeghoje *nascseg);
        let mesparanascer=(((24*3600)*29)*nascseg)
        let estemesnascimento=(((24*3600)*dia)*nascseg);
        let nascidosesteano =String(((mes+1)*mesparanascer)+nascidoshoje);
        let morteshoje= Math.round(temposeghoje *mortesseg);
        let mesparamortos=(((24*3600)*29)*mortesseg)
        let mortosesteano =((mes+1)*mesparamortos+morteshoje);
        //População Mundial em 2020
        let popmundi2020=7794798729;