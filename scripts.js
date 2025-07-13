document.querySelectorAll('.materia').forEach(m => {
  m.addEventListener('click', () => {
    m.classList.toggle('aprobada');
    // Opcional: guardar en localStorage
    const nombre = m.dataset.nombre;
    if (m.classList.contains('aprobada')) {
      localStorage.setItem(nombre, '1');
    } else {
      localStorage.removeItem(nombre);
    }
  });
