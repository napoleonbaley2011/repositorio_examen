import { useState } from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Modal, Box } from '@mui/material'
import './App.css'
import imagen1 from './assets/img/descarga (1).jpeg'
import imagen2 from './assets/img/descarga (2).jpeg'
import imagen3 from './assets/img/descarga.jpeg'
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

function App() {
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

export default App;
