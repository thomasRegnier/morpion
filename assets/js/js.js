let i = 0

let  play = 0

let lap = 0

let scoreCross = 0
let scoreCircle = 0


let forWinner = document.querySelector('.forWinner')

let scoreUserCross = document.querySelector('.scoreUserCross')

let  scoreUserCircle = document.querySelector('.scoreUserCircle')


let userCross = []
let userCircle = []


let response = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"],
    ["a1", "b2", "c3"],
    ["a3","b2","c1"]
]

let mancheText = document.querySelector('.manche')


mancheText.innerText = play



//  p = document.getElementById("para1");
//  p_prime = p.cloneNode(true)

let myCases = document.querySelectorAll('.case')

const letsGo = function(){

    myCases.forEach(function (myCase) {

        myCase.addEventListener('click', function () {

            lap++
            console.log(lap)
            forWinner.innerText = ""


            if (i === 0 && !this.getAttribute('play')) {
                this.innerHTML = '<i class="fas fa-times"></i>'
                myCase.style.color = "#ff3f3f"
                this.setAttribute('play', 'userCross')
                i = 1
              //  console.log(this)
                userCross.push(this.getAttribute('id'))
                //  console.log(userCross)

                if (result(userCross)) {
                    lap = 0
                    play++
                    mancheText.innerText = play
                    scoreCross++
                    scoreUserCross.innerText = scoreCross
                    forWinner.innerText = "Cross player Win"
                  setTimeout(function () {
                      delContainer()
                  }, 800)

                }

            }
            else if(i === 1 && !this.getAttribute('play')){
                this.innerHTML = '<i class="far fa-circle"></i>'
                myCase.style.color = "#3f85ff"
                this.setAttribute('play', 'userCircle')
                i = 0
             //   console.log(this)
                userCircle.push(this.getAttribute('id'))

                if (result(userCircle)) {
                    lap = 0
                    play++
                    mancheText.innerText = play
                    scoreCircle++
                    scoreUserCircle.innerText = scoreCircle
                    forWinner.innerText = "Circle player Win"
                    setTimeout(function () {
                        delContainer()
                    }, 800)

                }
            }

            if(lap >= 9){
                forWinner.innerText = "Egalité"
                setTimeout(function () {
                    delContainer()
                    lap = 0
                }, 800)
            }


            if (scoreCross - scoreCircle === 2) {

                // alert('UserCoss a gagné la partie')
            setTimeout(function () {

                if (window.confirm("UserCross a gagné la partie, Voulez-vous recommencez?")) {
                    location.reload()
                }
                else{
                    return
                }


            }, 800)
            }
            else if(scoreCircle - scoreCross === 2){

                //  alert('UserCircle a gagné la partie')
                setTimeout(function () {

                    if (window.confirm("UserCircle a gagné la partie, Voulez-vous recommencez?")) {
                        location.reload()
                    }
                    else{
                        return
                    }

                }, 800)
            }

        })
    })

}


letsGo()

let game = document.querySelector('.container')

let gameClone = game.cloneNode(true)

let body = document.querySelector('body')


const result = function(array) {
    let finalResult = false
    for (let value of response) {
        let res = value.every(val => array.indexOf(val) !== -1)
        if (res) {
            finalResult = true;
        }
    }
    return finalResult;

}



const delContainer = function () {

    for (let i = 0; i<myCases.length; i++){
        myCases[i].innerText = ""
        myCases[i].removeAttribute('play');
        userCross = []
        userCircle = []
    }
}


let forStart = document.querySelector('.btn')

let backGround = document.querySelector('.forStart')

forStart.addEventListener('click', function () {
    showMe()
})



const showMe = function () {
    backGround.classList.add('fadeOut')
    console.log("hgg")
}

