const iconArray = []
const bigArray = []

window.addEventListener('load', () => {
    
    let icons = document.getElementById('icons')

    getGirlsIcon()
    getGirlsBig()

    displayIcons()

    displayBigPic(icons)
    
})

const displayIcons = () => {
    iconArray.forEach((pic) => {
        const img = document.createElement('img')
        img.src = pic
        img.classList.add('img-fluid', 'col-sm-4', 'p-1')
        icons.appendChild(img)
    })
}

const displayBigPic = (icons) => {
    icons.childNodes.forEach((child, index) => {
        child.addEventListener('click', () => {
            const img = document.createElement('img')
            img.src = bigArray[index]
            img.id = 'pic'
            if(document.getElementById('pic')){
                document.getElementById('pic').src = bigArray[index]
            }else{
                document.getElementById('bigPic').appendChild(img)
            }
        })
    })
}

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
