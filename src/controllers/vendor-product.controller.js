const vendorProductService =
require(
  '../services/vendor-product.service'
)

exports.createVendorProduct =
async (req, res) => {

  try {

    const result =
      await vendorProductService
        .createVendorProduct(
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

exports.getVendorProducts =
async (req, res) => {

  try {

    const result =
      await vendorProductService
        .getVendorProducts(
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

exports.updateVendorProduct =
async (req, res) => {

  try {

    const result =
      await vendorProductService
        .updateVendorProduct(
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

exports.deleteVendorProduct =
async (req, res) => {

  try {

    await vendorProductService
      .deleteVendorProduct(
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


exports.getVendorsWithProducts =
async (req, res) => {

  try {

    const result =
      await vendorProductService
        .getVendorsWithProducts()

    res.json({
      success: true,
      vendors_id: result
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

exports.getAllVendorProducts =
async (req, res) => {

  try {

    const result =
      await vendorProductService
        .getAllVendorProducts()

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







