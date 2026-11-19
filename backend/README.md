# PodiMama & Laksol Backend API

A clean, production-grade Node.js & Express REST API designed according to **Clean Architecture** principles.

---

## 🏛️ Clean Architecture Layers

```
backend/
├── src/
│   ├── domain/                  # 1. Enterprise Business Rules (Entities & Repository Interfaces)
│   │   ├── entities/            # Core models (Product, Category, ContactMessage, Order)
│   │   └── repositories/        # Repository contracts/interfaces
│   │
│   ├── usecases/                # 2. Application Business Rules (Use Cases)
│   │   ├── product/             # GetAllProducts, GetProductById, CreateProduct
│   │   ├── category/            # GetAllCategories, GetCategoryById
│   │   ├── contact/             # SubmitContact, GetAllContacts
│   │   └── order/               # CreateOrder, GetAllOrders, GetOrderById
│   │
│   ├── interfaces/              # 3. Interface Adapters
│   │   └── http/
│   │       ├── controllers/     # Express route handlers
│   │       ├── routes/          # Express route definitions
│   │       └── middlewares/     # Error handler, 404, request logger
│   │
│   ├── infrastructure/          # 4. Frameworks & Drivers
│   │   ├── config/              # Centralized environment config (NO hardcoded localhost)
│   │   ├── database/            # Data source implementation (In-memory seeded with Laksol data)
│   │   └── webserver/           # Express app initialization, Helmet, CORS
│   │
│   ├── shared/                  # Cross-cutting utilities (AppError, ApiResponse, Logger)
│   └── index.ts                 # Server bootstrap & dependency injection
```

---

## ⚙️ Environment Configuration

All URLs, ports, hosts, and CORS origins are strictly driven by environment variables. **No hardcoded localhost values!**

Create a `.env` file in the `backend/` folder (or copy from `.env.example`):

```env
# Server Configuration
PORT=5000
HOST=0.0.0.0
NODE_ENV=development
API_PREFIX=/api/v1

# Allowed CORS Origins (comma-separated, without trailing slashes)
# In production, set to your production domains (e.g., https://laksol.lk, https://admin.laksol.lk)
CORS_ORIGIN=http://127.0.0.1:3000,http://127.0.0.1:3001,http://localhost:3000,http://localhost:3001

# Frontend URLs
CLIENT_URL=http://127.0.0.1:3000
ADMIN_URL=http://127.0.0.1:3001
```

---

## 🚀 Available Scripts

In the `backend/` directory:

- **Install dependencies**:
  ```bash
  npm install
  ```

- **Run in development mode** (hot-reload):
  ```bash
  npm run dev
  ```

- **Build for production** (compiles TypeScript to JavaScript in `dist/`):
  ```bash
  npm run build
  ```

- **Run production build**:
  ```bash
  npm start
  ```

---

## 📡 API Endpoints

All endpoints are mounted under `API_PREFIX` (default: `/api/v1`):

### 1. Health
- `GET /api/v1/health` - Server health check, uptime, and environment status.

### 2. Products
- `GET /api/v1/products` - Get all products (query params: `?category=degreasing`, `?search=cleaner`, `?random=true`).
- `GET /api/v1/products/:id` - Get product by numeric ID.
- `POST /api/v1/products` - Create a new product.

### 3. Categories
- `GET /api/v1/categories` - Get all categories (query params: `?includeProducts=true`).
- `GET /api/v1/categories/:id` - Get category by slug ID with its products.

### 4. Contact & Inquiries
- `POST /api/v1/contact` - Submit a contact message / customer inquiry from website.
- `GET /api/v1/contact` - Retrieve all contact messages (for admin panel).

### 5. Orders & Quotes
- `POST /api/v1/orders` - Submit a new order / purchase request.
- `GET /api/v1/orders` - Retrieve all orders (for admin panel).
- `GET /api/v1/orders/:id` - Get order by ID.
