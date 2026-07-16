const express =
require('express')

const router =
express.Router()

const controller =
require(
'../controllers/vendor-product.controller'
)

router.post(
  '/vendor-products',
  controller.createVendorProduct
)

// TODOS LOS PRODUCTOS DE TODOS LOS VENDEDORES
router.get(
  '/vendor-products',
  controller.getAllVendorProducts
) 

// NUEVO ENDPOINT PRODUCTOS POR VENDEDORES
router.get(
  '/vendor-products/vendors',
  controller.getVendorsWithProducts
)

router.get(
  '/vendor-products/:vendorId',
  controller.getVendorProducts
)

router.put(
  '/vendor-products/:id',
  controller.updateVendorProduct
)

router.delete(
  '/vendor-products/:id',
  controller.deleteVendorProduct
)

module.exports = router
