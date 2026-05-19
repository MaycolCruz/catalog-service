# catalog-service

Microservicio de catálogo para la gestión de productos y categorías deportivas dentro de la plataforma multivendor. Construido con Node.js, Express y Supabase (PostgreSQL).

---

# Arquitectura

El proyecto sigue una arquitectura en capas:

```txt
Controller → Service → Repository → Supabase (PostgreSQL)
```

## Responsabilidades

- **Controller**
  Maneja requests y responses HTTP.

- **Service**
  Contiene reglas de negocio, validaciones y orquestación.

- **Repository**
  Realiza consultas a Supabase/PostgreSQL.

- **Middleware**
  Maneja autenticación JWT y comunicación interna entre microservicios.

---

# Tecnologías utilizadas

- Node.js
- Express.js
- Supabase
- PostgreSQL
- JWT
- dotenv
- Nodemon
- GitHub Actions
- SonarCloud

---

# Endpoints

## Endpoints internos (requieren JWT)

Estos endpoints son consumidos por el frontend y requieren autenticación mediante Bearer Token.

| Método | Ruta | Descripción |
|---|---|---|
| POST | /api/products | Crear producto |
| GET | /api/products | Listar productos |
| GET | /api/products/:id | Obtener producto por ID |
| PUT | /api/products/:id | Actualizar producto |
| PATCH | /api/products/:id/status | Cambiar estado del producto |
| POST | /api/categories | Crear categoría |
| PUT | /api/categories/:id | Actualizar categoría |
| DELETE | /api/categories/:id | Eliminar categoría |

---

## Endpoints externos (microservicios)

Estos endpoints son consumidos por otros microservicios mediante `X-Internal-Key`.

| Método | Ruta | Descripción |
|---|---|---|
| GET | /api/categories | Obtener categorías disponibles |
| GET | /api/vendors/:vendorId/products | Obtener productos asociados a un vendedor |

---

# Comunicación con auth-service

El `catalog-service` valida tokens JWT usando el `auth-service`.

## Flujo de autenticación

```txt
Frontend
↓
JWT Token
↓
catalog-service
↓
auth-service valida token
↓
Request autorizado
```

---

## Middleware de autenticación

```js
const axios = require('axios');

async function authMiddleware(req, res, next) {

  try {

    const token =
      req.headers.authorization?.replace('Bearer ', '');

    if (!token) {

      return res.status(401).json({
        success: false,
        message: 'Token requerido'
      });

    }

    const response = await axios.post(

      `${process.env.AUTH_SERVICE_URL}/api/auth/verify`,

      {},

      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    );

    req.user = response.data.user;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: 'Token inválido'
    });

  }

}

module.exports = authMiddleware;
```

---

# Comunicación entre microservicios

Para endpoints externos se utiliza una API Key interna:

```txt
X-Internal-Key: secret-key
```

---

# Estados del producto

| Estado | Descripción |
|---|---|
| ACTIVE | Producto activo |
| INACTIVE | Producto inactivo |
| OUT_OF_STOCK | Sin stock |
| SUSPENDED | Producto suspendido |

---

# Categorías deportivas disponibles

- Fútbol
- Basketball
- Running
- Gym
- Ciclismo
- Natación
- Tenis
- Voley
- Yoga
- Accesorios Deportivos
- Suplementos
- Equipamiento Deportivo

---

# Ejemplo de respuesta

## GET /api/categories

```json
{
  "success": true,
  "data": [
    {
      "category_id": 1,
      "category_name": "Fútbol",
      "created_at": "2026-05-18T21:02:35.028555"
    },
    {
      "category_id": 2,
      "category_name": "Basketball",
      "created_at": "2026-05-18T21:02:35.028555"
    }
  ]
}
```

---

# Ejemplo de producto por vendor

## GET /api/vendors/1/products

```json
{
  "success": true,
  "data": [
    {
      "vendor_id": 1,
      "price": 350,
      "stock": 20,
      "status": "ACTIVE",
      "products": {
        "product_id": 1,
        "product_name": "Nike Air Zoom",
        "product_brand": "Nike",
        "product_status": "ACTIVE"
      }
    }
  ]
}
```

---

# Variables de entorno

```env
NODE_ENV=development

PORT=3002

SUPABASE_URL=https://your-project.supabase.co

SUPABASE_KEY=your-supabase-service-key

AUTH_SERVICE_URL=http://localhost:3006

INTERNAL_API_KEY=secret-key
```

---

# Configuración Supabase

```js
const { createClient } =
require('@supabase/supabase-js');

require('dotenv').config();

const supabase = createClient(

  process.env.SUPABASE_URL,

  process.env.SUPABASE_KEY

);

module.exports = supabase;
```

---

# Estructura del proyecto

```txt
catalog-service/
│
├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── routes/
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── internal.middleware.js
│   │
│   ├── database/
│   │   └── supabase.js
│   │
│   └── app.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .env
├── .gitignore
├── package.json
├── sonar-project.properties
└── README.md
```

---

# Instalación

```bash
npm install
```

---

# Ejecutar en desarrollo

```bash
npm run dev
```

---

# CI/CD

El proyecto incluye integración continua mediante:

- GitHub Actions
- SonarCloud

Cada push realizado a la rama `main` ejecuta automáticamente el pipeline de validación.

---

# Deploy

El microservicio puede desplegarse en:

- Render
- Railway
- Vercel (Serverless)
- Docker

---

# Integración con frontend

El frontend consume los endpoints:

```txt
GET /api/categories

GET /api/products

POST /api/products
```

---

# Integración con vendor-service

El `vendor-service` puede consumir:

```txt
GET /api/vendors/:vendorId/products
```

para obtener los productos asociados a un vendedor.
