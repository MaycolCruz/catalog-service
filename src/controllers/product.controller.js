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

// 👇 AGREGA ESTO ABAJO

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
