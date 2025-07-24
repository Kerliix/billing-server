# Kerliix Billing Server

**Centralized Billing and Entitlements Server for the Kerliix Ecosystem**

The **Kerliix Billing Server** (`billing.kerliix.com`) is the backbone of financial operations within the Kerliix ecosystem. It handles billing logic, manages subscriptions, tracks usage, enforces entitlements, integrates with payment providers, and powers license-based service access for Kerliix users and products.

---

## Key Features

- 🔐 **Integrated with Kerliix Identity Server (`accounts.kerliix.com`)**
- 💳 **Multi-provider Payment Gateway Support** (Stripe, PayPal, MTN/Airtel Mobile Money, Credit/Debit Cards)
- 🧾 **Subscription Management** (Plans, Tiers, Trials)
- 🎟️ **Entitlements & Feature Access Control**
- 📈 **Usage Metering for Pay-as-you-go Models**
- 🧮 **Automated Invoicing and Receipts**
- 🔁 **Recurring & One-Time Payment Support**
- 🛡️ **Admin Dashboard with Role-based Access**
- 📊 **Billing Insights & Reporting APIs**
- 🌍 **Multi-region Currency and Tax Configurations**

---

## Project Structure

```plaintext
kerliix-billing-server/
├── backend/                # Node.js/Express Billing API
│   ├── models/             # Mongoose models (Plans, Subscriptions, Invoices)
│   ├── routes/             # REST API routes (v1/)
│   ├── controllers/        # Route logic controllers
│   ├── services/           # Business logic (billing, payments, entitlements)
│   ├── middlewares/        # Auth, error, validation
│   ├── utils/              # Helpers (currency, dates, etc.)
│   └── config/             # App and provider configurations
├── admin-dashboard/        # React + Vite Admin Interface
├── docs/                   # Internal API docs and system design
└── SETUP.md                # Installation & deployment guide
```

---

## 🛠Tech Stack

| Purpose         | Technology / Notes                            |
|----------------|-----------------------------------------------|
| Backend         | Node.js, Express, MongoDB                    |
| Auth            | JWT (via `accounts.kerliix.com`)             |
| Payments        | Stripe, PayPal, Mobile Money (MTN/Airtel), Visa/MasterCard |
| Dashboard       | React, Vite, Tailwind CSS                    |
| Deployment      | Docker, NGINX, Ubuntu                        |

---

## ⚙Development Setup

### Requirements

- Node.js v20+
- MongoDB 6+
- PayPal and Stripe Developer Accounts
- Docker (for optional containerization)
- Kerliix Identity Server access (`accounts.kerliix.com`)

### Running the Backend Server

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Running the Admin Dashboard

```bash
cd admin-dashboard
npm install
npm run dev
```

---

## Authentication

All API requests require a valid **JWT** issued by `accounts.kerliix.com`. Admin routes additionally require appropriate roles (`billing_admin`, `superadmin`).

---

## Documentation

- [API Reference](./docs/api.md)
- [Billing Models](./docs/models.md)
- [Setup Instructions](./SETUP.md)
- [Admin Permissions](./docs/admin-roles.md)

---

## Contributing

This is an internal project for Kerliix Technologies Ltd. Contributions are only accepted from authorized employees or licensed contractors. All changes must go through a formal code review process.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for internal contribution rules.

---

## 📜 License
Proprietary licence


![Kerliix Logo](https://raw.githubusercontent.com/Kerliix/.github/main/company/kx-logo.png)

> ©2025 Kerliix. All rights reserved.
> All content and source code in this repository are © 2025 Kerliix Technologies Ltd. All rights reserved. Unauthorized use, distribution, or modification is strictly prohibited.
> _It’s all about you._
