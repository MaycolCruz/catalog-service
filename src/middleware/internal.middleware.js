function internalMiddleware(
  req,
  res,
  next
) {

  const internalKey =
    req.headers['x-internal-key']

  if (
    internalKey !==
    process.env.INTERNAL_API_KEY
  ) {

    return res.status(403).json({
      success: false,
      message: 'Forbidden'
    })

  }

  next()

}

module.exports =
internalMiddleware