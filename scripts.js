body {
  font-family: sans-serif;
  background: #f4f4f4;
  padding: 20px;
  text-align: center;
}
h1 {
  font-size: 22px;
  margin-bottom: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
  max-width: 1200px;
  margin: auto;
}
.materia {
  background: white;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.materia:hover {
  background: #f0f0f0;
}
.aprobada {
  background: #b5e8b3;
  border-color: #5da75d;
}
