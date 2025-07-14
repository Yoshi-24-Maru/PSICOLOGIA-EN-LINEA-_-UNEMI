// script.js

const malla = {
  "1° Semestre": [
    { nombre: "Bases psicológicas de la Psicologia 1", reqs: [] },
    { nombre: "Enfoques y fundamentos históricos de la psicología", reqs: [] },
    { nombre: "Psicologia general 1", reqs: [] },
    { nombre: "Epistemologias de las ciencias sociales", reqs: [] },
    { nombre: "Realidad nacional", reqs: [] },
    { nombre: "Lengua y comunicación", reqs: [] }
  ],
  "2° Semestre": [
    { nombre: "Bases biologícas de la psicología 2", reqs: ["Bases psicológicas de la Psicologia 1"] },
    { nombre: "Direccion de equipos", reqs: [] },
    { nombre: "Psicologia general 2", reqs: ["Psicologia general 1"] },
    { nombre: "Estadistica 1", reqs: [] },
    { nombre: "Psicologia diferencial", reqs: [] },
    { nombre: "Tecnologias de la información y comunicación", reqs: [] }
  ],
  "3° Semestre": [
    { nombre: "Psicofisiología", reqs: ["Bases biologícas de la psicología 2"] },
    { nombre: "Psicologia de la familia", reqs: [] },
    { nombre: "Deontologia y relaciones humanas", reqs: [] },
    { nombre: "Psicologia organizacional", reqs: [] },
    { nombre: "Psicología del desarrollo 1", reqs: [] },
    { nombre: "Teorias de la personalidad", reqs: [] }
  ],
  "4° Semestre": [
    { nombre: "Metodologia de la investigación", reqs: ["Estadistica 1"] },
    { nombre: "Reclutamiento, selección e inducción laboral", reqs: ["Psicologia organizacional"] },
    { nombre: "Psicologia educativa", reqs: [] },
    { nombre: "Psicopatología 1", reqs: ["Teorias de la personalidad"] },
    { nombre: "Neuropsicologia 1", reqs: ["Psicofisiología"] },
    { nombre: "Psicologia del desarrollo 2", reqs: ["Psicología del desarrollo 1"] }
  ],
  "5° Semestre": [
    { nombre: "Gestion del desempeño", reqs: ["Direccion de equipos", "Reclutamiento, selección e inducción laboral"] },
    { nombre: "Psicopatologia 2", reqs: ["Psicopatología 1"] },
    { nombre: "Neurosicologia 2", reqs: ["Neuropsicologia 1"] },
    { nombre: "Orientación educativa y profesional", reqs: ["Psicologia educativa"] },
    { nombre: "Psicosexualidad", reqs: [] },
    { nombre: "Psicología social y comunitaria", reqs: [
      "Metodologia de la investigación",
      "Reclutamiento, selección e inducción laboral",
      "Psicologia educativa",
      "Psicopatología 1",
      "Neuropsicologia 1",
      "Psicologia del desarrollo 2"
    ] }
  ],
  "6° Semestre": [
    { nombre: "Psicología de la salud", reqs: ["Gestion del desempeño", "Psicopatologia 2", "Neurosicologia 2"] },
    { nombre: "Diseño y gestión de proyectos", reqs: ["Reclutamiento, selección e inducción laboral", "Orientación educativa y profesional"] },
    { nombre: "Evaluación psicológica y psicométrica", reqs: ["Neurosicologia 2", "Orientación educativa y profesional", "Psicología social y comunitaria"] },
    { nombre: "Psicologia clínica 1", reqs: ["Psicopatologia 2", "Neurosicologia 2", "Psicología social y comunitaria"] },
    { nombre: "Capacitacion y desarrollo", reqs: [] },
    { nombre: "Psicopedagogia", reqs: ["Orientación educativa y profesional"] }
  ],
  "7° Semestre": [
    { nombre: "Lectura y escritura de textos", reqs: [
      "Psicología de la salud",
      "Diseño y gestión de proyectos",
      "Evaluación psicológica y psicométrica",
      "Psicologia clínica 1",
      "Psicopedagogia"
    ] },
    { nombre: "Psicología clínica 2", reqs: ["Psicologia clínica 1"] },
    { nombre: "Seguridad y salud ocupacional", reqs: ["Evaluación psicológica y psicométrica", "Capacitacion y desarrollo"] },
    { nombre: "Proceso de inclusión educativa", reqs: ["Psicopedagogia"] },
    { nombre: "Psicología infantil y estimulación neuropsicológica", reqs: [
      "Psicología de la salud",
      "Evaluación psicológica y psicométrica",
      "Psicologia clínica 1",
      "Psicopedagogia"
    ] },
    { nombre: "Psicología del deporte", reqs: [
      "Psicología de la salud",
      "Psicologia clínica 1",
      "Psicopedagogia"
    ] }
  ],
  "8° Semestre": [
    { nombre: "Psicoterapia 1", reqs: ["Psicología clínica 2", "Psicología infantil y estimulación neuropsicológica", "Psicología del deporte"] },
    { nombre: "Psicologia del consumo y de las masas", reqs: ["Psicologia organizacional"] },
    { nombre: "Psiquiatría y farmacología", reqs: ["Psicología clínica 2", "Psicología infantil y estimulación neuropsicológica", "Psicología del deporte"] },
    { nombre: "Problemas psicosociales", reqs: ["Psicología social y comunitaria"] },
    { nombre: "Intervencion en maltrato y violencia", reqs: ["Psicología social y comunitaria"] },
    { nombre: "Trabajo de titulación 1", reqs: [
      "Lectura y escritura de textos",
      "Seguridad y salud ocupacional",
      "Proceso de inclusión educativa",
      "Psicología infantil y estimulación neuropsicológica",
      "Psicología del deporte"
    ] }
  ],
  "9° Semestre": [
    { nombre: "Mediación y manejo de conflictos", reqs: [
      "Diseño y gestión de proyectos",
      "Psicoterapia 1",
      "Psiquiatría y farmacología",
      "Problemas psicosociales",
      "Intervencion en maltrato y violencia"
    ] },
    { nombre: "Emprendimiento", reqs: [
      "Psicologia organizacional",
      "Diseño y gestión de proyectos",
      "Problemas psicosociales",
      "Intervencion en maltrato y violencia"
    ] },
    { nombre: "Psicología jurídica criminalista y forense", reqs: [
      "Teorias de la personalidad",
      "Psicoterapia 1",
      "Problemas psicosociales",
      "Intervencion en maltrato y violencia"
    ] },
    { nombre: "Psicoterapia 2", reqs: [
      "Psicoterapia 1",
      "Psiquiatría y farmacología",
      "Intervencion en maltrato y violencia"
    ] },
    { nombre: "Apoyo psicosocial en emergencias seguridad y riesgos", reqs: [
      "Psiquiatría y farmacología",
      "Problemas psicosociales",
      "Intervencion en maltrato y violencia"
    ] },
    { nombre: "Trabajo de titulación 2", reqs: ["Trabajo de titulación 1"] }
  ]
};

const grid = document.getElementById("grid");
const state = {};

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
    state[nombre] = false;
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
  });
});
