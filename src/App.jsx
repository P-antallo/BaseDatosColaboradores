import { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Formulario from './assets/Components/Formulario';
import Listado from './assets/Components/Listado';
import Buscador from './assets/Components/Buscador';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    const maxId = Math.max(...colaboradores.map(col => parseInt(col.id)), 0);
    nuevoColaborador.id = (maxId + 1).toString();
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-12">
          <Buscador colaboradores={colaboradores} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-8">
          <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
        </div>
        <div className="col-md-6 col-lg-4">
          <Formulario agregarColaborador={agregarColaborador} colaboradores={colaboradores} />
        </div>
      </div>
    </div>
  );
}

export default App;
