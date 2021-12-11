let ders_inputlari = $(".ders_input")

let konu_inputlari = $(".konu_input")
let sayi_inputlari_div = $(".sayi_inputlari_div")

console.log("ders inputları",ders_inputlari)
console.log("konu inputları",konu_inputlari)
console.log("sayi inputlariinputları",sayi_inputlari_div)

for(let i = 0 ;i < ders_inputlari.length;i++){
    ders_inputlari[i].onchange = () =>{
        if(ders_inputlari[i].value != null && konu_inputlari[i].value != null){
            sayi_inputlari_div[i].style.display = "block"
        }else{
            sayi_inputlari_div[i].style.display = "none"
        }
    }

    konu_inputlari[i].onchange = () =>{
        if(ders_inputlari[i].value != null && konu_inputlari[i].value != null){
            sayi_inputlari_div[i].style.display = "block"
        }else{
            sayi_inputlari_div[i].style.display = "none"
        }
    }
}