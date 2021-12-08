
let sorular_div = document.getElementById("sorular_div")
let soru_sayisi = 0

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

      for(let i = 0;i<Object.keys(test).length;i++){
          if(i != 0){
            soru_ekle(test["Soru"+i])
          }
      }
  }
)

function soru_ekle(soru){
    soru_sayisi += 1;
    let siklar_HTML = ""

    for(let i = 0;i<Object.keys(soru.Siklar).length;i++){
        siklar_HTML += 
        `
        <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1_${soru_sayisi}"
                name="customRadio_${soru_sayisi}" class="custom-control-input">
            <label class="custom-control-label"
                for="customRadio1_${soru_sayisi}">${soru.Siklar[i]}</label>
        </div>
        `
    }

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
                            ${soru.Ders.DersYazisi}
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
                        ${siklar_HTML}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     `
}

