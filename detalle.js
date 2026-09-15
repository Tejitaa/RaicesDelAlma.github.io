// Base de datos de todos los servicios, talleres y productos
const baseDeDatos = {
    // --- SESIONES ---
    "biodecodificacion": {
        titulo: "Biodecodificación",
        duracion: "60 a 90 minutos",
        tipo: "Online o Presencial",
        descripcion: "<p>La Biodecodificación es una mirada que busca comprender la relación entre nuestras experiencias emocionales, nuestra historia personal y familiar, y la manera en que determinadas situaciones pueden expresarse en nuestra vida y en nuestro cuerpo. A través de este acompañamiento se exploran conflictos, emociones, creencias, mandatos familiares y experiencias que pudieron haber quedado sin elaborar, con el propósito de ampliar la comprensión sobre aquello que estamos viviendo.</p><p>¿Para qué puede servir?</p> <p>Para reconocer patrones que se repiten, comprender el origen emocional que una persona atribuye a determinadas situaciones, revisar creencias y mandatos, y favorecer un proceso de autoconocimiento y transformación.</p>"
    },
    "canalizacion": {
        titulo: "Canalización",
        duracion: "60 a 90 minutos ",
        tipo: "Online o Presencial",
        descripcion: "<p>La Canalización es un espacio de conexión intuitiva y espiritual en el que se busca recibir e interpretar información, mensajes o percepciones vinculadas con el proceso que está atravesando una persona. Es una experiencia orientada a la introspección y a la conexión con la propia espiritualidad, desde una mirada amorosa y respetuosa.</p><p>¿Para qué puede servir?</p> <p>Para encontrar nuevas perspectivas, conectar con emociones y aspectos internos, recibir mensajes simbólicos y acompañar momentos de búsqueda, cambios o procesos personales.</p>"
    },
    "mediumnidad": {
        titulo: "Mediumnidad",
        duracion: "60 a 90 minutos",
        tipo: "Online o Presencial",
        descripcion: "<p>La Mediumidad es una práctica espiritual en la que la persona que ejerce como médium interpreta percepciones o experiencias que entiende como una posible comunicación con personas fallecidas o con el plano espiritual. En Raíces del Alma, este espacio se aborda desde el respeto, la sensibilidad y el amor, especialmente cuando existe una necesidad de conexión, comprensión o elaboración del vínculo con alguien que ya no está físicamente.</p><p>¿Para qué puede servir?</p> <p>Puede ofrecer un espacio de escucha, conexión espiritual y significado para quienes encuentran valor en este tipo de experiencia, especialmente durante procesos de duelo.</p>"
    },
    "flores-bach": {
        titulo: "Terapia Floral - Flores de Bach",
        duracion: "45 a 60 minutos",
        tipo: "Online o Presencial",
        descripcion: "<p>Las Flores de Bach son un sistema de esencias florales utilizado como herramienta complementaria para acompañar diferentes estados emocionales. Cada esencia se relaciona tradicionalmente con determinados estados anímicos, como miedo, incertidumbre, tristeza, preocupación, dificultad para poner límites o sensación de desánimo. El objetivo es acompañar a la persona desde una mirada integral, ayudándola a observar y trabajar su mundo emocional.</p> <p>¿Para qué pueden servir?</p> <p>Como acompañamiento de procesos emocionales y de autoconocimiento, favoreciendo espacios de calma, equilibrio y conexión con uno mismo.</p>"
    },
    "tarot": {
        titulo: "Tarot (Evolutivo y Terapéutico)",
        duracion: "45 a 60 minutos",
        tipo: "Online o Presencial",
        descripcion: "<p>El Tarot es un lenguaje simbólico que puede utilizarse como herramienta de introspección, orientación y autoconocimiento. Sus arquetipos y símbolos nos permiten observar una situación desde diferentes perspectivas y conectar con aspectos de nosotros mismos que quizás no estamos pudiendo reconocer. En una consulta, las cartas no buscan determinar un destino inamovible. Son una invitación a mirar, comprender y tomar conciencia. </p><p>¿Para qué puede servir? </p><p>Para obtener claridad frente a situaciones personales, explorar emociones, reconocer posibilidades, identificar patrones y acompañar procesos de toma de decisiones desde una mirada reflexiva y espiritual.</p>"
    },

    // --- TALLERES ---
    "taller-economia": {
        titulo: "Taller de Economía y Abundancia",
        duracion: "Taller Grupal (4-6 personas)",
        tipo: "Online o Presencial",
        descripcion: "<p>Un espacio para transformar la manera en que nos relacionamos con el dinero, comprendiendo las emociones, creencias y mandatos que pueden estar condicionando nuestra prosperidad.<P>Temas que se trabajan:</p> <ul> <li>Creencias y mandatos familiares relacionados con el dinero.</li> <li>Heridas de la infancia y su vínculo con la economía.</li> <li>Culpa por tener o ganar dinero.</li> <li>Patrones de escasez y limitación.</li> <li>Herramientas para atraer abundancia y prosperidad.</li> <li>Creencias de escasez y merecimiento.</li> <li>Lealtades familiares.</li> <li> Bloqueos emocionales relacionados con la abundancia.</li> <li> Reconstrucción de una relación más consciente con el dinero.</li> <li>Ejercicios de transformación y reprogramación.</li> </ul>"
    },
    "taller-duelo": {
        titulo: "Taller de Duelo",
        duracion: "Taller Grupal (4-6 personas)",
        tipo: "Online o Presencial",
        descripcion: "<p>Un espacio para transitar el duelo desde el amor, permitiendo reconocer el dolor, expresar aquello que necesita ser dicho y encontrar una nueva manera de vincularnos con aquello que hemos perdido.</p> <p>Temas que se trabajan:</p> <ul> <li>Comprender qué es el duelo.</li> <li>Las diferentes etapas y manifestaciones del proceso.</li> <li>Emociones que aparecen durante el duelo.</li> <li>Culpa, enojo, tristeza y miedo.</li> <li>Lo que quedó pendiente de decir o expresar.</li> <li>El vínculo con quien ya no está.</li> <li>Rituales y herramientas para acompañar el proceso.</li> <li>Dar un nuevo significado a la pérdida.</li> <li>Aprender a recordar desde el amor.</li> <li>Reconstrucción de la vida después de la pérdida.</li> </ul>"
    },
    "taller-sombras": {
        titulo: "Taller de Sombras",
        duracion: "Taller Grupal (4-6 personas)",
        tipo: "Online o Presencial",
        descripcion: "<p> Un viaje de autoconocimiento hacia aquellas partes de nosotros mismos que hemos aprendido a esconder, negar o rechazar. La propuesta es mirar nuestra sombra con conciencia y amor para recuperar recursos y partes de nuestra propia esencia.<p>Temas que se trabajan:</p> <ul> <li>Qué es la sombra.</li> <li>Cómo se construye nuestra sombra.</li> <li>Emociones y aspectos de nosotros mismos que rechazamos.</li> <li>Proyecciones y aquello que nos molesta de los demás.</li> <li>Heridas emocionales.</li> <li>Heridas emocionales.</li> <li>Heridas emocionales.</li> <li>Miedos, enojo, culpa y vergüenza.</li> <li>Reconocimiento de nuestra propia oscuridad.</li> <li>Integración de la sombra.</li> <li>Recuperación del poder personal.</li> <li>Recuperación del poder personal.</li> </ul> "
    },
    "taller-madre": {
        titulo: "Taller de la Madre y Transgeneracional",
        duracion: "Taller Grupal (4-6 personas)",
        tipo: "Online o Presencial",
        descripcion: "<p>Un espacio para que la mujer pueda reencontrarse consigo misma después de convertirse en madre. Una invitación a integrar la maternidad sin perder de vista a la mujer que existe detrás del rol de mamá.<p>Temas que se trabajan:</p> <ul> <li>La transformación de la identidad al convertirse en madre.</li> <li>¿Quién era antes de ser mamá y quién soy ahora?</li> <li>Mandatos y expectativas sobre la maternidad</li> <li>La madre que imaginé y la madre que puedo ser.</li> <li>Culpa y exigencia materna.</li> <li>El permiso para pedir, recibir y poner límites.</li> <li>El vínculo con la propia madre y su influencia en la maternidad.</li> <li>La mujer detrás de la madre.</li> <li>Deseos, proyectos y necesidades personales.</li> <li>Recuperar espacios propios.</li> <li>Maternar desde el amor y no desde la exigencia.</li> <li>Ejercicios de reconexión con la propia identidad.</li> </ul>"
    },
    // --- PRODUCTOS ---
    "sales-del-alma": {
        titulo: "Sales del Alma",
        duracion: "Producto Holístico",
        tipo: "Uso Personal / Baño de Descarga",
        descripcion: "<p>Sales de baño intencionadas con hierbas sagradas y aceites esenciales.</p><p>Ideales para baños de inmersión o pediluvios de limpieza energética, alivio del estrés y descarga de tensiones acumuladas en el cuerpo físico y sutil.</p>"
    },
    "humo-del-alma": {
        titulo: "Humo del Alma",
        duracion: "Producto Holístico",
        tipo: "Sahumo y Limpieza Energética",
        descripcion: "<p>Mezclas artesanales de resinas naturales, plantas medicinales y maderas sagradas para sahumado.</p><p>Diseñadas para elevar la vibración de tu hogar, limpiar cargas densas en el espacio y crear una atmósfera de calma y protección.</p>"
    },
    "bruma-del-alma": {
        titulo: "Bruma del Alma",
        duracion: "Producto Holístico",
        tipo: "Aromaterapia Aurica",
        descripcion: "<p>Spray áurico elaborado con elixires florales y aceites esenciales de alta pureza.</p><p>Perfecto para rociar sobre tu campo electromagnético, ambiente o espacio de meditación para armonizar tus emociones y reconectar al instante.</p>"
    }
};

