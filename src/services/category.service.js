const categoryRepository =
require('../repositories/category.repository')

class CategoryService {

  async createCategory(
    categoryData
  ) {

    return await categoryRepository
      .createCategory(
        categoryData
      )

  }

  async getCategories() {

    return await categoryRepository
      .getCategories()

  }

}

module.exports =
new CategoryService()