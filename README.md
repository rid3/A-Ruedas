>Project's name:

A Ruedas


>Description:

A Ruedas consist in helping Felicitos, a Drag King who loves to skate, arrive at his gig. Felicitos has to overcame the shame monster "Ya Meless", because sometimes, getting to the stage can be more difficult than it seems.  



>MVP

Four screens:
- Splash screen:
The game name, brief introduction and instructions on how to play. Image of felicitos and the monster. Button to start.
Footer: credits.
- The game screen:
Background Image. Image of Felicitos on his skate, rolling across the field while Ya Meless tries to distroy him. Meanwhile graving the helmets he founds on the way. Canvas. 
- You won screen:
Image of Felicitos on the stage. Link to Felicitos IG "Go and meet Felicitos". Button to splash screen.
footer : credits.
- You loose screen:
Image of Felicitos sad. Button to try again.
Footer: credits. 


>Backlog // Bonus

-Score (a medida que va agarrando Helmets).
-Música de fondo en todos los screens.
-En splash screen que quien juega pueda poner su nombre, y al final cuando gana pueda salir el mensaje : "Gracias (nombre)".
-Cuando esté por terminar aparezca una puerta (a lo entrada al lugar con el escenario), cuando llega a ella para el juego y gana. 
-Agregar otro jugador, Armando A. Bruno, que en vez de esquivar cosas, lance navajas para vencer a Ya Meless. Hay diferentes alturas, debe llegar a lo más alto y agarrar el casco.   

>Data Structure

- Class Felicitos:
Felicitos png. and properties. Posición de inicio.

- Method:
Movements : front, left, right, jump. 


- Class Ya Meless:
Ya Meless png. and properties. Posición de inicio.
- Method:
Movements : front (desde lado contrario a Felicitos)
Frecuencia en la que aparece.  

- Class Helmets:
Helmets png. and properties.  
- Method:
Lugares en los que aparece.
Frecuencia en la que aparece.

Functions:
- To start game
- Timer to end game
- Colision Ya Meless
- Colision Helmets 



>States and Transitions
Definition of the different states and their transition (transition functions)

- SplashScreen
- GameScreen
- GameoverScreen
- WinScreen


> Where to start?!

Create html with basic structure. Link css and js folders. Create a js folder for each class, one for de game, and de main one with the start and finish functions calls(?).
Create canvas in second screen. Link canvas to js folder. 
(Creat start and end functions.) acá?
Put backgroudn image to canvas. Start by making Felicitos move. Continue with Ya Meless, make Colision and check if it works. Make Helmets, make Colision, check if it works. 
(Creat start and end functions.) o acá?
Create splash screen, check if button to start works. 
Create win screen, check if button incio and link works.
Create loose screen, check if button restart works. 


>Trello 
https://trello.com/rid310/home

