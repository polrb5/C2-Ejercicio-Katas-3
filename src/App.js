import { useState } from "react";

function App() {
  const [icono, setIcono] = useState(true);
  const cambiarIcono = () => {
    setIcono(!icono);
  };

  return (
    <div className="container">
      <i
        className={icono ? "fas fa-thumbs-up" : "fas fa-thumbs-down"}
        onClick={cambiarIcono}
      ></i>
    </div>
  );
}

export default App;
