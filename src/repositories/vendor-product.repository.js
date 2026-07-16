const supabase =
require('../database/supabase')

class VendorProductRepository {

  async createVendorProduct(data) {

    const { data: result, error } =
      await supabase
        .from('vendor_products')
        .insert([data])
        .select()

    if (error) throw error

    return result

  }

  async getVendorProducts(vendorId) {

  const { data, error } =
    await supabase
      .from('vendor_products')
      .select(`
        *,
        products (
          product_id,
          product_name,
          product_brand,
          image_url,
          product_description,

          categories (
            category_name
          )
        )
      `)
      .eq('vendor_id', vendorId)

  if (error) throw error

  return data

}

  async updateVendorProduct(
    id,
    data
  ) {

    const { data: result, error } =
      await supabase
        .from('vendor_products')
        .update(data)
        .eq(
          'vendor_product_id',
          id
        )
        .select()

    if (error) throw error

    return result

  }

  async deleteVendorProduct(id) {

    const { error } =
      await supabase
        .from('vendor_products')
        .delete()
        .eq(
          'vendor_product_id',
          id
        )

    if (error) throw error

    return true

  }
  
  async getVendorsWithProducts() {

  const { data, error } =
    await supabase
      .from('vendor_products')
      .select('vendor_id')

  if (error) throw error

  const vendorIds =
    [...new Set(data.map(item => item.vendor_id))]

  return vendorIds

}

async getAllVendorProducts() {

  const { data, error } =
    await supabase
      .from('vendor_products')
      .select(`
        vendor_product_id,
        vendor_id,
        product_id,
        price,
        stock,
        status,

        products (

          product_id,
          product_name,
          product_brand,
          product_description,
          image_url,

          categories (
            category_name
          )

        )

      `)

  if (error) throw error

  return data.map(item => ({

    vendor_product_id:
      item.vendor_product_id,

    vendor_id:
      item.vendor_id,

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

    category_name:
      item.products.categories?.category_name,

    image_url:
      item.products.image_url,

    product_description:
      item.products.product_description

  }))

}

}

module.exports =
new VendorProductRepository()
