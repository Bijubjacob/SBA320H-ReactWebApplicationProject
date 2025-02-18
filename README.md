Here is a basic **README** for your project:

---

# React Photo Gallery App

A simple React application that showcases a gallery of curated photos fetched from the Pexels API, with routes for the Home page, About page, and a Pexels photo gallery. The app features a responsive navigation bar, routing between pages, and dynamic fetching of photos based on page numbers.

## Features:
- Home Page
- About Page
- Pexels Photo Gallery (fetched dynamically from the Pexels API)
- Responsive Navigation Menu with Hamburger Icon
- Footer with copyright information

---

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** and **npm** installed on your machine.
- A code editor (e.g., [VS Code](https://code.visualstudio.com/)).

You can check if you have Node.js and npm installed by running:

```bash
node -v
npm -v
```

## Installation

Follow these steps to get your development environment set up.

1. **Clone the repository:**

```bash
git clone https://github.com/Bijubjacob/SBA320H-ReactWebApplicationProject
```

2. **Navigate to your project directory:**

```bash
cd SBA320H-ReactWebApplicationProject
```

3. **Install dependencies:**

```bash
npm install
```

This will install all the required dependencies for your React app, including `react-router-dom` for routing and `axios` for API requests.

---

## Project Structure

The project structure is as follows:

```
/react-photo-gallery
├── /public
│   └── index.html            # Root HTML file
├── /src
│   ├── /components
│   │   ├── /Footer.jsx       # Footer component
│   │   ├── /Header.jsx       # Header component
│   │   ├── /Navigation.jsx   # Navigation bar component
│   ├── /components/Views
│   │   ├── /Home.jsx         # Home page
│   │   ├── /About.jsx        # About page
│   │   ├── /Pexels.jsx      # Pexels gallery page
│   ├── /App.css              # Global styles
│   ├── /App.js               # Main app component with routing
├── /package.json             # Project dependencies and scripts
└── /README.md                # Project documentation
```

---

## Running the Application

1. **Start the development server:**

```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## API Integration

This app integrates with the **Pexels API** to fetch curated photos.

To run the app and see photos in the gallery, make sure to **replace the API key** with your own from [Pexels](https://www.pexels.com/api/). 

Replace this line in the `Pexels.jsx` component:

```js
Authorization: 'YOUR_PEXELS_API_KEY',
```

---

## Available Routes

- **Home** - `/`  
  Displays the home page with basic app information.

- **About** - `/about`  
  Displays the "About Us" page.

- **Pexels Photo Gallery** - `/pexels/:id`  
  Displays a page with curated photos from the Pexels API. The `id` in the URL corresponds to the page number of the gallery.

---

## Customizing the Application

- **Header and Navigation:**
  - The header displays the app name and includes a responsive navigation menu with a hamburger icon.
  - You can modify the navigation items in the `Navigation.jsx` file.

- **Footer:**
  - The footer contains a simple copyright message and is located in the `Footer.jsx` file.

- **Styling:**
  - The app uses basic CSS for layout and styling. You can customize the look and feel by modifying the `App.css`, `Header.css`, and `Footer.css` files.

---

---

## Contact

For any issues or inquiries, feel free to contact [BIJU JACOB](bijubjacob@gmail.com).
