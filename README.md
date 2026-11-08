# Yukon Ventures — yukonvllc.com

The official one-page website for Yukon Ventures. Built with React, TypeScript, Vite and Tailwind CSS. There is no shop on this site: every store button opens the real marketplace store (Poshmark, eBay, Walmart Marketplace) in a new tab.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open the "Local" address it prints (for example http://localhost:5173). The "Network" address works from a phone on the same Wi-Fi.

To test the finished site exactly as it will go live:

```bash
npm run build
npm run preview
```

---

## Editing the website

**All text, links and image paths live in one file: `src/content/siteContent.ts`.** You never need to touch the other files to change content. The top of that file explains each change step by step; the short version:

| What | Where in `siteContent.ts` |
| --- | --- |
| Hero heading, subheading, intro, buttons | `hero` |
| About Us text, Mission, Vision | `about` |
| Product categories | `categories` (copy a `{ … }` block to add one) |
| Online stores | `stores` (copy a `{ … }` block to add one) |
| Email and phone | `contact` |
| Social media | `social` |
| Privacy Policy and Terms | `legal` (also set `lastUpdated`) |
| SEO keywords | `seo` |

The page title, description and Google/social-sharing tags are in `index.html` (top of the file).

### Add the Walmart store link

At the top of `src/content/siteContent.ts`:

```ts
/** Paste the official Walmart seller store link here */
export const WALMART_URL = "https://www.walmart.com/global/seller/…"
```

Save. The Walmart card's "Store Link Coming Soon" button becomes "Visit Our Walmart Store" and the footer link appears automatically. Also add the link to the `sameAs` list in `index.html` so Google connects the store to the business.

### Add social media links

In `src/content/siteContent.ts`, fill in any of:

```ts
social: {
  instagram: "https://www.instagram.com/yourname",
  facebook: "",
  tiktok: "",
  pinterest: "",
},
```

Icons appear in the Contact section and footer only for links that are filled in.

### Replace images

- **Section photos** live in `public/images/`. Each one exists in three widths (`-480`, `-800`, `-1200`) so phones download small files. To use a new photo, either save it as the same three file names (4:5 portrait, WebP or JPG), or put a single file in `public/images/` and set its `image` to that exact path, e.g. `image: "/images/my-photo.jpg"`. Always update the matching `alt` text.
- **Hero image** (top of the page): `public/hero/yukon-hero-desktop.webp` (wide, about 2400×1340) and `public/hero/yukon-hero-mobile.webp` (portrait, about 1080×1350). The liquid effect cuts the products out of the background by colour, so a replacement must have a **plain, evenly lit, light background** that matches the page ivory (#FAF8F4). Keep the products in the middle, with empty space around them, and avoid brand names or logos.
- **Social sharing image:** `public/og-image.jpg` (1200×630).
- **Logo:** the logo is drawn in code (`src/components/Logo.tsx`). To use a logo file instead, replace that component's contents with an `<img>` as described in the comment there.

Current section photos are from Unsplash (free licence, no attribution required) and were checked to contain no visible brand names or logos: photo-1640246944367, photo-1631125915902, photo-1733660227163, photo-1707539160277, photo-1635094420131, photo-1682823544433, photo-1610080775449.

---

## Contact form (Web3Forms)

Messages from the contact form are delivered by [Web3Forms](https://web3forms.com), a free form service, to the inbox of the email that created the key.

1. Go to https://web3forms.com, enter **yukonvllc@gmail.com** and click "Create Access Key".
2. Open the email from Web3Forms and copy the access key.
3. For local testing: copy `.env.example` to `.env` and paste the key:
   ```
   VITE_WEB3FORMS_KEY=your-access-key
   ```
4. On Netlify: **Site configuration → Environment variables → Add a variable**, name `VITE_WEB3FORMS_KEY`, value = the key. Then redeploy (Deploys → Trigger deploy).

The key only allows sending to your own inbox, so it is safe in the browser, but keep `.env` out of Git (it already is). Until a key is set, the form shows the "please email us directly" message.

---

## Deploy to Netlify with yukonvllc.com

1. Put this folder on GitHub (or GitLab/Bitbucket).
2. In Netlify: **Add new site → Import an existing project**, pick the repository. The settings are read from `netlify.toml` (build command `npm run build`, publish folder `dist`).
3. Add the `VITE_WEB3FORMS_KEY` environment variable (see above) and deploy.
4. **Domain:** Site configuration → Domain management → Add a domain → `yukonvllc.com`. Netlify shows the DNS records to add at your domain registrar (or move the domain's nameservers to Netlify DNS, the simplest option). Add `www.yukonvllc.com` too; Netlify redirects it to the main domain.
5. **HTTPS:** once DNS is working, Netlify issues a free Let's Encrypt certificate automatically (Domain management → HTTPS). Turn on "Force HTTPS" if it is not on.

Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) are set in `public/_headers`.

---

## Notes for developers

- `src/components/ui/liquid-sculpture-hero.tsx` is the WebGL hero by guglielmogiannattasio.it, extended with `subheading` and `ctas` props. Its author credit is kept on the page; remove `showCredit` in `src/components/Hero.tsx` only after confirming the component's licence allows it.
- The production build prerenders the page to static HTML (`scripts/prerender.mjs`) so text and the hero image appear before JavaScript runs.
- In development, add `?nowebgl` to the URL to test the hero's static-image fallback.
- Lighthouse on the production build (local): mobile 97 / 100 / 100 / 100, desktop 100 / 100 / 100 / 100 (Performance / Accessibility / Best Practices / SEO).
