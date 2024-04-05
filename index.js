let liste=["ekmek","elma","süt","bal"]
let fiyat=[10,12,30,80]

for (let i=0 ; i < liste.length; i++){
    console.log(liste[i]+"  "+fiyat[i]+"TL");
}

let toplam=0;
let k=0;
while(k<fiyat.length){
    
    toplam=toplam+fiyat[k];
    
    k++;
   
}

console.log(toplam);

// -----------------------------------


let sayilar=[20,10,40,70,60]
let enBuyuk=sayilar[0]

let buyukSayiyiBul= function(){
    for (let i = 0; i < sayilar.length; i++) {
        if(sayilar[i]>enBuyuk){
            enBuyuk=sayilar[i];
            
        }
        
    }
    console.log("En büyük sayi:"+enBuyuk)

}

buyukSayiyiBul()

// -----------------------------------
let kucukSayiyiBul= function(){
    for (let i = 0; i < sayilar.length; i++) {
        if(sayilar[i]<enBuyuk){
            enBuyuk=sayilar[i];
            
        }
        
    }
    console.log("En küçük sayi:"+enBuyuk)

}

kucukSayiyiBul()
// -----------------------------------



// -----------------------------------

let sayiEkleme=function (a){
    console.log(sayilar)
    sayilar.push(a)
    console.log(sayilar)
}

sayiEkleme(10);
// -----------------------------------

let sayiCikartma=function (a){

    sayilar.splice(a,1)
    console.log(sayilar)
}

sayiCikartma(2)