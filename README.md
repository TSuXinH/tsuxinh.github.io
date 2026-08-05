# Xinhong Xu — GitHub Pages website

A lightweight academic website inspired by the information architecture of [Lil'Log](https://lilianweng.github.io/) and the restrained card-based visual language of PaperMod. The implementation is original, dependency-free, and designed for direct GitHub Pages deployment.

## What is included

- responsive homepage with an academic introduction and professional links;
- dedicated Publications and visitor-statistics About pages;
- light/dark mode with saved user preference;
- RSS, sitemap, robots.txt, custom 404 page, and basic SEO metadata;
- original SVG artwork for the site identity and research figures;
- no Node, Ruby, Hugo, Jekyll, database, or build step.

## Deploy to GitHub Pages

GitHub requires a user-site repository to use the lowercase name matching your username. For the GitHub account `TSuXinH`, create:

```text
tsuxinh.github.io
```

### Method A — command line

1. Create an empty public repository named `tsuxinh.github.io` on GitHub.
2. Extract this package and open a terminal in the folder.
3. Run:

```bash
git init
git add .
git commit -m "Create personal academic website"
git branch -M main
git remote add origin git@github.com:TSuXinH/tsuxinh.github.io.git
git push -u origin main
```

4. Open the repository on GitHub.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then click **Save**.
8. The site will be available at `https://tsuxinh.github.io/`.

### Method B — GitHub web interface

1. Create the repository `tsuxinh.github.io`.
2. Choose **Add file → Upload files**.
3. Upload the *contents* of this folder, preserving subfolders.
4. Commit to `main`.
5. Configure **Settings → Pages → Deploy from a branch → main → /(root)**.

## Preview locally

Python is sufficient:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

Do not open `index.html` directly with `file://`, because the site uses root-relative links.

## Replace before public launch

1. **Publication links**
   Check the CalM repository link in `publications/index.html`. It currently assumes `https://github.com/TSuXinH/CalM`.

2. **CAPT status**
   The site currently uses the public status “arXiv preprint.” Update the venue only after you decide that it should be public.

3. **CV**
   Replace `assets/files/CV.pdf` with the latest version of your CV.

## Editing notes

- Homepage: `index.html`
- Publications: `publications/index.html`
- Visitor statistics: `about/index.html`
- CV: `assets/files/CV.pdf`
- Theme and layout: `assets/css/style.css`

## Design attribution

The site borrows broad layout ideas—compact navigation, introductory block, article cards, and theme switching—from Lilian Weng's public website and PaperMod. It does not copy her content, branding, generated code, or visual assets.
