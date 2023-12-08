const story = [
    "La leyenda de los enamorados desafortunados hace mucho tiempo había dos aldeas separadas por un amplio río. En una de ellas vivía una hermosa y joven doncella del otro lado del río, en la aldea de enfrente vivía un apuesto joven. Quizá jamás se habrían conocido de no ser porque mucho tiempo atrás el ancestro de alguien decidió construir un puente, y Así pues sucedió que un día la doncella y el joven se conocieron y se enamoraron.",
    "Era un amor apasionado y la chica diariamente cruzaba el puente para ver a su amado. Ellos eran felices y sabían que tarde o temprano se casarían, pero un mal día azotó una violenta tormenta, el Puente Viejo y desgastado colapsó tras la embestida de los vientos. La crecida del río y de todo lo que arrastró el agua, había un lugar donde el río no era tan ancho y era posible nadar de una orilla a la otra, pero éste era también el lugar donde los cocodrilos solían vivir.",
    "Y esperar pacientemente a que alguna inocente niña se acercara demasiado a la orilla para caer en sus fauces. Y sucedió que tras la tormenta había aún más cocodrilos que nunca. Muchos días pasaron sin que los enamorados pudieran verse. Entonces, la doncella recordó al viejo que guardaba un pequeño bote en la orilla del río. A menudo él le sonreía cuando la veía cruzar el puente cada mañana. Él ayudaría, sin duda ella le pagaría para que él la transportará hacia su único y verdadero amor.",
    "Pero la doncella era pobre y el dinero escaseaba para todos por igual. Por muchos días, ella hizo ayuno para ahorrar tantas monedas como pudiera cuando juntó la cantidad suficiente, la doncella débil y hambrienta se aproximó al viejo y le pidió que la atravesara a la otra orilla a cambio del dinero que con tanto sacrificio había juntado. Pero el viejo le respondió que no quería su dinero, que era un hombre viejo y solitario y que era el tacto suave y cálido de una hermosa doncella. Loque Añoraba.",
    "Le dijo que la cruzaría del otro lado si se entregaba a él.",
    "La chica se negó y se alejó, enojada y triste por muchos días, no pudo dormir pensando por qué su amado no había cruzado el río. Él también podía haber buscado un bote como ella no es así o sería que él no la amaba tanto como ella, él o no, quizás él estaba enfermo o herido, eso debía ser sin duda, sí, él debe estar enfermo ahora, en verdad, debía ir a buscar.",
    "Llena de dudas, la muchacha buscó Consejo en su abuela.",
    "Le contó de su desdicha, de su amado de la oferta del viejo y le pidió ayuda, pero la abuela le dijo.",
    "Te compadezco mi niña, pues veo que en verdad está sufrir.",
    "La chica se negó y se alejó, enojada y triste por muchos días, no pudo dormir pensando por qué su amado no había cruzado el río. Él también podía haber buscado un bote como ella no es así o sería que él no la amaba tanto como ella, él o no, quizás él estaba enfermo o herido, eso debía ser sin duda, sí, él debe estar enfermo ahora, en verdad, debía ir a buscar.",
    "Pero en los asuntos del amor las decisiones deben ser solo tuyas, aún más triste, la doncella regresó con el viejo y se entregó a él. El viejo fue fiel a su parte del trato y la cruzó a la otra orilla sin pedirle dinero a casa.",
    "Después de encontrarse con su amado y tras hacer lo que los enamorados suelen hacer, la doncella le contó al joven que no estaba enfermo en lo absoluto lo que había pasado con el viejo.",
    "En aquellos días, los hombres jóvenes eran orgullosos y presumían de saber distinguir el bien del mal, así que el joven se enojó mucho, no podía perdonarla y ya no la quería a su lado, así que la repudió, la doncella se alejó con el corazón destrozado.",
    "Al llegar a la orilla, se lanzó sin pensarlo al río para cruzarlo a nado. En pleno río encontró un cocodrilo, el cual hizo lo que los cocodrilos suelen hacer y aquí termina la historia.",
];

