
let sorular_div = document.getElementById("sorular_div")
let soru_sayisi = 0
// Hangi soruların görünüp görünmediği bu divde boolen olarak tutulur
let soru_gorunum_boolen_array = []

// Databaseden alacağımız dersler için dersler değişkenini oluşturuyoruz
let test;
// Dersleri get yapıyoruz
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "http://localhost:5006/testJSON/"+JSON.stringify(test_icerigi));
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

//Aldığımız dersleri dersler değişkeninne atıyoruz
myPromise.then(
  function(test_json_value) {
      test = JSON.parse(test_json_value)
      console.log(test)
      let current_soru_sayisi = 0
      for(let i = 0;i<Object.keys(test).length;i++){
          
            if(i != 0){
            current_soru_sayisi += 1;
            soru_ekle(test["Soru"+i],current_soru_sayisi)
            }   
      }

      soru_sayisi = Object.keys(test).length - 1
      soru_gorunum_butonlarini_etkinlestir()

      document.getElementById("question_toggle_button_1").click()
      soru_gorunum_boolen_array[0] = true
  }
)

function soru_ekle(soru,current_soru_sayisi){
    let siklar_HTML = ""
    let buttons_div =""
    soru_gorunum_boolen_array.push(false)

    for(let i = 0;i<Object.keys(soru.Siklar).length;i++){
        siklar_HTML += 
        `
        <div class="custom-control custom-radio">
            <input type="radio" id="customRadio${i+1}_${current_soru_sayisi}"
                name="customRadio_${current_soru_sayisi}" class="custom-control-input">
            <label class="custom-control-label"
                for="customRadio${i+1}_${current_soru_sayisi}">${soru.Siklar[i]}</label>
        </div>
        `
    }
    if(current_soru_sayisi == 1){
        buttons_div = `
            <div class="row" style="display:flex;justify-content:center">
            <button class="btn btn-primary" id="next_q_button_${current_soru_sayisi + 1}" style="margin-left:5px;">İleri</button>
            </div>
        `
    }else if(current_soru_sayisi == Object.keys(test).length - 1){
        buttons_div = `
            <div class="row" style="display:flex;justify-content:center">
            <button class="btn btn-primary" id="prev_q_button_${current_soru_sayisi - 1}" style="margin-left:5px;border:none;background:red">Geri</button>
            </div>
        `
    }else{
        buttons_div = `
            <div class="row" style="display:flex;justify-content:center">
            <button class="btn btn-primary" id="prev_q_button_${current_soru_sayisi - 1}" style="margin-left:5px;border:none;background:red">Geri</button>
            <button class="btn btn-primary" id="next_q_button_${current_soru_sayisi + 1}" style="margin-left:5px;">İleri</button>
            </div>
        `
    }
    sorular_div.innerHTML += 
     `
     <div id="question_${current_soru_sayisi}">
            <div class="card question d-flex mb-4 edit-quesiton">
                <div class="d-flex flex-grow-1 min-width-zero">
                    <div
                        class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                            <span class="heading-number d-inline-block" >
                                ${current_soru_sayisi}
                            </span>
                            ${soru.Ders.DersYazisi} - ${soru.Konu.KonuYazisi}
                        </div>
                    </div>
                    <div
                        class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                        <button
                            class="btn btn-outline-theme-3 icon-button rotate-icon-click"
                            type="button" data-toggle="collapse" data-target="#q${current_soru_sayisi}"
                            aria-expanded="false" aria-controls="q${current_soru_sayisi}"
                            id="question_toggle_button_${current_soru_sayisi}"
                            >
                            <i class="simple-icon-arrow-down with-rotate-icon"></i>
                        </button>
                    </div>
                </div>

                <div class="collapse question-collapse" id="q${current_soru_sayisi}">
                    <div class="card-body pt-0">
                        
                        <label>${soru.SoruYazisi}</label>
                        <div class="mb-4">
                        ${siklar_HTML}
                        </div>
                        ${buttons_div}
                    </div>
                    
                </div>
            </div>
        </div>
     `
}

function soru_gorunum_butonlarini_etkinlestir(){
    for(let current_soru_sayisi = 1;current_soru_sayisi <= soru_sayisi;current_soru_sayisi ++){
        document.getElementById("question_toggle_button_"+current_soru_sayisi).onclick = () => {
            for(let i = 0;i< soru_gorunum_boolen_array.length;i++){
                if(soru_gorunum_boolen_array[i] == true){
                    document.getElementById("question_toggle_button_"+(i+1)).click()
                    soru_gorunum_boolen_array[i] = false
                }
            }
            soru_gorunum_boolen_array[current_soru_sayisi-1]= true
        }
        if(current_soru_sayisi != 1){
            document.getElementById("next_q_button_"+current_soru_sayisi).onclick = () => {
                for(let i = 0;i< soru_gorunum_boolen_array.length;i++){
                    if(soru_gorunum_boolen_array[i] == true){
                        document.getElementById("question_toggle_button_"+(i+1)).click()
                        soru_gorunum_boolen_array[i] = false
                    }
                }
                document.getElementById("question_toggle_button_"+current_soru_sayisi).click()
                soru_gorunum_boolen_array[current_soru_sayisi-1]= true
                document.getElementById("question_"+current_soru_sayisi).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            }
        }
        if(current_soru_sayisi != soru_sayisi){
            console.log(current_soru_sayisi)
            document.getElementById("prev_q_button_"+current_soru_sayisi).onclick = () => { 
                for(let i = 0;i< soru_gorunum_boolen_array.length;i++){
                    if(soru_gorunum_boolen_array[i] == true){
                        document.getElementById("question_toggle_button_"+(i+1)).click()
                        soru_gorunum_boolen_array[i] = false
                    }
                }
                document.getElementById("question_toggle_button_"+current_soru_sayisi).click()
                soru_gorunum_boolen_array[current_soru_sayisi-1]= true
                document.getElementById("question_"+current_soru_sayisi).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            }
        }

    }
}
