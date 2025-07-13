document.querySelectorAll('.materia').forEach(m => {
  m.addEventListener('click', () => {
    const previas = m.dataset.previas ? m.dataset.previas.split(',') : [];

    const aprobadas = previas.every(p => localStorage.getItem(p.trim()) === '1');
    if (previas.length > 0 && !aprobadas) {
      alert(`Para aprobar "${m.dataset.nombre}", primero debés aprobar: ${previas.join(', ')}`);
      return;
    }

    m.classList.toggle('aprobada');
    const nombre = m.dataset.nombre;
    if (m.classList.contains('aprobada')) {
      localStorage.setItem(nombre, '1');
    } else {
      localStorage.removeItem(nombre);
    }
  });

  const nombre = m.dataset.nombre;
  if (localStorage.getItem(nombre)) {
    m.classList.add('aprobada');
  }
});
