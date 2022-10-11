
//declaration des variables
let mesLiens = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const supBtn = document.getElementById("sup-btn")
const inpuTab = document.getElementById("input-tab")

const liensDuStockageLocale = JSON.parse(localStorage.getItem("mesLiens"))

//verification de l'existance des liens dans le stockage locale

if(liensDuStockageLocale){
    mesLiens = liensDuStockageLocale

    rendu(mesLiens)
}

/*const tabs = [
    {
        url: "test.com"
    }
]*/

inpuTab.addEventListener("click",function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        mesLiens.push(tabs[0].url)
        localStorage.setItem("mesLiens", JSON.stringify(mesLiens) )
        rendu(mesLiens)
    })
})

//fonctions
function rendu(test){
    let liste = ""

    for(let i = 0 ; i < test.length ; i ++){
        
         liste += `<li> 
                        <a target = '_blank' href ='${test}'> 
                            ${test[i]}
                        </a>
                    </li> `
 
        /*let li = document.createElement("li")
        li.textContent = mesLiens[i]
        ulEl.append(li)*/
     }

     ulEl.innerHTML = liste

} 



inputBtn.addEventListener("click",function() {
    mesLiens.push(inputEl.value)

    localStorage.setItem("mesLiens" , JSON.stringify(mesLiens))

    inputEl.value = ""

    rendu(mesLiens)
})

supBtn.addEventListener("dblclick",function() {
    
    localStorage.clear()
    mesLiens = []
    rendu(mesLiens
        )
    //ulEl.innerHTML = ""

})
