import { Router } from 'express'; 
import { PaisAdapter } from '../adapter/PaisAdapter';
import { PaisApplicationService } from '../../application/PaisApplicationServices';
import { PaisController } from '../controller/PaisContrtoller'; 

const router = Router();

const paisAdapter = new PaisAdapter();
const paisAppService = new PaisApplicationService(paisAdapter);
const paisController = new PaisController(paisAppService);



router.post('/pais', async (req, res) => {
  try {
    await paisController.createPais(req, res);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/paises', async (req, res) => {   
  try {
    await paisController.getAllPaises(req, res);
  } catch (error) {

    res.status(500).json({ msg: 'fallo' });
  }
});

router.get('/pais/:id', async (req, res) => {
  try {
    await paisController.getPaisById(req, res);
  } catch (error) {
    res.status(201).json({ message: 'error leyendo pais' });
  }
});

router.get('/buscarPaisPorNombre/:nombre', async (req, res) => {
  try {
    await paisController.getPaisByNombre(req, res);
  } catch (error) {
    res.status(400).json({ message: 'error', error });
  }
});

router.put('/pais/update/:id', async (req, res) => { 
  try {
    await paisController.updatePais(req, res);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar', error });
  }
});

router.delete('/deletePais/:id', async (req, res) => { 
  try {
    await paisController.deletePais(req, res);
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar', error });
  }
});

export default router;