const productService =
require('../services/product.service')

exports.createProduct =
async (req, res) => {

  try {

    const result =
      await productService.createProduct(
        req.body
      )

    res.status(201).json({
      success: true,
      data: result
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

exports.getProducts =
async (req, res) => {

  try {

    const result =
      await productService.getProducts()

    res.json({
      success: true,
      data: result
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

exports.getProductById =
async (req, res) => {

  try {

    const result =
      await productService.getProductById(
        req.params.id
      )

    res.json({
      success: true,
      data: result
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

exports.updateProduct =
async (req, res) => {

  try {

    const result =
      await productService.updateProduct(
        req.params.id,
        req.body
      )

    res.json({
      success: true,
      data: result
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

exports.deleteProduct =
async (req, res) => {

  try {

    await productService.deleteProduct(
      req.params.id
    )

    res.json({
      success: true
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

exports.updateProductStatus =
async (req, res) => {

  try {

    const result =
      await productService.updateProductStatus(
        req.params.id,
        req.body.status
      )

    res.json({
      success: true,
      data: result
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

exports.getProductsByVendor =
async (req, res) => {

  try {

    const result =
      await productService.getProductsByVendor(
        req.params.vendorId
      )

    res.json({
      success: true,
      data: result
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}
