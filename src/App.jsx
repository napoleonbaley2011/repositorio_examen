import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Modal, Box, TextField } from '@mui/material';
import './App.css';
import imagen1 from './assets/img/descarga.jpeg'
import imagen2 from './assets/img/descarga (1).jpeg'
import imagen3 from './assets/img/descarga (2).jpeg'
// Datos para las tarjetas
const data = [
  {
    name: "Tarjeta 1",
    image: imagen1,
    description: "Esta es la descripción de la tarjeta 1."
  },
  {
    name: "Tarjeta 2",
    image: imagen2,
    description: "Esta es la descripción de la tarjeta 2."
  },
  {
    name: "Tarjeta 3",
    image: imagen3,
    description: "Esta es la descripción de la tarjeta 3."
  }
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

// Componente de tarjetas
function Tarjetas() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {data.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: '0 15px' }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleOpen(card)}>Ver más</Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          {selectedCard && (
            <>
              <CardMedia
                component="img"
                height="200"
                image={selectedCard.image}
                alt={selectedCard.name}
              />
              <Typography id="modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                {selectedCard.name}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedCard.description}
              </Typography>
              <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
                Cerrar
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}

// Componente para el ejercicio con los inputs de costo y cantidad
function Ejercicio() {
  const [costo, setCosto] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleCalcular = () => {
    const total = costo * cantidad;
    setResultado(total);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calculadora de Costo x Cantidad</h2>
      <div style={{ marginBottom: '15px' }}>
        <TextField
          label="Costo"
          type="number"
          value={costo}
          onChange={(e) => setCosto(parseFloat(e.target.value))}
          variant="outlined"
          fullWidth
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <TextField
          label="Cantidad"
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(parseFloat(e.target.value))}
          variant="outlined"
          fullWidth
        />
      </div>
      <Button variant="contained" onClick={handleCalcular}>
        Calcular
      </Button>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Resultado: {resultado}
      </Typography>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <Link to="/" style={{ margin: '0 15px' }}>Tarjetas</Link>
        <Link to="/ejercicio" style={{ margin: '0 15px' }}>Ejercicio</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Tarjetas />} />
        <Route path="/ejercicio" element={<Ejercicio />} />
      </Routes>
    </Router>
  );
}

export default App;
