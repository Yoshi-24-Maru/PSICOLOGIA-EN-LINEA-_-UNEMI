// script.js con nombres corregidos + guardado automático con localStorage

const STORAGE_KEY = "mallaPsicologiaUNEMI";

const malla = {
  "1er semestre": [
    { nombre: "Bases psicológicas de la Psicología 1", reqs: [] },
    { nombre: "Enfoques y fundamentos históricos de la psicología", reqs: [] },
    { nombre: "Psicología general 1", reqs: [] },
    { nombre: "Epistemologías de las ciencias sociales", reqs: [] },
    { nombre: "Realidad nacional", reqs: [] },
    { nombre: "Lengua y comunicación", reqs: [] }
  ],
  "2do semestre": [
    { nombre: "Bases biológicas de la psicología 2", reqs: ["Bases psicológicas de la Psicología 1"] },
    { nombre: "Dirección de equipos", reqs: [] },
    { nombre: "Psicología general 2", reqs: ["Psicología general 1"] },
    { nombre: "Estadística 1", reqs: [] },
    { nombre: "Psicología diferencial", reqs: [] },
    { nombre: "Tecnologías de la información y comunicación", reqs: [] }
  ],
  "3er semestre": [
    { nombre: "Psicofisiología", reqs: ["Bases biológicas de la psicología 2"] },
    { nombre: "Psicología de la familia", reqs: [] },
    { nombre: "Deontología y relaciones humanas", reqs: [] },
    { nombre: "Psicología organizacional", reqs: [] },
    { nombre: "Psicología del desarrollo 1", reqs: [] },
    { nombre: "Teorías de la personalidad", reqs: [] }
  ],
  "4to semestre": [
    { nombre: "Metodología de la investigación", reqs: ["Estadística 1"] },
    { nombre: "Reclutamiento, selección e inducción laboral", reqs: ["Psicología organizacional"] },
    { nombre: "Psicología educativa", reqs: [] },
    { nombre: "Psicopatología 1", reqs: ["Teorías de la personalidad"] },
    { nombre: "Neuropsicología 1", reqs: ["Psicofisiología"] },
    { nombre: "Psicología del desarrollo", reqs: ["Psicología del desarrollo 1"] }
  ],
  "5to semestre": [
    { nombre: "Gestión del desempeño", reqs: ["Dirección de equipos", "Reclutamiento, selección e inducción laboral"] },
    { nombre: "Psicopatología 2", reqs: ["Psicopatología 1"] },
    { nombre: "Neuropsicología 2", reqs: ["Neuropsicología 1"] },
    { nombre: "Orientación educativa y profesional", reqs: ["Psicología educativa"] },
    { nombre: "Psicosexualidad", reqs: [] },
    { nombre: "Psicología social y comunitaria", reqs: [
      "Metodología de la investigación",
      "Reclutamiento, selección e inducción laboral",
      "Psicología educativa",
      "Psicopatología 1",
      "Neuropsicología 1",
      "Psicología del desarrollo"
    ] }
  ],
  "6to semestre": [
    { nombre: "Psicología de la salud", reqs: ["Gestión del desempeño", "Psicopatología 2", "Neuropsicología 2"] },
    { nombre: "Diseño y gestión de proyectos", reqs: ["Reclutamiento, selección e inducción laboral", "Orientación educativa y profesional"] },
    { nombre: "Evaluación psicológica y psicométrica", reqs: ["Neuropsicología 2", "Orientación educativa y profesional", "Psicología social y comunitaria"] },
    { nombre: "Psicología clínica 1", reqs: ["Psicopatología 2", "Neuropsicología 2", "Psicología social y comunitaria"] },
    { nombre: "Capacitación y desarrollo", reqs: [] },
    { nombre: "Psicopedagogía", reqs: ["Orientación educativa y profesional"] }
  ],
  "7mo semestre": [
    { nombre: "Lectura y escritura de textos", reqs: [
      "Psicología de la salud",
      "Diseño y gestión de proyectos",
      "Evaluación psicológica y psicométrica",
      "Psicología clínica 1",
      "Psicopedagogía"
    ] },
    { nombre: "Psicología clínica 2", reqs: ["Psicología clínica 1"] },
    { nombre: "Seguridad y salud ocupacional", reqs: ["Evaluación psicológica y psicométrica", "Capacitación y desarrollo"] },
    { nombre: "Proceso de inclusión educativa", reqs: ["Psicopedagogía"] },
    { nombre: "Psicología infantil y estimulación neuropsicológica", reqs: [
      "Psicología de la salud",
      "Evaluación psicológica y psicométrica",
      "Psicología clínica 1",
      "Psicopedagogía"
    ] },
    { nombre: "Psicología del deporte", reqs: [
      "Psicología de la salud",
      "Psicología clínica 1",
      "Psicopedagogía"
    ] }
  ],
  "8vo semestre": [
    { nombre: "Psicoterapia 1", reqs: ["Psicología clínica 2", "Psicología infantil y estimulación neuropsicológica", "Psicología del deporte"] },
    { nombre: "Psicología del consumo y de las masas", reqs: ["Psicología organizacional"] },
    { nombre: "Psiquiatría y farmacología", reqs: ["Psicología clínica 2", "Psicología infantil y estimulación neuropsicológica", "Psicología del deporte"] },
    { nombre: "Problemas psicosociales", reqs: ["Psicología social y comunitaria"] },
    { nombre: "Intervención en maltrato y violencia", reqs: ["Psicología social y comunitaria"] },
    { nombre: "Trabajo de titulación 1", reqs: [
      "Lectura y escritura de textos",
      "Seguridad y salud ocupacional",
      "Proceso de inclusión educativa",
      "Psicología infantil y estimulación neuropsicológica",
      "Psicología del deporte"
    ] }
  ],
  "9no semestre": [
    { nombre: "Mediación y manejo de conflictos", reqs: [
      "Diseño y gestión de proyectos",
      "Psicoterapia 1",
      "Psiquiatría y farmacología",
      "Problemas psicosociales",
      "Intervención en maltrato y violencia"
    ] },
    { nombre: "Emprendimiento", reqs: [
      "Psicología organizacional",
      "Diseño y gestión de proyectos",
      "Problemas psicosociales",
      "Intervención en maltrato y violencia"
    ] },
    { nombre: "Psicología jurídica criminalista y forense", reqs: [
      "Teorías de la personalidad",
      "Psicoterapia 1",
      "Problemas psicosociales",
      "Intervención en maltrato y violencia"
    ] },
    { nombre: "Psicoterapia 2", reqs: [
      "Psicoterapia 1",
      "Psiquiatría y farmacología",
      "Intervención en maltrato y violencia"
    ] },
    { nombre: "Apoyo psicosocial en emergencias seguridad y riesgos", reqs: [
      "Psiquiatría y farmacología",
      "Problemas psicosociales",
      "Intervención en maltrato y violencia"
    ] },
    { nombre: "Trabajo de titulación 2", reqs: ["Trabajo de titulación 1"] }
  ]
};

