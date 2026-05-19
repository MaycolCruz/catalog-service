const express = require('express')

const router = express.Router()

const categoryController =
require('../controllers/category.controller')

const authMiddleware =
require('../middleware/auth.middleware')

const internalMiddleware =
require('../middleware/internal.middleware')

/*
|--------------------------------------------------------------------------
| INTERNOS
|--------------------------------------------------------------------------
*/

// Crear categoría
router.post(
  '/categories',
  // authMiddleware,
  categoryController.createCategory
)

// Obtener categorías
router.get(
  '/categories',
 // authMiddleware,
  categoryController.getCategories
)

/*
|--------------------------------------------------------------------------
| EXTERNOS
|--------------------------------------------------------------------------
*/

// Endpoint externo para otros servicios
router.get(
  '/external/categories',

//  internalMiddleware,

  categoryController.getCategories
)

module.exports = router