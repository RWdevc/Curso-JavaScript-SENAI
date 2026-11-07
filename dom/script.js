// // const paragrafo = document.getElementById('paragrafo')
// // const paragrafo2 = document.getElementById('paragrafo2')
// // const paragrafo3 = document.getElementById('paragrafo3')
// // const paragrafo4 = document.getElementById('paragrafo4')

// // console.log(paragrafo)
// // console.log(paragrafo2)
// // console.log(paragrafo3)
// // console.log(paragrafo4)

// // const title = document.getElementById('titulo1');
// // title.innerText = 'Troquei!'

// const paragrafo = document.getElementById('paragrafor')
// paragrafo.style.color = 'green'
// paragrafo.style.fontSize = '90px'
// paragrafo.style.backgroundColor = 'wheat'

// const titulo = document.getElementById("titulo1")
// titulo.style.color = "yellow"
// titulo.style.fontsize = "15px"
// titulo.style.backgroundColor = "black"

//_________________________________________________________

// const paragrafo = document.getElementById('paragrafo')
// const btn = document.getElementById('btn')
//  = const bodydocument.getElementById('body')
// const image = document.getElementById('image')

// btn.addEventListener('click', function(){ //"mouseover" muda ao passar o mouse por cima
//     paragrafo.innerText = 'HEE HEE, WOO!';
//     paragrafo.style.color = 'white';
//     alert("I AM BLACK OR WHITE!");
//     body.style.backgroundColor = "black"  
//     image.src = "../img/white.jpg"
// })

//_________________________________________________________

document.addEventListener('keydown', function (e) {
    if (e.key == "r") {
        document.body.style.backgroundColor = "red"
    }
    else if (e.key == "g") {
        document.body.style.backgroundColor = "green"
    }
    else if (e.key == "b") {
        document.body.style.backgroundColor = "blue"
    }
    else if (e.key == "p") {
        document.body.style.backgroundColor = "purple"
    }
    else if (e.key == "w") {
        document.body.style.backgroundColor = "white"
    }
    else if (e.key == "y") {
        document.body.style.backgroundColor = "yellow"
    }
    else if (e.key == "o") {
        document.body.style.backgroundColor = "orange"
    }
    else if (e.key == "") {
        document.body.style.backgroundColor = "orange"
    }


})