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
    '¿A quién hacemos responsable?',
    'Ordene los personajes con mayor responsabilidad a menor.',
    'Escriba los cuatro menos responsables.'
];

let storyIndex = 0;

const storyText = document.getElementById('story-text');
const questionsForm = document.getElementById('questions');
const conclusionDiv = document.getElementById('conclusion');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

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
    console.log(story[13])
    if (storyIndex < story.length) {
        storyText.textContent = story[storyIndex];
        questionsForm.style.display = 'none';
        conclusionDiv.style.display = 'none';

        if (storyIndex === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        if (storyIndex === story.length - 1) {
            nextButton.style.display = 'none';
            storyText.style.display = 'none';
            questionsForm.style.display = 'block';
            conclusionDiv.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            storyText.style.display = '';
        }
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

    const conclusion = generateConclusion(answers);
    displayConclusion(conclusion);
}

function processForm(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const form = event.target;
    const answers = [];
    for (let i = 0; i < 3; i++) {
        const answer = form.elements[`q${i + 1}`].value;
        answers.push(answer);
    }

    // Generar conclusiones basadas en las respuestas
    const conclusions = generateConclusions(answers);
    displayConclusions(conclusions);
}

// Función para generar las conclusiones basadas en las respuestas
function generateConclusions(answers) {
    const conclusions = [];

    // Conclusiones basadas en las respuestas a las preguntas
    conclusions.push(determinacionConclusion(answers[0]));
    conclusions.push(decisionImpactanteConclusion(answers[1]));
    conclusions.push(responsabilidadDesenlaceConclusion(answers[2]));

    return conclusions;
}

function processForm(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const form = event.target;
    const answers = [];
    for (let i = 0; i < 3; i++) {
        const answer = form.elements[`q${i + 1}`].value;
        answers.push(answer);
    }

    // Generar una conclusión general basada en las respuestas
    const conclusion = generateConclusion(answers);
    displayConclusion(conclusion);
}

// Función para generar una conclusión general basada en las respuestas
function generateConclusion(answers) {
    let conclusion = '';

    // Lógica para generar una conclusión general basada en las respuestas seleccionadas
    if (answers.includes('La doncella') && answers.includes('El joven') && answers.includes('El viejo')) {
        conclusion = 'La historia destaca la participación y responsabilidad de múltiples personajes en su desenlace.';
    } else if (answers.includes('La doncella') && answers.includes('El joven')) {
        conclusion = 'La historia resalta la interacción entre la doncella y el joven como elementos fundamentales.';
    } else if (answers.includes('La doncella') && answers.includes('El viejo')) {
        conclusion = 'La historia se centra en el desafío enfrentado por la doncella ante el viejo.';
    } else if (answers.includes('El joven') && answers.includes('El viejo')) {
        conclusion = 'El joven y el viejo tuvieron un impacto significativo en el desarrollo de la historia.';
    } else {
        conclusion = 'La combinación de personajes seleccionada ofrece una perspectiva única sobre la historia.';
    }

    return conclusion;
}

// Función para mostrar la conclusión en el DOM
function displayConclusion(conclusion) {
    const conclusionDiv = document.getElementById('conclusion');
    conclusionDiv.innerHTML = `<h3>Conclusión General:</h3><p class="conclusion">${conclusion}</p>`;
}

// Agregar evento al formulario para procesar respuestas
const answersForm = document.getElementById('answers-form');
answersForm.addEventListener('submit', processForm);

window.addEventListener('load', () => {
    displayContent();
});