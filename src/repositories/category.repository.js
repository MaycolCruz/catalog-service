const supabase =
require('../database/supabase')

class CategoryRepository {

  async createCategory(categoryData) {

    const { data, error } =
      await supabase
        .from('categories')
        .insert([categoryData])
        .select()

    if (error) throw error

    return data

  }

  async getCategories() {

    const { data, error } =
      await supabase
        .from('categories')
        .select('*')

    if (error) throw error

    return data

  }

}

module.exports =
new CategoryRepository()