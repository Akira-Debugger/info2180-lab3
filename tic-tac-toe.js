//My tic-tac-toe jss 
document.addEventListener("DOMContentLoaded", function() {
    var list_div = document.querySelectorAll("#board div");
    for (var i = 0; i < list_div.length; i++) {
         list_div[i].classList.add('square');
        }
    
    const who_won =[];
    let player_choice ='O';
    list_div.forEach(square =>{
            square.addEventListener('mouseover',MouseOver );
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
                player_choice='X';
               } else {
                  square.classList.add('X');
                  square.textContent = 'X';
                  player_choice='O';
               }

            });
         });
      




    });
 





