import { Router } from 'express';
import {addProduct, deleteProduct, getAllProducts, getPublishedProduct, getSingleProduct, updateProduct} from '../controllers/productController.js'

const router = Router()

router.post('/addProduct', addProduct)
router.get('/allProducts', getAllProducts)
router.get('/published', getPublishedProduct)

router.get('/:id', getSingleProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;