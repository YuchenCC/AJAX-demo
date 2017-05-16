pic.addEventListener('click',fill)
let i = 1
function fill(){
    let ajax = new XMLHttpRequest()
    
    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4){
            if (ajax.status >= 200 && ajax.status< 300){
                let data = JSON.parse(ajax.responseText)
                if (data.hasNextpage === false){
                    pic.disabled = true
                    pic.innerText = '没有下一页'
                }
                console.log(data.items)
                for(let i=0;i<data.items.length;i++){
                    let image = document.createElement('img')                    
                    image.src = data.items[i].url
                    //console.log(i)
                    let wrapper = document.getElementById('wrapper')
                    wrapper.append(image)     
                }
                i = i + 1
                console.log(i)                    
            }else{
                console.log('error')
            }
        }
    }

    ajax.onerror = function() {
    console.log('There was an error!');
    }
    
    ajax.open('GET','./package' + i + '.json')

    ajax.send(null)
}