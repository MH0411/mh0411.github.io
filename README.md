# Personal Portfolio — React + Vite

A clean, interactive developer portfolio built with React and Vite. Features a particle background, project carousels with lightbox, timeline-based experience section, and one-command deployment to GitHub Pages.

**Live demo:** [mh0411.github.io](https://mh0411.github.io)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Yarn](https://yarnpkg.com/) or npm

### 1. Clone the repo

```bash
git clone https://github.com/mh0411/mh0411.github.io.git
cd mh0411.github.io
git checkout source
```

> All source code lives on the `source` branch. The `main` branch is used for deployment only.

### 2. Install dependencies

```bash
yarn install
```

### 3. Start the dev server

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to preview.

---

## Customisation

All personal content is in one place — `src/data/resume.js`. Edit that file to update your own info.

### Personal info & hero section

Edit `src/components/Hero.jsx`:

```jsx
<h1>Your Name</h1>
<h2>Your Job Title</h2>
<p>Your description...</p>
```

### Profile photo

Replace `src/assets/me.jpg` with your own photo (keep the same filename or update the import in `Hero.jsx`).

### Resume data

Open `src/data/resume.js` and update:

| Export | What it controls |
|---|---|
| `EXPERIENCES` | Work history timeline |
| `SKILLS` | Skill tag groups |
| `SPOKEN_LANGUAGES` | Verbal languages |
| `PROJECTS` | Project cards |
| `CONTACT` | Contact links |
| `EDUCATION` | Education info (used in Skills badges) |

### Adding project screenshots

1. Drop your images into `src/assets/<project-folder>/`
2. Import them at the top of `src/components/Projects.jsx`:

```js
import img1 from '../assets/my-project/1.png'
import img2 from '../assets/my-project/2.png'
```

3. Add them to the `SCREENSHOTS` map using your project title as the key:

```js
const SCREENSHOTS = {
  'My Project Title': [img1, img2],
}
```

> Each project card supports multiple screenshots with a carousel and full-screen lightbox on click.

---

## Deployment to GitHub Pages

This project deploys to a `username.github.io` repository.

### 1. Create your GitHub Pages repo

Create a repo named exactly `<your-username>.github.io` on GitHub.

### 2. Update the homepage in `package.json`

```json
"homepage": "https://<your-username>.github.io"
```

### 3. Update the remote origin

```bash
git remote set-url origin https://github.com/<your-username>/<your-username>.github.io.git
```

### 4. Push source code

```bash
git push origin source
```

### 5. Deploy

```bash
yarn deploy
```

This builds the project and pushes the output to the `main` branch automatically.

### 6. Configure GitHub Pages

Go to your repo on GitHub → **Settings → Pages** and set:
- Source: **Deploy from a branch**
- Branch: **main** / `/ (root)`

Your portfolio will be live at `https://<your-username>.github.io` within a minute.

---

## Project Structure

```
src/
├── components/       # UI components (Navbar, Hero, Experience, etc.)
├── data/
│   └── resume.js     # All personal content — edit this file
├── styles/
│   ├── global.css    # Design tokens and shared styles
│   └── components/   # Per-component CSS files
├── assets/           # Images (profile photo, project screenshots)
└── App.jsx           # Root layout
```

---

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment
