const productRepository =
require('../repositories/product.repository')

class ProductService {

  async createProduct(productData) {

    return await productRepository
      .createProduct(productData)

  }

  async getProducts() {

    return await productRepository
      .getProducts()

  }

  async getProductById(id) {

    return await productRepository
      .getProductById(id)

  }

  async updateProduct(
    id,
    productData
  ) {

    return await productRepository
      .updateProduct(
        id,
        productData
      )

  }

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

  async getProductsByVendor(
    vendorId
  ) {

    const data =
      await productRepository
        .getProductsByVendor(
          vendorId
        )

    return {

      vendor_id:
        Number(vendorId),

      products:

        data.map(item => ({

          product_id:
            item.products.product_id,

          product_name:
            item.products.product_name,

          product_brand:
            item.products.product_brand,

          price:
            item.price,

          stock:
            item.stock,

          status:
            item.status,

          category_name:
            item.products.categories.category_name,

          image_url:
            item.products.image_url,

          description:
            item.products.product_description

        }))

    }

  }

}

module.exports =
new ProductService()