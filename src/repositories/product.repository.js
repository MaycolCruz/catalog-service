const supabase =
require('../database/supabase')

class ProductRepository {

  async createProduct(productData) {

    const { data, error } =
      await supabase
        .from('products')
        .insert([productData])
        .select()

    if (error) throw error

    return data

  }

  async getProducts() {

    const { data, error } =
      await supabase
        .from('products')
        .select(`
          *,
          categories (
            category_name
          )
        `)

    if (error) throw error

    return data

  }

  async getProductById(id) {

    const { data, error } =
      await supabase
        .from('products')
        .select(`
          *,
          categories (
            category_name
          )
        `)
        .eq('product_id', id)
        .single()

    if (error) throw error

    return data

  }

  async updateProduct(id, productData) {

    const { data, error } =
      await supabase
        .from('products')
        .update(productData)
        .eq('product_id', id)
        .select()

    if (error) throw error

    return data

  }

  async updateProductStatus(
    id,
    status
  ) {

    const { data, error } =
      await supabase
        .from('products')
        .update({
          product_status: status
        })
        .eq('product_id', id)
        .select()

    if (error) throw error

    return data

  }
async getProductsByVendor(vendorId) {

  const { data, error } =
    await supabase
      .from('vendor_products')
      .select(`
        vendor_id,
        price,
        stock,
        status,

        products (

          product_id,
          product_name,
          product_brand,
          product_description,
          image_url,
          product_status,

          categories (
            category_name
          )

        )
      `)
      .eq('vendor_id', vendorId)

  if (error) throw error

  return data

}

}

module.exports =
new ProductRepository()