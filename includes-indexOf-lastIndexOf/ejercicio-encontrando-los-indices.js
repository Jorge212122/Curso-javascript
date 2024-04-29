// exercise  finding substring indices

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi']
const target = 'banana'

function seEncuentraLaFruta(stringArray, target){
    if(stringArray.includes(target)){
        const indexFirstOcurrence = stringArray.indexOf(target)
        const indexLastOcurrence = stringArray.lastIndexOf(target)  
        console.log(indexFirstOcurrence,'\n', indexLastOcurrence)
    } else{
            return -1
    }
}

seEncuentraLaFruta(stringArray, target)