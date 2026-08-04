# Deployment checklist

## First deployment

- [ ] Create public repository `tsuxinh.github.io`.
- [ ] Push all files to the `main` branch.
- [ ] Open **Settings → Pages**.
- [ ] Select **Deploy from a branch**.
- [ ] Select **main** and **/(root)**.
- [ ] Open `https://tsuxinh.github.io/`.

## Before sharing publicly

- [ ] Replace profile artwork or confirm it is acceptable.
- [ ] Replace gallery placeholders with real images.
- [ ] Verify all publication and code links.
- [ ] Update CAPT status.
- [ ] Review public contact information.
- [ ] Check mobile layout and dark mode.
- [ ] Use the CV page's Print function to verify PDF output.

## Updating the site later

Edit files, then run:

```bash
git add .
git commit -m "Update website"
git push
```

GitHub Pages republishes the branch after each push.
