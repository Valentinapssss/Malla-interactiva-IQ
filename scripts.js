document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const materias = Array.from(grid.querySelectorAll('.materia'));

  // Obtener semestres únicos y ordenarlos
  const semestres = [...new Set(materias.map(m => parseInt(m.dataset.semestre)))].sort((a,b) => a-b);

  // Vaciar el contenedor original
  grid.innerHTML = '';

  // Crear contenedores para cada semestre y agregar materias correspondientes
  semestres.forEach(sem => {
    const contSem = document.createElement('div');
    contSem.classList.add('semestre');
    contSem.dataset.num = sem;

    const titulo = document.createElement('h2');
    titulo.textContent = `Semestre ${sem}`;
    contSem.appendChild(titulo);

    // Agregar materias de ese semestre
    materias
      .filter(m => parseInt(m.dataset.semestre) === sem)
      .forEach(materia => {
        contSem.appendChild(materia);
      });

    grid.appendChild(contSem);
  });

  // Agregar evento click para mostrar info
  materias.forEach(materia => {
    materia.style.cursor = 'pointer';
    materia.addEventListener('click', () => {
      const nombre = materia.dataset.nombre;
      const previas = materia.dataset.previas || 'No tiene materias previas.';
      alert(`Materia: ${nombre}\nMaterias previas: ${previas}`);
    });
  });
});
