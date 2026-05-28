async updateProductStatus(
  id,
  status
) {

  return await productRepository
    .updateProductStatus(
      id,
      status
    )

}

async deleteProduct(id) {

  return await productRepository
    .deleteProduct(id)

}

async getProductsByVendor(
  vendorId
) {
