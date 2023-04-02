// console.log("hello here");

let turn = "X"; 

play_turn = document.getElementById('heading')
let para1 = document.getElementById('box-1');
function run1(){
    if(para1.innerHTML==''){
        para1.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else {turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
}
para1.addEventListener("click",run1);




let para2 = document.getElementById('box-2');
function run2(){
    if(para2.innerHTML==''){
        para2.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
    
}
para2.addEventListener("click",run2);




let para3 = document.getElementById('box-3');
function run3(){
    if(para3.innerHTML==''){
        para3.innerHTML=turn;
        ans  = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
}
para3.addEventListener("click",run3);


let para4 = document.getElementById('box-4');
function run4(){
    if(para4.innerHTML==''){
        para4.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
}
para4.addEventListener("click",run4);




let para5 = document.getElementById('box-5');
function run5(){
    if(para5.innerHTML==''){
        para5.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
}
para5.addEventListener("click",run5);



let para6 = document.getElementById('box-6');
function run6(){
    if(para6.innerHTML==''){
        para6.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
}
para6.addEventListener("click",run6);



let para7 = document.getElementById('box-7');
function run7(){
    if(para7.innerHTML==''){
        para7.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
}
para7.addEventListener("click",run7);


let para8 = document.getElementById('box-8');
function run8(){
    if(para8.innerHTML==''){
        para8.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
}
para8.addEventListener("click",run8);



let para9 = document.getElementById('box-9');
function run9(){
    if(para9.innerHTML==''){
        para9.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        play_turn.innerHTML = "Turn of:-"+turn;
    }
    
}
para9.addEventListener("click",run9);

function wait(){

}
//Need to write the checkwin function
function checkwin(){
    girdpattern = [[para1, para2, para3], [para4, para5, para6], [para7, para8, para9], [para1, para4, para7], [para2, para5, para8], [para3, para6, para9], [para1, para5, para9], [para3, para5, para7] ]

    won= ''

    const n = girdpattern.length;

    //checkig the win condition for X 
    for (let i = 0; i <n; i++) {
        v0 = girdpattern[i][0].innerHTML;
        v1 = girdpattern[i][1].innerHTML;
        v2 = girdpattern[i][2].innerHTML;
        if (v0=='X' & v1=='X' & v2=='X') {
            document.getElementById("winlogo").innerHTML = "X WON";

            document.getElementById("winlogo").style.display = 'block';
            // console.log("X Won");
            return true
        }
    }

    //checking the win condition for 0

    for (let i = 0; i <n; i++) {
        v0 = girdpattern[i][0].innerHTML;
        v1 = girdpattern[i][1].innerHTML;
        v2 = girdpattern[i][2].innerHTML;
        if (v0=='0' & v1=='0' & v2=='0') {
            document.getElementById("winlogo").innerHTML = "0 WON";

            document.getElementById("winlogo").style.display = 'block';
            // console.log("0 Won");
            return true
        }
    }

    return false

}

function draw(){
    count = 0;
    li = [para1, para2, para3, para4, para5, para6, para7, para8, para9];

    for (let i = 0; i <9; i++){
        if (li[i].innerHTML==''){
            count++;
        }
    }

    if (count==0){
        document.getElementById("winlogo").innerHTML = "Match Draw, Please reset to play again";

        document.getElementById("winlogo").style.display = 'block';

    }

}



function toggleHide(){
    let btn = document.getElementById('reset');
    let para1 = document.getElementById('box-1');
    let para2 = document.getElementById('box-2');
    let para3 = document.getElementById('box-3');
    let para4 = document.getElementById('box-4');
    let para5 = document.getElementById('box-5');
    let para6 = document.getElementById('box-6');
    let para7 = document.getElementById('box-7');
    let para8 = document.getElementById('box-8');
    let para9 = document.getElementById('box-9');



    para1.innerHTML = '';
    para2.innerHTML = '';
    para3.innerHTML = '';
    para4.innerHTML = '';
    para5.innerHTML = '';
    para6.innerHTML = '';
    para7.innerHTML = '';
    para8.innerHTML = '';
    para9.innerHTML = '';

    // if(para.style.display != 'none'){
    // para.style.display = 'none';
    // }
    // else{
    // para.style.display = 'block';
    // }

    document.getElementById("winlogo").style.display = 'none';
}