// Obtener el ID del servicio desde la URL
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const tituloEl = document.getElementById('titulo');
    const duracionEl = document.getElementById('duracion');
    const tipoEl = document.getElementById('tipo');
    const descripcionEl = document.getElementById('descripcion');
    const btnWhatsappEl = document.getElementById('btn-whatsapp');

    // Verificar si el ID existe en la base de datos
    if (id && baseDeDatos[id]) {
        const item = baseDeDatos[id];

        if (tituloEl) tituloEl.innerText = item.titulo;
        if (duracionEl) duracionEl.innerText = item.duracion;
        if (tipoEl) tipoEl.innerText = item.tipo;
        if (descripcionEl) descripcionEl.innerHTML = item.descripcion;

        // Configurar enlace personalizado para WhatsApp
        if (btnWhatsappEl) {
            const mensaje = encodeURIComponent(`¡Hola! Quiero consultar o agendar por: ${item.titulo}`);
            btnWhatsappEl.href = `https://wa.me/5492645197599?text=${mensaje}`;
        }
        
        // Actualizar título de la pestaña del navegador
        document.title = `${item.titulo} - Raíces del Alma`;
    } else {
        // En caso de un ID no válido
        if (tituloEl) tituloEl.innerText = "Servicio o Producto no encontrado";
        if (duracionEl) duracionEl.parentElement.style.display = "none";
        if (tipoEl) tipoEl.parentElement.style.display = "none";
        if (descripcionEl) descripcionEl.innerHTML = "<p>El elemento seleccionado no existe o no se encuentra disponible actualmente.</p>";
    }
});