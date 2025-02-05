
# ServeWISH

**ServeWISH** is a dynamic service portal that connects users with various service providers. It allows users to explore, review, and choose services based on their preferences, making service discovery seamless and efficient.

## Live Demo
[Visit ServeWISH](https://servewish-d87ca.web.app/)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
- 🔍 **Explore Services** – Browse a variety of services tailored to user needs.
- 📄 **Service Detail Pages** – View in-depth details about each service.
- ⭐ **User Reviews** – Add and read reviews on different services.
- 🛠 **Service Management** – Users can add and manage their services.
- 🎨 **Theming Support** – Dark mode available via `next-themes`.
- ⚡ **Interactive UI** – Smooth animations and modern design.

## Technologies Used

### Frontend
- **React.js** – UI development
- **Chakra UI** & **Material Tailwind** – Component styling
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Smooth animations
- **React Router DOM** – Client-side routing
- **React Icons** – Icon library
- **SweetAlert2** – Elegant alert modals
- **Swiper** – Interactive carousels

### Backend
- **Firebase** – Authentication & database

### State Management & Utilities
- **Axios** – API requests
- **React Query** – Data fetching and caching
- **LocalForage** – Offline storage

## Installation

### Prerequisites
Ensure you have:
- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed
- [Vite](https://vitejs.dev/) for development

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/servewish.git
   cd servewish
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Build the project**
   ```sh
   npm run build
   ```

5. **Preview production build**
   ```sh
   npm run preview
   ```

## Usage
- Run `npm run dev` to start the development server.
- Open `http://localhost:5173/` in your browser.

## Configuration
Create a `.env.local` file and configure Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## Contributing
Contributions are welcome!  
To contribute:
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

