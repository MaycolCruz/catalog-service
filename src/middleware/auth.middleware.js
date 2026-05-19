const axios = require('axios')

async function authMiddleware(
  req,
  res,
  next
) {

  try {

    // Obtener token del header
    const token =
      req.headers.authorization
        ?.replace('Bearer ', '')

    // Validar si existe token
    if (!token) {

      return res.status(401).json({
        success: false,
        message: 'Token requerido'
      })

    }

    // Llamar auth-service
    const response =
      await axios.post(

        `${process.env.AUTH_SERVICE_URL}/api/auth/verify`,

        {},

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }

      )

    // Guardar usuario autenticado
    req.user = response.data.user

    next()

  } catch (error) {

  console.error('Auth middleware error:', error.message)

  if (error.response?.status === 401) {
    return res.status(401).json({
      success: false,
      message: 'Token inválido'
    })
  }

  return res.status(500).json({
    success: false,
    message: 'Error verificando token'
  })

}

}

module.exports = authMiddleware