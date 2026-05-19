const express = require('express')

const cors = require('cors')

require('dotenv').config()

const productRoutes =
require('./routes/product.routes')

const categoryRoutes =
require('./routes/category.routes')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', productRoutes)

app.use('/api', categoryRoutes)

/*
|--------------------------------------------------------------------------
| HEALTH CHECK
|--------------------------------------------------------------------------
*/

app.get('/', (req, res) => {

  res.json({
    success: true,
    message:
      'Catalog Service Running'
  })

})

const PORT =
process.env.PORT || 3002

app.listen(PORT, () => {

  console.log(
    `Catalog Service running on ${PORT}`
  )

})