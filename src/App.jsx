import { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Formulario from './assets/Components/Formulario';
import Listado from './assets/Components/Listado';
import Buscador from './assets/Components/Buscador';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    nuevoColaborador.id = (colaboradores.length + 1).toString();
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <div className="container">
      <div className="row mb-4"> {/* Agregado el margen inferior con mb-4 */}
        <div className="col-md-12">
          <Buscador colaboradores={colaboradores} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Listado colaboradores={colaboradores} />
        </div>
        <div className="col-md-6">
          <Formulario agregarColaborador={agregarColaborador} colaboradores={colaboradores} />
        </div>
      </div>
    </div>
  );
}

export default App;
