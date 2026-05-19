const categoryService =
require('../services/category.service')

exports.createCategory =
async (req, res) => {

  try {

    const result =
      await categoryService.createCategory(
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

exports.getCategories =
async (req, res) => {

  try {

    const result =
      await categoryService.getCategories()

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