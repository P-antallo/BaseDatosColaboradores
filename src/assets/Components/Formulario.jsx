import React, { useState } from 'react';

const Formulario = ({ agregarColaborador, colaboradores }) => {
  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const generarCorreo = () => {
    let correoBase = `${primerNombre}${apellidos[0]}`.toLowerCase();
    let correo = correoBase;
    let contador = 1;
    while (colaboradores.some(col => col.correo === correo + '@colaborador.com')) {
      correo = correoBase + apellidos[contador].toLowerCase();
      contador++;
    }
    return correo + '@colaborador.com';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!primerNombre || !apellidos || !edad || !cargo || !telefono) {
      setMensaje('Complete todos los campos solicitados');
      return;
    }
    if (edad < 18 || edad > 65) {
      alert('La edad del colaborador debe estar entre 18 y 65 años.');
      return;
    }
    if (telefono.length !== 8) {
      alert('El teléfono debe contener 8 dígitos.');
      return;
    }
    const correo = generarCorreo();
    const nuevoColaborador = {
      primerNombre,
      segundoNombre,
      apellidos,
      edad,
      cargo,
      telefono,
      correo
    };
    agregarColaborador(nuevoColaborador);
    setPrimerNombre('');
    setSegundoNombre('');
    setApellidos('');
    setEdad('');
    setCargo('');
    setTelefono('');
    setMensaje('Colaborador agregado exitosamente');
  };

  return (
    <div className="formulario-colaboradores">
      <div className="formulario-titulo">
        Agregar colaborador
      </div>
      {mensaje && <div className={`mensaje ${mensaje === 'Colaborador agregado exitosamente' ? 'mensaje-exito' : 'mensaje-error'}`}>{mensaje}</div>}
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="primerNombre"
            placeholder="Primer nombre"
            value={primerNombre}
            onChange={(e) => setPrimerNombre(e.target.value)}
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="segundoNombre"
            placeholder="Segundo nombre"
            value={segundoNombre}
            onChange={(e) => setSegundoNombre(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="apellidos"
            placeholder="Apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="number"
            className="form-control"
            id="edad"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            min="18"
            max="65"
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="cargo"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="telefono"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            pattern="[0-9]{8}"
            title="El teléfono debe contener 8 dígitos."
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Agregar colaborador</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
