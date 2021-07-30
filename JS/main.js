

/*SKILLS*/
function accordian(idx){
    console.log(idx)
    all_docs=document.getElementsByClassName("skill_set")
    for (var i in all_docs){
        
        if (all_docs[i].parentNode !== undefined){
            console.log(all_docs[i].className=="skill_set skills_open")
            console.log(all_docs[i].parentNode.id)

            if(all_docs[i].className=="skill_set skills_open"){
                if(all_docs[i].parentNode.id==idx){
                    all_docs[i].className="skill_set skills_close"
                }
            }
            else{
                if(all_docs[i].parentNode.id==idx){
                    all_docs[i].className="skill_set skills_open"
                }
            }
            
                
            
        }
    }
}

var modalViews=document.querySelectorAll('.services_modal')
var modalBtns=document.querySelectorAll('.services_button')
var modalClose=document.querySelectorAll('.services_modal-close')

let modal=function(modalClick){
    modalViews[modalClick].classList.add("active_modal")

}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalClose.forEach((mc,i)=>{
    mc.addEventListener('click',()=>{
        modalViews.forEach((modalview)=>{
            modalview.classList.remove('active_modal')
        })
    })
})
