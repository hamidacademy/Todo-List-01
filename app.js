let addbtn = document.querySelector('.addbtn')
let inputname = document.querySelector('.input-name')
let ulclass = document.querySelector('.ulclass')
var username = ''

function add(){
    username = inputname.value
    let item = document.createElement('li')
    item.setAttribute('class', 'liclass')
    let text = document.createElement('p')
    text.innerText = username
    let divitem = document.createElement('div')
    divitem.setAttribute('class', 'btn-div')
    let editbtn = document.createElement('button')
    editbtn.innerText = 'Edit'
    editbtn.setAttribute('class', 'editbtn')
    let deletebtn = document.createElement('button')
    deletebtn.innerText = 'Delete'
    deletebtn.setAttribute('class', 'deletebtn')
    let surespan = document.createElement('span')
    surespan.setAttribute('class', 'sure-span')
    let p = document.createElement('p')
    p.innerText = 'Are you sure ?'
    let yesbtn = document.createElement('button')
    yesbtn.setAttribute('class', 'yesbtn')
    yesbtn.innerText = 'yes'
    let nobtn = document.createElement('button')
    nobtn.setAttribute('class', 'nobtn')
    nobtn.innerText = 'no'
    
    editbtn.addEventListener('click', edit)
    deletebtn.addEventListener('click', del)
    
    item.appendChild(text)
    divitem.appendChild(editbtn)
    divitem.appendChild(deletebtn)
    item.appendChild(divitem)
    ulclass.append(item)
    surespan.appendChild(p)
    surespan.appendChild(yesbtn)
    surespan.appendChild(nobtn)
    item.appendChild(surespan)
    
    function del(){
        surespan.style.display = 'flex'
    
        yesbtn.addEventListener('click', function(){
            ulclass.removeChild(item)
        })
    
        nobtn.addEventListener('click', function(){
            surespan.style.display = 'none'
        })
    }
    
    let editspan = document.createElement('span')
    editspan.setAttribute('class', 'edit-span')
    let editinput = document.createElement('input')
    editinput.setAttribute('class', 'edit-input')
    editinput.setAttribute('placeholder', 'Edit')
    let updatebtn = document.createElement('button')
    updatebtn.setAttribute('class', 'updatebtn')
    updatebtn.innerText = 'Update'
    let canclebtn = document.createElement('button')
    canclebtn.setAttribute('class', 'canclebtn')
    canclebtn.innerText = 'cancle'

    editspan.appendChild(editinput)
    editspan.appendChild(updatebtn)
    editspan.appendChild(canclebtn)

    item.appendChild(editspan)

    function edit(){
        editspan.style.display = 'flex'
        
        updatebtn.addEventListener('click', function(){
            text.innerText = editinput.value
            editspan.style.display = 'none'
            
   
        })
        
        canclebtn.addEventListener('click', function(){
            editspan.style.display = 'none'

        })
    }


    inputname.value = ''
}


addbtn.addEventListener('click', add )


inputname.addEventListener('keyup', (event)=>{
    if(event.keyCode == 13){
        add()
    }
})
