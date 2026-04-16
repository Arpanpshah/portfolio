# Arpan Shah — iOS Developer Portfolio

A clean, modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for deployment on GitHub Pages.

## 🚀 Live Demo

> Once deployed, your site will be at: `https://<your-username>.github.io/<repo-name>/`

---

## 📁 Folder Structure

```
portfolio/
├── index.html       # Main HTML file (all sections)
├── styles.css       # All styles, CSS variables, dark/light mode
├── script.js        # Navbar, scroll reveal, theme toggle, animations
└── README.md        # This file
```

---

## 🛠️ How to Deploy on GitHub Pages

### Option 1 — New Repository (Recommended)

1. **Create a new GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `portfolio` (or anything you like)
   - Keep it **public**
   - Click **Create repository**

2. **Upload the files**
   - Click **Add file → Upload files**
   - Drag and drop `index.html`, `styles.css`, and `script.js`
   - Click **Commit changes**

3. **Enable GitHub Pages**
   - Go to **Settings → Pages**
   - Under **Source**, choose `main` branch and `/ (root)` folder
   - Click **Save**
   - Your site will be live in ~1 minute at the URL shown

### Option 2 — Using Git CLI

```bash
# Clone your new repo
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Copy the portfolio files into this folder, then:
git add .
git commit -m "Initial portfolio deploy"
git push origin main
```

Then follow step 3 above to enable Pages.

---

## ✨ Features

- 🌙 **Dark / Light mode** — toggles and persists preference in localStorage
- 📱 **Fully responsive** — mobile, tablet, and desktop layouts
- 🎬 **Scroll reveal animations** — sections animate in as you scroll
- 🔵 **Active nav highlighting** — nav link highlights for current section
- ⚡ **Zero dependencies** — no frameworks, no build step needed
- 🔍 **SEO-ready** — meta description, keywords, og tags included

---

## 🎨 Customization Tips

| What to change | Where |
|---|---|
| Your name & title | `index.html` — Hero section |
| Color accent | `styles.css` — `--accent` CSS variable |
| Font family | `styles.css` — `--font-display`, `--font-body`, `--font-mono` |
| Projects | `index.html` — Projects section `.projects-grid` |
| GitHub / LinkedIn URL | `index.html` — Contact section |
| Dark mode default | `index.html` — `<html data-theme="dark">` → change to `"light"` |

---

## 📬 Contact

Built by **Arpan Shah** — Senior iOS Developer based in Mississauga, ON.

- 📧 arpan19892@gmail.com
- 🔗 [linkedin.com/in/arpanshah19](https://www.linkedin.com/in/arpanshah19/)
- 📞 (437) 556-0567
