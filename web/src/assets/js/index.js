
// Databaseden alacağımız dersler için dersler değişkenini oluşturuyoruz
let dersler;

// Dersleri get yapıyoruz
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "http://localhost:5006/dersler");
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
  function(dersler_value) {
      
        /////// BACKEND ELEMENTS //////

    dersler = JSON.parse(dersler_value)
    let dersler_checkboxlari = []
    let konular_checkbox_idleri = []
    let konular_checkbox_idleri_dersler_hashmap = []
    let konular_sorusayisi_input_idleri = []
    let ders_sayisi = Object.keys(dersler).length
    for(let i = 0;i<ders_sayisi;i++){
        let current_ders = dersler[Object.keys(dersler)[i]]
        dersler_checkboxlari.push(current_ders.DersAdi+"_checkbox")

        // Sol tarafa yerleşitilecek checkboxlar
        if(i<Math.round(ders_sayisi/2)){
            document.getElementById("left_ders_checkboxlari").innerHTML += `
            <div class="custom-control custom-checkbox" style="margin-left:25%;height:${200/Math.round(ders_sayisi/2)}px;display:flex;align-items:center">
                <input type="checkbox" id="${dersler_checkboxlari[i]}" name="kullanici_dersleri" class="custom-control-input">
                <label class="custom-control-label" for="${dersler_checkboxlari[i]}">${current_ders.DersYazisi}</label>
            </div>`
        }// Sağ tarafa yerleşitilecek checkboxlar
        else if(i>=Math.round(ders_sayisi/2)){
            document.getElementById("right_ders_checkboxlari").innerHTML += `
            <div class="custom-control custom-checkbox" style="margin-left:25%;height:${200/Math.round(ders_sayisi/2)}px;display:flex;align-items:center">
                <input type="checkbox" id="${dersler_checkboxlari[i]}" name="kullanici_dersleri" class="custom-control-input">
                <label class="custom-control-label" for="${dersler_checkboxlari[i]}">${current_ders.DersYazisi}</label>
            </div>`
        }
    }


    let kullanici_dersleri =  []
    let kullanici_konulari = []

    /////// HTML ELEMENTS //////
    let next_button = document.getElementById("next_button")
    // let prev_button = document.getElementById("prev_button")
    let submit_button = document.getElementById("submit_button")

    let $konularTable;

    let konular_div = document.getElementById("konular_div")
    konular_div.innerHTML = ""

    let card_0 = document.getElementById("step-0")
    let card_1 = document.getElementById("step-1")
    let card_2 = document.getElementById("step-2")

    let step_0 = document.getElementById("step_name_0")
    let step_1 = document.getElementById("step_name_1")
    let step_2 = document.getElementById("step_name_2")

    let containerCard = document.getElementById("containerCard")
    let innerCard = document.getElementById("innerCard")
    let cardContent = document.getElementById("smartWizardValidation")


    // prev_button.classList.add("disabled")            
    submit_button.style.display = "none"


    containerCard.classList.add("col-6")
    containerCard.classList.remove("col-10")
    containerCard.style.marginLeft = "25%"
    innerCard.style.height = "80%"
    cardContent.style.height = "100%"


    let state = 0

    next_button.onclick = () =>{

        if(state == 0){

          for(let i = 0;i<ders_sayisi;i++){
              let current_ders = dersler[Object.keys(dersler)[i]]
              let current_dersCheckbox = dersler_checkboxlari[i]
              if(document.getElementById(current_dersCheckbox).checked == true){
                  kullanici_dersleri.push(current_ders.DersAdi)
                  let current_dersKonular = current_ders.Konular
                  let current_dersKonularSayisi = Object.keys(current_ders.Konular).length

                  for(let j=0;j<current_dersKonularSayisi;j++){
                      let current_konu = current_dersKonular[Object.keys(current_dersKonular)[j]]
                      konular_checkbox_idleri.push(current_konu.KonuAdi+"_checkbox")
                      konular_sorusayisi_input_idleri.push(current_konu.KonuAdi+"_sorusayisi_input")                      
                      konular_checkbox_idleri_dersler_hashmap.push(current_ders.DersAdi)
                      konular_div.innerHTML += `
                      <tr class="soru">
                          <td>
                              <p class="list-item-heading">${current_ders.DersID}</p>
                          </td>
                          <td>
                              <p class="list-item-heading">${current_ders.DersYazisi}</p>
                          </td>
                          <td>
                              <p class="text-muted">${current_konu.KonuID}</p>
                          </td>
                          <td>
                              <p class="text-muted">${current_konu.KonuYazisi}</p>
                          </td>
                          <td>
                            <label class="custom-control custom-input mb-1 align-self-center">
                                  <input type="number" name="" id="${current_konu.KonuAdi+"_sorusayisi_input"}" value="0" class="soru_sayisi_input">
                              </label>
                          </td>
                          <td>
                              <label class="custom-control custom-checkbox mb-1 align-self-center data-table-rows-check">
                                  <input type="checkbox" class="custom-control-input" id="${konular_checkbox_idleri[j]}" disabled>
                                  <span class="custom-control-label">&nbsp;</span>
                              </label>
                          </td> 
                      </tr>
              `
                  }
                  
              }
          }


            if(kullanici_dersleri.length != 0){
              
                tabloyu_düzenle()
                containerCard.classList.remove("col-6")
                containerCard.classList.add("col-10")
                containerCard.style.marginLeft = "8.3333333333%"
                containerCard.style.marginTop = "10px"
                innerCard.style.height = "110%"
                cardContent.style.height = "100%"
                card_0.style.display = "none"
                card_1.style.display = "block"
                card_2.style.display = "none"
                step_1.classList.add("active")
                state += 1
                // prev_button.classList.remove("disabled")   
                
                hata_yazdir("")
            }else{
                hata_yazdir("En az bir ders seçmelisiniz.")
                // prev_button.classList.remove("disabled")            
            }
        }else if(state == 1){

        
                kullanici_konulari = secilenKonular(dersler,kullanici_dersleri)
                console.log(kullanici_konulari)
                for(let current_konu_index=0;current_konu_index<kullanici_konulari.length;current_konu_index++){
                  let current_konu_json = kullanici_konulari[current_konu_index]
                  konuya_gore_test_getir(current_konu_json)
                }

                if(kullanici_konulari.length != 0){

                    containerCard.classList.add("col-6")
                    containerCard.classList.remove("col-10")
                    containerCard.style.marginLeft = "25%"
                    containerCard.style.marginTop = "5%"
                    innerCard.style.height = "80%"
                    cardContent.style.height = "100%"
                    card_0.style.display = "none"
                    card_1.style.display = "none"
                    card_2.style.display = "block"
                    step_2.classList.add("active")
                    state += 1
                    next_button.style.display = "none"
                    submit_button.style.display = ""
                    hata_yazdir("")
                }else{
                    hata_yazdir("En az bir konu seçmelisiniz.")
                }
        }
    }

    submit_button.onclick = () =>{
        
    }

    



    // // prev_button.onclick = () =>{
    //     let kullanici_dersleri =  []

    //     if(state == 1){
    //         containerCard.classList.add("col-6")
    //         containerCard.classList.remove("col-10")
    //         containerCard.style.marginLeft = "25%"
    //         innerCard.style.height = "80%"
    //         cardContent.style.height = "100%"
    //         card_0.style.display = "block"
    //         card_1.style.display = "none"
    //         card_2.style.display = "none"
    //         state -= 1
    //         // prev_button.classList.add("disabled")            
    //     }else if(state == 2){
    //         containerCard.classList.remove("col-6")
    //         containerCard.classList.add("col-10")
    //         containerCard.style.marginLeft = "8.3333333333%"
    //         innerCard.style.height = "110%"
    //         cardContent.style.height = "100%"
    //         card_0.style.display = "none"
    //         card_1.style.display = "block"
    //         card_2.style.display = "none"
    //         state -= 1
    //         // prev_button.classList.remove("disabled")  
    //         next_button.style.display = ""
    //         submit_button.style.display = "none"

            
    //     }
    // }

}


