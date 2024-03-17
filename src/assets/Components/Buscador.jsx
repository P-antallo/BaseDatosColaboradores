import { useState } from 'react';

const Buscador = ({ colaboradores }) => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
    if (e.target.value === '') {
      setResultados([]);
      return;
    }
    const filtrados = colaboradores.filter(colaborador =>
      colaborador.primerNombre.toLowerCase().includes(e.target.value.toLowerCase()) ||
      colaborador.segundoNombre.toLowerCase().includes(e.target.value.toLowerCase()) ||
      colaborador.apellidos.toLowerCase().includes(e.target.value.toLowerCase()) ||
      colaborador.edad.toString().includes(e.target.value) ||
      colaborador.cargo.toLowerCase().includes(e.target.value.toLowerCase()) ||
      colaborador.telefono.includes(e.target.value) ||
      colaborador.correo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setResultados(filtrados);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleSearch}
      />
      {resultados.length > 0 && (
        <div>
          <h4>Resultados de la búsqueda:</h4>
          {resultados.map(colaborador => (
            <div key={colaborador.id}>
              {colaborador.primerNombre} {colaborador.segundoNombre} {colaborador.apellidos} - {colaborador.edad} años - {colaborador.cargo} - {colaborador.telefono} - {colaborador.correo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Buscador;
