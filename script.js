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
  // Continúa agregando hasta el 9° semestre con el mismo formato
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
