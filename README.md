# Tuğçe Uygur Portfolio

A modern, responsive portfolio website built with React, Node.js, and MongoDB.

## Features

- **Modern Design**: Beautiful purple and pink gradient theme with glassmorphism effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Content**: Projects automatically fetched from GitHub API
- **Real-time Updates**: Live project data from GitHub repositories
- **Smooth Animations**: Elegant hover effects and transitions

## Tech Stack

### Frontend
- React 19
- Vite
- CSS3 with modern features (backdrop-filter, gradients)
- Inter font family

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

### Infrastructure
- Docker & Docker Compose
- MongoDB container
- Nginx (for production)

## Getting Started

### Prerequisites
- Docker and Docker Compose installed
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tugce-portfolio
```

2. Start the application:
```bash
docker-compose up --build
```

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
├── frontend/          # React application
│   ├── src/
│   │   ├── App.jsx    # Main application component
│   │   ├── App.css    # Styling with modern CSS
│   │   └── main.jsx   # Application entry point
│   ├── public/        # Static assets
│   └── package.json   # Frontend dependencies
├── backend/           # Node.js API server
│   ├── models/        # MongoDB schemas
│   ├── index.js       # Express server
│   └── package.json   # Backend dependencies
└── docker-compose.yml # Container orchestration
```

## Features

### About Section
- Professional introduction
- Skills and expertise overview

### Projects Section
- Automatic GitHub repository fetching
- Project details including:
  - Repository name and description
  - Programming language
  - Star and fork counts
  - Last update date
  - Direct GitHub links

### Contact Section
- Professional contact information
- Social media links
- Email contact

## Customization

### Colors
The application uses a beautiful purple and pink gradient theme:
- Primary: `#8a2be2` (BlueViolet)
- Secondary: `#da70d6` (Orchid)
- Background: `#1a0b2e` to `#4a1b6a` gradient
- Accent: `#e6b3ff` (Light purple)

### Content
- Update personal information in `frontend/src/App.jsx`
- Modify GitHub username to fetch different repositories
- Customize styling in `frontend/src/App.css`

## Development

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
npm install
npm run dev
```

## Deployment

The application is containerized and ready for deployment:

```bash
docker-compose up --build -d
```

## License

This project is licensed under the ISC License.

## Author

**Tuğçe Uygur**
- GitHub: [@Tuucelitto](https://github.com/Tuucelitto)
- Portfolio: [Live Demo](http://localhost:3000)
