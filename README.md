# catalog-service

Microservicio de gestión de categorías de productos deportivos. Construido con Node.js, Express y Supabase (PostgreSQL).

---

## Arquitectura

Controller → Service → Repository → Supabase (PostgreSQL)

- Controller: Maneja request/response HTTP
- Service: Reglas de negocio y validaciones
- Repository: Queries SQL mediante Supabase

---

## Endpoints

### Categorías

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/categories | Listar todas las categorías |
| GET | /api/categories/:id | Obtener categoría por ID |
| POST | /api/categories | Crear categoría |
| PUT | /api/categories/:id | Actualizar categoría |
| DELETE | /api/categories/:id | Eliminar categoría |

---

## Ejemplo de respuesta

```json
[
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