const questions = [
    '¿Cuál fue la razón principal por la que la doncella se acercó al viejo?',
    '¿Por qué el joven repudió a la doncella al enterarse de lo sucedido?',
    '¿Qué llevó a la doncella a finalmente aceptar la propuesta del viejo?',
    '¿Qué alternativa tenía el joven para cruzar al otro lado del río y reunirse con la doncella?',
    '¿Por qué la doncella se sintió culpable al reencontrarse con su amado?',
    '¿Cómo describirías la relación entre la doncella y el viejo?',
    '¿Qué piensas que era más importante para la doncella en su relación con el joven?',
    '¿Cuál crees que fue la motivación principal del joven en su reacción hacia la doncella?',
    '¿Qué crees que influyó más en la decisión final de la doncella?',
    '¿Cuál crees que fue la actitud predominante del joven hacia la doncella después de la revelación?',
    '¿Qué pensamiento crees que predominaba en la mente de la doncella antes de tomar su decisión final?',
    '¿Qué opinas que era más importante para el joven en la relación?',
    '¿Cuál crees que fue la mayor debilidad en la relación entre la doncella y el joven?',
    '¿Qué crees que prevaleció más en la mente del joven tras la revelación?',
    '¿Cuál de las siguientes palabras describe mejor la actitud de la doncella hacia su decisión final?',
    '¿Qué crees que motivó más al joven a buscar una solución para cruzar el río?',
    '¿Cuál crees que fue la reacción emocional predominante de la doncella tras el rechazo del joven?',
    '¿Qué piensas que predominó más en la mente del joven al tomar su decisión sobre cómo cruzar el río?',
    '¿Qué crees que fue lo más influyente en la determinación final de la doncella?',
    '¿Cuál fue la emoción predominante en el joven al enterarse de la verdad?'    
];

let storyIndex = 0;

const storyText = document.getElementById('story-text');
const questionsForm = document.getElementById('questions');
const conclusionDiv = document.getElementById('conclusion');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const questionBlock = document.getElementById('question-block');


questionsForm.addEventListener('submit', processForm);

nextButton.addEventListener('click', () => {
    if (storyIndex < story.length - 1) {
        storyIndex++;
        displayContent();
    }
});

prevButton.addEventListener('click', () => {
    if (storyIndex > 0) {
        storyIndex--;
        displayContent();
    }
});

