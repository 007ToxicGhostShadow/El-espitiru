// Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

alert('Hola!... "cumpleañera=tíaVero"... hmm, que nombre tan raro, bueno Soy el espitiru de la programación');
alert('Me puedes llamar 127.0.0.1:5500 como dice aquí arriba ^ ... o como quieras, me da igual...');
alert('En honor de tu cumple...');
alert('Vamos a jugar a un pequeño juego (que tambien es tu regalo de cumple me dicen) para que te diviertas un rato');
alert('jejeje...                  "risa maquiavelica"');
alert(`Tienes ${maximosIntentos} intentos (vidas) para adivinar el número secreto entre 1 y ${numeroMaximoPosible}`);
alert('Por cierto, un tal niño llamado "JR" me ayudo con el codigo de este juego así que si algo esta mal, la culpa es de él');
alert('Le manda saludos a "Sofi" y a "Mickey" quien sea que sean ellos');
alert('Y es posible que en un remoto caso muy extravagantemente raro e imposible de que llegaras a perder... tu alma sera mia... pero no te preocupes, no pasará... esperemos : )');
alert('entonces... ¿Lista?');// Bucle para adivinar el número
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Indícame un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condición
        alert(`Felicidades!... Por ahora!... no estas a salvo..., el número secreto es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('JA! perdiste una vida... pero te voy a dar una pista: el número secreto es menor. No sientas presión :)');
        } else {
            alert('JA! JA! JA! perdiste una vida... pero te voy a dar una pista: el número secreto es mayor. No sientas presión :)');
        }
        // Incrementamos el contador cuando no acierta
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`jeje          jejeje          JA! JA! JA!            Tus ${maximosIntentos} vidas se acabaron! AHORA TU ALMA ES MIA!!!`);
            alert('let Jr = Host; talk unlocked!');  
            alert('alert(espitiru! NO! (╬▔皿▔)╯  );');
            alert('alert(epitiru malo! (* ￣︿￣) no puedes "nomas llevarte" su alma!!! ╚(•⌂•)╝ );');
            alert(' "sonidos de golpiza" ');
            alert('alert(Si lo vuleves a hacer te va a ir peor...  es mi tía! como te atreves!);');
            alert('No me importa! "Jr"!');
            alert('alert(QUE DIJISTE!!! ᕦ(ò_óˇ)ᕤ);');
            alert('NADA! NADA!...  no hagas nada malo...');
            alert('alert(NO lo vuelvas a hacer! entendite? mi propia computadora no se va a revelar contra mi!);');
            alert('alert(  (* ￣︿￣)  Bye tía! feliz cumple!  \(￣︶￣*\));');
            alert('variable(Jr) = null; host left;');
            alert('...');
            alert('Nada mas porque ese tal Jr me dijo que no hiciera nada malo... te salvaste por esta vez');
            break;
        }
    }
}
alert('Para volver a jugar...  borra mi memoria...   osea recarga la página ;)');