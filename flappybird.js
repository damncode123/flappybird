let hole = document.getElementById('hole');
let game = document.getElementById('game');
let block = document.getElementById('block');
let result = document.getElementById('result');
let text = document.getElementById('text');
let score=0;
let jumping = 0;
hole.addEventListener("animationiteration",RanHole)

    function RanHole()
    {
        let random = - ((Math.random()*450)+150);
        hole.style.top = random+"px";
        score++;
    }
    let fall = setInterval(function()
    {
        let birdtop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
        if(jumping==0)
        {
            bird.style.top=(birdtop+2)+"px";
        }
        let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        let holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        let hTop = (600+holetop);
        if((birdtop>850)||((blockleft<50)&&(blockleft>-50)&&((birdtop<hTop)||(birdtop>hTop+400))))
        {
            result.style.display = "block";
            text.innerText = `Your Final Score is : ${score}`;
            game.style.display = "none";
            score=0;
        }
    },10)
    window.addEventListener("keydown",hop)
    function hop()
    {
        jumping = 1;
        let birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if(birdtop > 6)
        {
            bird.style.top = (birdtop -60) + "px";
        }
        setTimeout(function()
        {
            jumping = 0;
        },100)
    }
// function hop()
//     {
//         jumping = 1;
//         let birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
//         if(birdtop > 6)
//         {
//             bird.style.top = (birdtop -60) + "px";
//         }
//         setTimeout(function()
//         {
//             jumping = 0;
//         },100)
//     }
// function hop()
//     {
//         jumping = 1;
//         let birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
//         if(birdtop > 6)
//         {
//             bird.style.top = (birdtop -60) + "px";
//         }
//         setTimeout(function()
//         {
//             jumping = 0;
//         },100)
//     }
// function hop()
//     {
//         jumping = 1;
//         let birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
//         if(birdtop > 6)
//         {
//             bird.style.top = (birdtop -60) + "px";
//         }
//         setTimeout(function()
//         {
//             jumping = 0;
//         },100)
//     }