function displayContent() {

    if (storyIndex < story.length) {
        storyText.textContent = story[storyIndex];
        // questionsForm.style.display = 'none';
        // conclusionDiv.style.display = 'none';
        // const questionBlock = document.getElementById('question-block');

        if (storyIndex === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        if (storyIndex == story.length - 1) {
            nextButton.style.display = 'none';
            storyText.style.display = 'none';
            questionBlock.style.display = 'block'; 
            prevButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
            storyText.style.display = '';
            questionBlock.style.display = 'none'; 
        }
    }
}




// Obtener referencias a los botones y bloques de preguntas
const btnNext1_4 = document.getElementById('next-questions-btn-1-4');
const btnNext5_8 = document.getElementById('next-questions-btn-5-8');
const btnNext9_12 = document.getElementById('next-questions-btn-9-12');
const btnNext13_16 = document.getElementById('next-questions-btn-13-16');

const questions1_4 = document.getElementById('questions-1-4');
const questions5_8 = document.getElementById('questions-5-8');
const questions9_12 = document.getElementById('questions-9-12');
const questions13_16 = document.getElementById('questions-13-16');
const questions17_20 = document.getElementById('questions-17-20');

// Mostrar el bloque de preguntas 5-8 cuando se hace clic en el botón
btnNext1_4.addEventListener('click', () => {
    event.preventDefault();
    questions1_4.style.display = 'none';
    questions5_8.style.display = 'block';
});

// Mostrar el bloque de preguntas 9-12 cuando se hace clic en el botón
btnNext5_8.addEventListener('click', () => {
    event.preventDefault();
    questions5_8.style.display = 'none';
    questions9_12.style.display = 'block';
});

// Mostrar el bloque de preguntas 13-16 cuando se hace clic en el botón
btnNext9_12.addEventListener('click', () => {
    event.preventDefault();
    questions9_12.style.display = 'none';
    questions13_16.style.display = 'block';
});

// Mostrar el bloque de preguntas 17-20 cuando se hace clic en el botón
btnNext13_16.addEventListener('click', () => {
    event.preventDefault();
    questions13_16.style.display = 'none';
    questions17_20.style.display = 'block';
});

// Función para generar las conclusiones basadas en las respuestas
function generateConclusions(answers) {
    const conclusions = [];

    // Conclusiones basadas en las respuestas a las preguntas
    conclusions.push(questionOneConclusion(answers[1]));
    conclusions.push(questionTwoConclusion(answers[2]));
    conclusions.push(questionThreeConclusion(answers[3]));
    conclusions.push(questionFourConclusion(answers[4]));
    conclusions.push(questionFiveConclusion(answers[5]));
    conclusions.push(questionSixConclusion(answers[6]));
    conclusions.push(questionSevenConclusion(answers[7]));
    conclusions.push(questionEightConclusion(answers[8]));
    conclusions.push(questionNineConclusion(answers[9]));
    conclusions.push(questionTenConclusion(answers[10]));
    conclusions.push(questionElevenConclusion(answers[11]));
    conclusions.push(questionTwelveConclusion(answers[12]));
    conclusions.push(questionThirteenConclusion(answers[13]));
    conclusions.push(questionFourteenConclusion(answers[14]));
    conclusions.push(questionFifteenConclusion(answers[15]));
    conclusions.push(questionSixteenConclusion(answers[16]));
    conclusions.push(questionSeventeenConclusion(answers[17]));
    conclusions.push(questionEighteenConclusion(answers[18]));
    conclusions.push(questionNineteenConclusion(answers[19]));
    conclusions.push(questionTwentyConclusion(answers[20]));

    return conclusions;
}

function questionOneConclusion(answer) {

    if (answer === 'a') {
        return 'La doncella buscaba un servicio y estaba dispuesta a pagar por él, mostrando un enfoque transaccional en su interacción con el viejo.';
    } else if (answer === 'b') {
        return 'Implica que la doncella se acercó al viejo por compasión o empatía hacia su soledad, buscando ofrecer compañía al anciano.';
    } else if (answer === 'c') {
        return 'Sugiere que la doncella buscaba orientación o asesoramiento sobre cómo atravesar el río, mostrando una intención más neutral en su interacción con el viejo.';
    } else {
        return '';
    }
}

function questionTwoConclusion(answer) {

    if (answer === 'a') {
        return 'Implica que el joven percibió falta de amor verdadero por parte de la doncella, lo que desencadenó su rechazo.';
    } else if (answer === 'b') {
        return 'Sugiere que el joven se sintió engañado por la doncella al enterarse de lo sucedido con el viejo, generando su repudio.';
    } else if (answer === 'c') {
        return 'Implica que el joven consideró la acción de la doncella como imprudente y peligrosa, lo que llevó a su repudio.';
    } else {
        return '';
    }
}

function questionThreeConclusion(answer) {

    if (answer === 'a') {
        return 'Indica que la necesidad urgente de reunirse con su amado llevó a la doncella a aceptar la propuesta del viejo.';
    } else if (answer === 'b') {
        return 'Sugiere que la doncella confiaba en que el viejo la ayudaría de forma desinteresada, lo que motivó su decisión.';
    } else if (answer === 'c') {
        return 'Implica que la influencia de la abuela sobre la doncella fue determinante para aceptar la propuesta del viejo.';
    } else {
        return '';
    }
}

function questionFourConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que el joven tenía una opción similar a la de la doncella para cruzar el río, pero no tomó esa acción.';
    } else if (answer === 'b') {
        return 'Implica una solución más a largo plazo y costosa, posiblemente fuera de las posibilidades inmediatas del joven.';
    } else if (answer === 'c') {
        return 'Indica una opción más riesgosa y físicamente demandante que el joven podría haber considerado, pero no eligió.';
    } else {
        return '';
    }
}

function questionFiveConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la duda sobre los sentimientos del joven afectó la culpa que sintió la doncella.';
    } else if (answer === 'b') {
        return 'Indica remordimiento por no haber buscado activamente al joven antes de la situación con el viejo.';
    } else if (answer === 'c') {
        return 'Sugiere que la falta de transparencia con su amado generó culpa en la doncella.';
    } else {
        return '';
    }
}

function questionSixConclusion(answer) {

    if (answer === 'a') {
        return 'Implica un intercambio o transacción entre la doncella y el viejo, donde él exigía algo a cambio de su ayuda.';
    } else if (answer === 'b') {
        return 'Sugiere que la relación se basaba en la compasión de la doncella hacia el viejo, buscando ayudarlo sin un acuerdo estricto.';
    } else if (answer === 'c') {
        return 'Indica que la doncella pudo sentirse presionada o forzada por el viejo a tomar ciertas decisiones.';
    } else {
        return '';
    }
}

function questionSevenConclusion(answer) {

    if (answer === 'a') {
        return 'Indica que lo más importante para la doncella era la conexión emocional con su amado, siendo este un factor clave en su relación.';
    } else if (answer === 'b') {
        return 'Sugiere que la doncella valoraba la lealtad y la confianza en su relación con el joven, considerándolas aspectos fundamentales.';
    } else if (answer === 'c') {
        return 'Implica que para la doncella, el sacrificio en nombre del amor era la prioridad más importante en su relación con el joven.';
    } else {
        return '';
    }
}

function questionEightConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la motivación del joven era protegerse a sí mismo y asegurar su bienestar emocional.';
    } else if (answer === 'b') {
        return 'Indica que el orgullo y la dignidad del joven influyeron en su reacción hacia la doncella al sentirse traicionado.';
    } else if (answer === 'c') {
        return 'Sugiere que la empatía y la comprensión eran fundamentales en la forma en que el joven reaccionaba hacia la doncella.';
    } else {
        return '';
    }
}

function questionNineConclusion(answer) {

    if (answer === 'a') {
        return 'Indica que factores externos o la presión del entorno tuvieron un papel determinante en la decisión final de la doncella.';
    } else if (answer === 'b') {
        return 'Sugiere que el amor hacia el joven fue el principal motor que impulsó la decisión final de la doncella.';
    } else if (answer === 'c') {
        return 'Implica que la necesidad inmediata de cruzar el río fue lo más relevante en la determinación final de la doncella.';
    } else {
        return '';
    }
}

function questionTenConclusion(answer) {

    if (answer === 'a') {
        return 'Implica que la desconfianza fue el sentimiento principal del joven hacia la doncella después de conocer la verdad.';
    } else if (answer === 'b') {
        return 'Sugiere que el enojo fue la reacción predominante del joven hacia la doncella tras la revelación de lo ocurrido.';
    } else if (answer === 'c') {
        return 'Indica que la compasión fue la actitud principal del joven hacia la doncella después de enterarse de la verdad.';
    } else {
        return '';
    }
}

function questionElevenConclusion(answer) {

    if (answer === 'a') {
        return 'Implica que la lealtad hacia el viejo pudo haber sido un factor importante en la mente de la doncella antes de tomar su decisión final.';
    } else if (answer === 'b') {
        return 'Sugiere que la preocupación por el bienestar del joven era el principal pensamiento en la mente de la doncella.';
    } else if (answer === 'c') {
        return 'Indica que la necesidad inmediata de cruzar el río podría haber sido el pensamiento predominante en la mente de la doncella.';
    } else {
        return '';
    }
}

function questionTwelveConclusion(answer) {

    if (answer === 'a') {
        return 'Implica que la transparencia era una cualidad fundamental para el joven en su relación con la doncella.';
    } else if (answer === 'b') {
        return 'Sugiere que la estabilidad emocional y la confianza eran aspectos esenciales para el joven en su relación.';
    } else if (answer === 'c') {
        return 'Indica que la habilidad para resolver desafíos o situaciones difíciles era lo más importante para el joven en su relación.';
    } else {
        return '';
    }
}

function questionThirteenConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la falta de diálogo y expresión clara de sentimientos fue la principal debilidad en la relación.';
    } else if (answer === 'b') {
        return 'Indica que la falta de confianza entre ambos fue el mayor obstáculo en su relación.';
    } else if (answer === 'c') {
        return 'Implica que factores externos o situacionales fueron la mayor debilidad en la relación, más que problemas internos entre ellos.';
    } else {
        return '';
    }
}

function questionFourteenConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la sensación de haber sido traicionado fue lo que más predominó en la mente del joven tras la revelación.';
    } else if (answer === 'b') {
        return 'Implica que la percepción de haber estado en peligro o en una situación arriesgada fue lo que más influyó en la mente del joven.';
    } else if (answer === 'c') {
        return 'Indica que el anhelo de comprender lo sucedido fue lo que más predominó en la mente del joven tras la revelación.';
    } else {
        return '';
    }
}

function questionFifteenConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la doncella sentía un profundo arrepentimiento o culpa por su decisión final.';
    } else if (answer === 'b') {
        return 'Implica que la doncella buscaba explicar o validar su decisión final ante sí misma o los demás.';
    } else if (answer === 'c') {
        return 'Indica que la doncella aceptó su decisión final como inevitable, sin intentar cambiarla.';
    } else {
        return '';
    }
}

function questionSixteenConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la necesidad inmediata de reunirse con la doncella fue el principal motor que impulsó al joven a buscar una solución.';
    } else if (answer === 'b') {
        return 'Implica que el deseo de mostrar valentía o habilidad para resolver problemas fue lo que motivó al joven.';
    } else if (answer === 'c') {
        return 'Indica que la preocupación por resolver la situación del puente dañado fue el principal motivador para el joven.';
    } else {
        return '';
    }
}

function questionSeventeenConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la desesperación fue la emoción predominante en la doncella tras ser rechazada por el joven.';
    } else if (answer === 'b') {
        return 'Indica que el dolor emocional fue la reacción emocional predominante en la doncella tras ser rechazada.';
    } else if (answer === 'c') {
        return 'Implica que la determinación por seguir adelante a pesar del rechazo fue lo que predominó en la doncella.';
    } else {
        return '';
    }
}

function questionEighteenConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la preocupación por su seguridad fue lo que más influyó en la mente del joven al decidir cómo cruzar el río.';
    } else if (answer === 'b') {
        return 'Indica que la necesidad de actuar con prontitud o eficacia fue lo que predominó en la mente del joven.';
    } else if (answer === 'c') {
        return 'Implica que la evaluación del riesgo involucrado fue lo que más influyó en la mente del joven al tomar su decisión.';
    } else {
        return '';
    }
}

function questionNineteenConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la influencia ejercida por sus familiares fue lo más influyente en la determinación final de la doncella.';
    } else if (answer === 'b') {
        return 'Indica que el deseo profundo de reunirse con su amado fue lo más influyente en la determinación final de la doncella.';
    } else if (answer === 'c') {
        return 'Implica que la situación o el trato con el viejo fue lo que más influyó en la determinación final de la doncella.';
    } else {
        return '';
    }
}

function questionTwentyConclusion(answer) {

    if (answer === 'a') {
        return 'Sugiere que la ira fue la emoción predominante en el joven al descubrir la verdad.';
    } else if (answer === 'b') {
        return 'Indica que la desilusión fue la emoción predominante en el joven tras conocer la verdad.';
    } else if (answer === 'c') {
        return 'Implica que la confusión fue la emoción predominante en el joven al enterarse de la verdad.';
    } else {
        return '';
    }

}

function processForm(event) {
    event.preventDefault();

    const form = event.target;
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        const answer = form.elements[`q${i + 1}`].value;
        answers.push(answer);
    }

    const conclusions = generateConclusions(answers);
    displayConclusions(conclusions);
}


function displayConclusions(conclusions) {
    const conclusionDiv = document.getElementById('conclusion');
    conclusionDiv.style.display = 'block';
    const conclusionContent = conclusions.map((conclusion, index) => {
        return `<p><strong>Pregunta ${index + 1}:</strong> ${conclusion}</p>`;
    });
    conclusionDiv.innerHTML = conclusionContent.join('');
}


window.addEventListener('load', () => {
    displayContent();
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questions');
    form.reset();
});