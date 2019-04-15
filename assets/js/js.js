let i = 0

let  play = 0


let scoreCross = 0
let scoreCircle = 0



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


            if (i === 0 && !this.getAttribute('play')) {
                this.innerHTML = '<i class="fas fa-times"></i>'
                myCase.style.color = "red"

                this.setAttribute('play', 'userCross')
                i = 1
                console.log(this)
                userCross.push(this.getAttribute('id'))
                //  console.log(userCross)

                if (result(userCross)) {
                    play++
                    mancheText.innerText = play
                    scoreCross++
                    scoreUserCross.innerText = scoreCross
                    delContainer()
                }

            }
            else if(i === 1 && !this.getAttribute('play')){
                this.innerHTML = '<i class="far fa-circle"></i>'
                myCase.style.color = "blue"
                this.setAttribute('play', 'userCircle')
                i = 0
                console.log(this)
                userCircle.push(this.getAttribute('id'))

                if (result(userCircle)) {
                    play++
                    mancheText.innerText = play
                    scoreCircle++
                    scoreUserCircle.innerText = scoreCircle
                    delContainer()

                }
            }


            if (scoreCross === 2) {

                // alert('UserCoss a gagné la partie')
                if (window.confirm("UserCoss a gagné la partie, Voulez-vous recommencez?")) {
                    location.reload()
                }
                else{
                    return
                }
            }
            else if(scoreCircle === 2){

                //  alert('UserCircle a gagné la partie')

                if (window.confirm("UserCoss a gagné la partie, Voulez-vous recommencez?")) {
                    location.reload()
                }
                else{
                    return
                }
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
