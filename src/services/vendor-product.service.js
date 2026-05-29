const vendorProductRepository =
require(
  '../repositories/vendor-product.repository'
)

class VendorProductService {

  async createVendorProduct(data) {

    return await vendorProductRepository
      .createVendorProduct(data)

  }

  async getVendorProducts(
    vendorId
  ) {

    return await vendorProductRepository
      .getVendorProducts(
        vendorId
      )

  }

  async updateVendorProduct(
    id,
    data
  ) {

    return await vendorProductRepository
      .updateVendorProduct(
        id,
        data
      )

  }

  async deleteVendorProduct(id) {

    return await vendorProductRepository
      .deleteVendorProduct(id)

  }

}

module.exports =
new VendorProductService()
