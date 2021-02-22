window.addEventListener('load', () => {
    const picArray = []
    for(let i=1; i<=18; i++){
        if(i<=7){
            picArray.push('./pictures/girl_0'+i+'.jpg')
        }else if(i<=9){
            picArray.push('./pictures/girl_0'+i+'.png')
        }else if(i<=18){
            picArray.push('./pictures/girl_'+i+'.png')
        }
    }
    for(let i=1; i<=18; i++){
        if(i<=7){
            picArray.push('./pictures/girl0'+i+'.jpg')
        }else if(i<=9){
            picArray.push('./pictures/girl0'+i+'.png')
        }else if(i<=18){
            picArray.push('./pictures/girl_'+i+'.png')
        } 
    }

    let cols = document.getElementsByClassName('col-sm')
    let counter = 0

    for(let i=0; i<cols.length; i++){
        for(let j=0; j<3; j++){
            const img = document.createElement('img')
            img.src = picArray[counter++]
            img.classList.add('img-fluid', 'col-4')
            cols[i].appendChild(img)
        }
    }
})