const grid = document.getElementById("grid");
const state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

for (const [semestre, cursos] of Object.entries(malla)) {
  const columna = document.createElement("div");
  columna.className = "semestre";
  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  columna.appendChild(titulo);

  cursos.forEach(({ nombre, reqs }) => {
    const div = document.createElement("div");
    div.className = "course";
    div.textContent = nombre;
    div.dataset.name = nombre;
    div.dataset.reqs = JSON.stringify(reqs);
    if (state[nombre]) div.classList.add("completed");
    columna.appendChild(div);
  });

  grid.appendChild(columna);
}

function updateGrid() {
  document.querySelectorAll(".course").forEach((div) => {
    const name = div.dataset.name;
    const reqs = JSON.parse(div.dataset.reqs);
    const unlocked = reqs.every((r) => r === "" || state[r]);
    div.classList.toggle("unlocked", unlocked);
  });
}

updateGrid();

document.querySelectorAll(".course").forEach((div) => {
  div.addEventListener("click", () => {
    const name = div.dataset.name;
    const reqs = JSON.parse(div.dataset.reqs);
    const unlocked = reqs.every((r) => r === "" || state[r]);
    if (!unlocked || state[name]) return;
    state[name] = true;
    div.classList.add("completed");
    updateGrid();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });
});
