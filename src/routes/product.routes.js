const express = require('express')

const router = express.Router()

const productController =
require('../controllers/product.controller')

const authMiddleware =
require('../middleware/auth.middleware')

const internalMiddleware =
require('../middleware/internal.middleware')

/*
|--------------------------------------------------------------------------
| INTERNOS (JWT)
|--------------------------------------------------------------------------
*/

// Crear producto
router.post(
  '/products',
  // authMiddleware,
  productController.createProduct
)

// Listar productos
router.get(
  '/products',
//  authMiddleware,
  productController.getProducts
)

// Obtener producto por ID
router.get(
  '/products/:id',
 // authMiddleware,
  productController.getProductById
)

// Actualizar producto
router.put(
  '/products/:id',
//  authMiddleware,
  productController.updateProduct
)

// ELIMINAR PRODUCTO  👈 AGREGA ESTO
router.delete(
  '/products/:id',
  productController.deleteProduct
)

// Cambiar estado producto
router.patch(
  '/products/:id/status',
 // authMiddleware,
  productController.updateProductStatus
)

/*
|--------------------------------------------------------------------------
| EXTERNOS (MICROSERVICIOS)
|--------------------------------------------------------------------------
*/

// Obtener productos por vendor
router.get(
  '/vendors/:vendorId/products',

//  internalMiddleware,

  productController.getProductsByVendor
)

module.exports = router
