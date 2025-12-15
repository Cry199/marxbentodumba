# Marx Bento Dumbá - Video Editor Portfolio

A modern, high-performance portfolio website for a Short Form Video Specialist, built with React and Vite.

## 🚀 Overview

This application serves as a professional showcase for Marx Bento Dumbá, highlighting expertise in "High Retention Short Form Content" such as Reels, TikToks, and Shorts. It features a cinematic dark aesthetic, seamless navigation, and direct video playback capabilities.

## ✨ Features

- **Professional Home Page**: Immersive landing page with a focus on "Short Form" specialization.
- **Dynamic Portfolio**:
  - **Categorized Tabs**: Filter projects by "Clientes" (Clients) or "Hobby & Aprimoramento" (Personal Work).
  - **Video Modal**: Integrated player to watch videos directly (with Google Drive integration).
  - **Smart Thumbnails**: Automatically fetches video previews from Google Drive.
- **Responsive Design**: Fully optimized for mobile and desktop viewing.
- **Social Integration**: Direct links to Instagram and LinkedIn for easy contact.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: Native CSS (Variables, Flexbox/Grid, Animations)
- **Fonts**: [Google Fonts (Outfit)](https://fonts.google.com/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marxbentodumba
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

## 📝 Customization

### Adding Projects
Edit `src/features/portfolio/pages/PortfolioPage.tsx`:
```javascript
{
    id: 9,
    title: "New Project",
    category: "Reels",
    type: "client",
    image: "https://drive.google.com/thumbnail?id={VIDEO_ID}&sz=w800",
    description: "Description of the project.",
    videoEmbedUrl: "https://drive.google.com/file/d/{VIDEO_ID}/preview"
}
```

### Changing Links
Links are managed in `HomePage.tsx` and can be updated to point to new social profiles or contact pages.

## � Author

Developed by **[Cry199](https://github.com/Cry199)**.

## �📄 License
All Rights Reserved © 2025 Marx Bento Dumbá.
