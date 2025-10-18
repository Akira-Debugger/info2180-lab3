document.addEventListener("DOMContentLoaded", function() {
   let list_div = document.querySelectorAll("#board div");
   const status = document.getElementById('status');
   let new_game=document.querySelector('.btn');
    for (var i = 0; i < list_div.length; i++) {
         list_div[i].classList.add('square');
        }
    
    let who_won =[];
    let player_choice ='O';
    list_div.forEach((square,index) =>{
            square.addEventListener('mouseover',MouseOver);
            square.addEventListener('mouseout',MouseOut);
          function MouseOver(){
                square.classList.add('hover');

            }

             function MouseOut(){
                square.classList.remove('hover');

            }
            
            square.addEventListener('click',function(){
               if (square.textContent !== '') return;
               if (player_choice=='O') {
                square.classList.add('O');
                square.textContent = 'O';
                who_won[index]=player_choice;
                player_choice='X';
               } else if(player_choice=='X') {
                  square.classList.add('X');
                  square.textContent = 'X';
                  who_won[index]=player_choice;
                  player_choice='O';
               }
               if (who_won[0] === 'O' && who_won[1] === 'O' && who_won[2] === 'O') {
                   status.classList.add('you-won');
                   status.textContent="Congratulations! O is the Winner!";
                } else if (who_won[0] === 'X' && who_won[1] === 'X' && who_won[2] === 'X') {
                  status.classList.add('you-won');
                  status.textContent="Congratulations! X is the Winner!";
                }

               if (who_won[3] === 'O' && who_won[4] === 'O' && who_won[5] === 'O') {
                   status.classList.add('you-won');
                  status.textContent="Congratulations! O is the Winner!";
                } else if (who_won[3] === 'X' && who_won[4] === 'X' && who_won[5] === 'X') {
                   status.classList.add('you-won');
                   status.textContent="Congratulations! X is the Winner!";
                }

               if (who_won[6] === 'O' && who_won[7] === 'O' && who_won[8] === 'O') {
                status.classList.add('you-won');
                status.textContent="Congratulations! O is the Winner!";
                } else if (who_won[6] === 'X' && who_won[7] === 'X' && who_won[8] === 'X') {
                   status.classList.add('you-won');
                  status.textContent="Congratulations! X is the Winner!";
               }

            });

         });


   new_game.addEventListener('click',function(){
            status.classList.remove('you-won');
            status.textContent="Move your mouse over a square and click to play an X or an O.";
            list_div.forEach((square,index) =>{
                  if(square.textContent=='O'){
                     status.classList.remove('O');
                     square.textContent='';
                  }else if(square.textContent=='X'){
                      status.classList.remove('X');
                     square.textContent='';
                  }
            })
           player_choice='O';  
           who_won=[];
   });
});
 





