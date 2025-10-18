//My tic-tac-toe jss 
document.addEventListener("DOMContentLoaded", function() {
    var list_div = document.querySelectorAll("#board div");
   const status = document.getElementById('status');
    for (var i = 0; i < list_div.length; i++) {
         list_div[i].classList.add('square');
        }
    
    const who_won =[];
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
               if (player_choice=='O') {
                square.classList.add('O');
                square.textContent = 'O';
                who_won[index]=player_choice;
                player_choice='X';
               } else {
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


});
 





