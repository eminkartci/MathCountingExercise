let next_button = document.getElementById("next_button")
let prev_button = document.getElementById("prev_button")
let submit_button = document.getElementById("submit_button")

let card_0 = document.getElementById("step-0")
let card_1 = document.getElementById("step-1")
let card_2 = document.getElementById("step-2")

let step_0 = document.getElementById("step_name_0")
let step_1 = document.getElementById("step_name_1")
let step_2 = document.getElementById("step_name_2")

let state = 0
prev_button.classList.add("disabled")            
submit_button.style.display = "none"

next_button.onclick = () =>{
    let lessons =  []

    if(state == 0){
        if(document.getElementById("matematik_checkbox").checked == true){
            lessons.push("matematik")
        }if(document.getElementById("fizik_checkbox").checked == true){
            lessons.push("fizik")
        }if(document.getElementById("kimya_checkbox").checked == true){
            lessons.push("kimya")
        }if(document.getElementById("biyoloji_checkbox").checked == true){
            lessons.push("biyoloji")
        }if(document.getElementById("turkce_checkbox").checked == true){
            lessons.push("turkce")
        }if(document.getElementById("tarih_checkbox").checked == true){
            lessons.push("tarih")
        }


        if(lessons.length !== 0){
            card_0.style.display = "none"
            card_1.style.display = "block"
            card_2.style.display = "none"
            step_1.classList.add("active")
            state += 1
            prev_button.classList.remove("disabled")            
            hata_yazdir("")
        }else{
            hata_yazdir("En az bir ders seçmelisiniz.")
            prev_button.classList.remove("disabled")            
        }
    }else if(state == 1){

        card_0.style.display = "none"
        card_1.style.display = "none"
        card_2.style.display = "block"
        step_2.classList.add("active")
        state += 1
        next_button.style.display = "none"
        submit_button.style.display = ""

        
    }
}



prev_button.onclick = () =>{
    let lessons =  []

    if(state == 1){
        card_0.style.display = "block"
        card_1.style.display = "none"
        card_2.style.display = "none"
        state -= 1
        prev_button.classList.add("disabled")            
    }else if(state == 2){
        card_0.style.display = "none"
        card_1.style.display = "block"
        card_2.style.display = "none"
        state -= 1
        prev_button.classList.remove("disabled")  
        next_button.style.display = ""
        submit_button.style.display = "none"

          
    }
}


function hata_yazdir(hata){
    let hata_text = document.getElementById("hata_text")

    hata_text.innerHTML = hata

}