# CraftConnect

CraftConnect is a platform that connects artisans with customers, providing a marketplace for artisanal goods and services.

## Features

- **Artisan Profiles**: Artisans can create profiles showcasing their skills, portfolio, and contact information.
- **Product Listings**: Artisans can list their products and services for sale, including descriptions, prices, and images.
- **Search and Filters**: Customers can search for artisans and products based on categories, keywords, and location.
- **Messaging System**: Customers can communicate with artisans directly through the platform to discuss orders and specifications.
- **Rating and Reviews**: Customers can leave ratings and reviews for artisans, helping others make informed decisions.

## Tech Stack

- **Frontend**: React.js
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL or SQLite
- **Authentication**: JWT or OAuth
- **Deployment**: AWS, Azure, firebase

## Getting Started

### Prerequisites

- Node.js and npm installed for frontend development.
- Python and poetry installed for backend development.
- PostgreSQL or SQLite installed and running.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Cozyamy/CraftConnect.git
cd CraftConnect
```

2. Install frontend dependencies:

```bash
cd Frontend
npm install
```

3. Install backend dependencies:

```bash
cd ../Backend
poetry shell
poetry install
```

### Running the Application

1. Start the backend server:

```bash
cd Backend
uvicorn main:app --reload
```

2. Start the frontend development server:

```bash
cd ../Frontend
npm run dev
```

3. Access the application in your browser at `http://localhost:3000`.