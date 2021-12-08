
let soru_ekle_button = document.getElementById("soru_ekle")
let sorular_div = document.getElementById("sorular_div")
let soru_sayisi = 0

soru_ekle_button.onclick = () =>{
    soru_sayisi += 1;
    sorular_div.innerHTML += 
     `
     <div>
            <div class="card question d-flex mb-4 edit-quesiton">
                <div class="d-flex flex-grow-1 min-width-zero">
                    <div
                        class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                            <span class="heading-number d-inline-block">
                                ${soru_sayisi}
                            </span>
                            Türkçe
                        </div>
                    </div>
                    <div
                        class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                        <button class="btn btn-outline-theme-3 icon-button edit-button">
                            <i class="simple-icon-pencil"></i>
                        </button>
                        <button class="btn btn-outline-theme-3 icon-button view-button">
                            <i class="simple-icon-eye"></i>
                        </button>
                        <button
                            class="btn btn-outline-theme-3 icon-button rotate-icon-click"
                            type="button" data-toggle="collapse" data-target="#q${soru_sayisi}"
                            aria-expanded="false" aria-controls="q${soru_sayisi}">
                            <i class="simple-icon-arrow-down with-rotate-icon"></i>
                        </button>
                    </div>
                </div>

                <div class="collapse question-collapse" id="q${soru_sayisi}">
                    <div class="card-body pt-0">
                        
                        <label>Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?</label>
                        <div class="mb-4">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio1_${soru_sayisi}"
                                    name="customRadio_${soru_sayisi}" class="custom-control-input">
                                <label class="custom-control-label"
                                    for="customRadio1_${soru_sayisi}">Dün meydanda gezen sen miydin?</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio2_${soru_sayisi}"
                                    name="customRadio_${soru_sayisi}" class="custom-control-input">
                                <label class="custom-control-label"
                                    for="customRadio2_${soru_sayisi}">Yarına Dünyalar kadar ödevim var.</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3_${soru_sayisi}"
                                    name="customRadio_${soru_sayisi}" class="custom-control-input">
                                <label class="custom-control-label"
                                    for="customRadio3_${soru_sayisi}">Hoca dünyalar kadar ödev verdi</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3_${soru_sayisi}"
                                    name="customRadio_${soru_sayisi}" class="custom-control-input">
                                <label class="custom-control-label"
                                    for="customRadio4_${soru_sayisi}">En sevdiğim baklagil Antep fıstığıdır.</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3_${soru_sayisi}"
                                    name="customRadio_${soru_sayisi}" class="custom-control-input">
                                <label class="custom-control-label"
                                    for="customRadio5_${soru_sayisi}">Mehmet amcam dün gitti.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     `
}

      
/////// BACKEND ELEMENTS //////

console.log("TEST İÇERİĞİ",test_icerigi)

let cozulecek_testler_json_array = []

for(let i = 0; i< test_icerigi.DersID_Array.length;i++){
    let current_Ders_ID = test_icerigi.DersID_Array[i]
    let current_Konu_ID = test_icerigi.KonuID_Array[i]
    let current_SoruSayisi = test_icerigi.SoruSayisi_Array[i]
    test_getir(current_Ders_ID,current_Konu_ID,current_SoruSayisi)
    
}
    
async function test_getir(ders_id,konu_id,soru_sayisi){
    // var settings = {
    //     "url": `http://localhost:5006/${ders_id}/${konu_id}/${soru_sayisi}`,
    //     "method": "GET",
    //     "timeout": 0,
    //     "headers": {
    //       "Cookie": "connect.sid=s%3ACe1E1jk_2_DLE_iszl3bz62Zk6tEaJqK.4KZYfEBs%2FqSOyxqFw1jhWON8AM1g5hrml64eOuY2r00"
    //     },
    //   };
      
    //   $.ajax(settings).done(function (response) {
    //     console.log(response);
    //   });
}

function soru_ekle(soru){
    soru_sayisi += 1;
    sorular_div.innerHTML += 
     `
     <div>
            <div class="card question d-flex mb-4 edit-quesiton">
                <div class="d-flex flex-grow-1 min-width-zero">
                    <div
                        class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                            <span class="heading-number d-inline-block">
                                ${soru_sayisi}
                            </span>
                            Türkçe
                        </div>
                    </div>
                    <div
                        class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                        <button class="btn btn-outline-theme-3 icon-button edit-button">
                            <i class="simple-icon-pencil"></i>
                        </button>
                        <button class="btn btn-outline-theme-3 icon-button view-button">
                            <i class="simple-icon-eye"></i>
                        </button>
                        <button
                            class="btn btn-outline-theme-3 icon-button rotate-icon-click"
                            type="button" data-toggle="collapse" data-target="#q${soru_sayisi}"
                            aria-expanded="false" aria-controls="q${soru_sayisi}">
                            <i class="simple-icon-arrow-down with-rotate-icon"></i>
                        </button>
                    </div>
                </div>

                <div class="collapse question-collapse" id="q${soru_sayisi}">
                    <div class="card-body pt-0">
                        
                        <label>${soru.SoruYazisi}</label>
                        <div class="mb-4">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio1_${soru_sayisi}"
                                    name="customRadio_${soru_sayisi}" class="custom-control-input">
                                <label class="custom-control-label"
                                    for="customRadio1_${soru_sayisi}">Male</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio2_${soru_sayisi}"
                                    name="customRadio_${soru_sayisi}" class="custom-control-input">
                                <label class="custom-control-label"
                                    for="customRadio2_${soru_sayisi}">Female</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3_${soru_sayisi}"
                                    name="customRadio_${soru_sayisi}" class="custom-control-input">
                                <label class="custom-control-label"
                                    for="customRadio3_${soru_sayisi}">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     `
}

