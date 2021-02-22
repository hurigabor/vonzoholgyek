const iconArray = []
const bigArray = []

window.addEventListener('load', () => {
    
    getGirlsIcon()

    let cols = document.getElementsByClassName('col-sm')
    let counter = 0

    for(let i=0; i<cols.length; i++){
        for(let j=0; j<3; j++){
            const img = document.createElement('img')
            img.src = iconArray[counter++]
            img.classList.add('img-fluid', 'col-sm-4')
            cols[i].appendChild(img)
        }
    }
})

const getGirlsIcon = () => {
    for(let i=1; i<=18; i++){
        if(i<=7){
            iconArray.push('./pictures/girl_0'+i+'.jpg')
        }else if(i<=9){
            iconArray.push('./pictures/girl_0'+i+'.png')
        }else if(i<=18){
            iconArray.push('./pictures/girl_'+i+'.png')
        }
    }
}

const getGirlsBig = () => {
    for(let i=1; i<=18; i++){
        if(i<=7){
            bigArray.push('./pictures/girl0'+i+'.jpg')
        }else if(i<=9){
            bigArray.push('./pictures/girl0'+i+'.png')
        }else if(i<=18){
            bigArray.push('./pictures/girl'+i+'.png')
        } 
    }
}