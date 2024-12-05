// Lista de cursos (simulación de datos)
const courses = [
    {
        name: "Introducción a JavaScript",
        category: "Programación",
        link: "https://www.freecodecamp.org/espanol/news/tag/javascript/"
    },
    {
        name: "Fundamentos de Redes",
        category: "Redes",
        link: "https://www.netacad.com/es/networking"
    },
    {
        name: "Fuandamentos de programacion HTML",
        category: "Programación",
        link: "https://www.tutorialesprogramacionya.com/htmlya/"
    },
    {
        name: "Fundamentos de Java",
        category: "Programación",
        link: "https://www.tutorialesprogramacionya.com/javaya/"
    },
    {
        name: "Curso de Python y ciencia de datos",
        category: "Programación",
        link: "https://www.coursera.org/learn/python-for-applied-data-science-ai?specialization=ibm-data-science&utm_medium=sem&utm_source=gg&utm_campaign=B2C_LATAM_ibm-data-science_ibm_FTCOF_professional-certificates_countrygroup-1&campaignid=20849957655&adgroupid=155915853279&device=c&keyword=&matchtype=&network=g&devicemodel=&adposition=&creativeid=684377192111&hide_mobile_promo&gad_source=1&gclid=CjwKCAiAmMC6BhA6EiwAdN5iLe1jgzcVFmLGTr-Ocgzf1KRA1wZtaFwp8PLu-DFM4k3hMr7xaywX7BoCbcgQAvD_BwE"
    },
    {
        name: "Diseño UX/UI para principiantes",
        category: "Diseño",
        link: "https://dokozero.design/es/writing/getting-started-in-uxui-design/"
    }
];

// Función para cargar los cursos en el HTML
function loadCourses() {
    const courseList = document.getElementById("course-list");
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        courseCard.innerHTML = `
            <h2>${course.name}</h2>
            <p>Categoría: ${course.category}</p>
            <a href="${course.link}" target="_blank">Ver curso</a>
        `;

        courseList.appendChild(courseCard);
    });
}

// Llamar la función cuando se cargue la página
document.addEventListener("DOMContentLoaded", loadCourses);