,function(error) {console.log(error)}
);
function hata_yazdir(hata){
    let hata_text = document.getElementById("hata_text")

    hata_text.innerHTML = hata

}

function controlCheckAll() {
    var anyChecked = false;
    var allChecked = true;
    $('#konularTable tbody tr .custom-checkbox input').each(function () {
      if ($(this).prop("checked")) {
        anyChecked = true;
      } else {
        allChecked = false;
      }
    });
    if (anyChecked) {
      $("#checkAllDataTables").prop("indeterminate", anyChecked);
    } else {
      $("#checkAllDataTables").prop("indeterminate", anyChecked);
      $("#checkAllDataTables").prop("checked", anyChecked);
    }
    if (allChecked) {
      $("#checkAllDataTables").prop("indeterminate", false);
      $("#checkAllDataTables").prop("checked", allChecked);
    }
  }

  function unCheckAllRows() {
    $('#konularTable tbody tr').removeClass('selected');
    $('#konularTable tbody tr .custom-checkbox input').prop("checked", false).trigger("change");
  }

  function checkAllRows() {
    $('#konularTable tbody tr').addClass('selected');
    $('#konularTable tbody tr .custom-checkbox input').prop("checked", true).trigger("change");
  }

  function secilenKonular(dersler,secilen_dersler) {
    

    let secilen_konular = [];
    let secilen_rowlar = $konularTable.rows('.selected').data()
    let secilen_row_dersidIndex = "Ders ID";
    let secilen_row_sorusayisiIndex = "Soru Sayısı";
    let secilen_row_konuidIndex = "Konu ID";
    //Seçilen dersleri obje olarak alıyoruz
    console.log("seçlien rowlar",secilen_rowlar)
    for(let i = 0;i< secilen_rowlar.length;i++){
      let current_secilen_row = secilen_rowlar[i]
      let current_dersID = $(current_secilen_row[secilen_row_dersidIndex])[0].innerText
      let current_konuID = $(current_secilen_row[secilen_row_konuidIndex])[0].innerText
      let current_SoruSayisiInput_HTMLtext = $(current_secilen_row[secilen_row_sorusayisiIndex])[0].firstElementChild
      let current_SoruSayisiInput_id = $(current_SoruSayisiInput_HTMLtext)[0].id
      let current_SoruSayisi = document.getElementById(current_SoruSayisiInput_id).value
      let current_konuJSON = dersler[current_dersID].Konular[current_konuID]
      current_konuJSON["SoruSayisi"] = current_SoruSayisi
      secilen_konular.push(current_konuJSON)
    }

    return secilen_konular
  }

  function tabloyu_düzenle(){

     

  // Tabloyu düzenlediğimiz yers
  $konularTable = $("#konularTable").DataTable({
      bLengthChange: false,
      buttons: [
        'copy',
        'excel',
        'csv',
        'pdf'
      ],
      destroy: false,
      info: false,
      sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
      pageLength: 3,
      columns: [
        { data: "Ders ID" },
        { data: "Ders" },
        { data: "Konu ID" },
        { data: "Konu" },
        { data: "Soru Sayısı" },
        { data: "Çöz" }
      ],
      language: {
        paginate: {
          previous: "<i class='simple-icon-arrow-left'></i>",
          next: "<i class='simple-icon-arrow-right'></i>"
        }
      },
      drawCallback: function () {

        

      //   unCheckAllRows();
        $("#checkAllDataTables").prop("checked", false);
        $("#checkAllDataTables").prop("indeterminate", false).trigger("change");

        $($(".dataTables_wrapper .pagination li:first-of-type"))
          .find("a")
          .addClass("prev");
        $($(".dataTables_wrapper .pagination li:last-of-type"))
          .find("a")
          .addClass("next");
        $(".dataTables_wrapper .pagination").addClass("pagination-sm");
        var api = $(this).dataTable().api();
        $("#pageCountDatatable span").html("Displaying " + parseInt(api.page.info().start + 1) + "-" + api.page.info().end + " of " + api.page.info().recordsTotal + " items");
      }
    });
    $("#dataTablesCopy").on("click", function (event) {
      event.preventDefault();
      $konularTable.buttons(0).trigger();
    });

    $("#dataTablesExcel").on("click", function (event) {
      event.preventDefault();
      $konularTable.buttons(1).trigger();
    });

    $("#dataTablesCsv").on("click", function (event) {
      event.preventDefault();
      $konularTable.buttons(2).trigger();
    });

    $("#dataTablesPdf").on("click", function (event) {
      event.preventDefault();
      $konularTable.buttons(3).trigger();
    });

    $('#konularTable tbody').on('click', 'tr', function () {
      // $(this).toggleClass('selected');
      // var $checkBox = $(this).find(".custom-checkbox input");
      // $checkBox.prop("checked", !$checkBox.prop("checked")).trigger("change");
      // controlCheckAll();
    });
    
    
    for(let i = 0;i<$('#konularTable .soru_sayisi_input').length;i++){
      $('#konularTable .soru_sayisi_input')[i].oninput = () => {
        if($('#konularTable .soru_sayisi_input')[i].value > 0 && $('#konularTable .soru_sayisi_input')[i].value != null){
          $("#konularTable #konular_div tr")[i].classList.add('selected');
          var $checkBox = $('#konularTable .custom-control-input')[i]
          $checkBox.checked = true;
          controlCheckAll();
        }else{
          $("#konularTable #konular_div tr")[i].classList.remove('selected');
          var $checkBox = $('#konularTable .custom-control-input')[i]
          $checkBox.checked = false;
          controlCheckAll();
        }
      }
    }

    $(".next").on("click",()=>{
      for(let i = 0;i<$('#konularTable .soru_sayisi_input').length;i++){
        $('#konularTable .soru_sayisi_input')[i].oninput = () => {
          if($('#konularTable .soru_sayisi_input')[i].value > 0 && $('#konularTable .soru_sayisi_input')[i].value != null){
            $("#konularTable #konular_div tr")[i].classList.add('selected');
            var $checkBox = $('#konularTable .custom-control-input')[i]
            $checkBox.checked = true;
            controlCheckAll();
          }else{
            $("#konularTable #konular_div tr")[i].classList.remove('selected');
            var $checkBox = $('#konularTable .custom-control-input')[i]
            $checkBox.checked = false;
            controlCheckAll();
          }
        }
      }
    })

}

function konuya_gore_test_getir(konuJSON){
  console.log("Gönderilen Konu Json",konuJSON)
  let endpoint = "http://localhost:5006/matematik/yas-problemi/"+konuJSON.SoruSayisi;

  fetch(endpoint).then(res => res.json()).then(async test => {
    console.log(test)
    return await test
  })
}