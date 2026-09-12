# [BUSINESS NAME] — Tailoring & Embroidery Website

This is a simple, responsive website made for free GitHub Pages hosting. It uses only HTML, CSS, and JavaScript—no paid services or backend required.

## Before you publish: add your real details

Open `script.js` and edit the `business` section at the very top. Add your business name, phone number, email, area/city, and Google Maps link. The phone number should include the country code, for example `+919876543210`.

Then open `index.html` and use the browser’s search (`Ctrl + F`) to find square-bracket placeholders such as `[ADD OPENING HOURS]`, `[YOUR BUSINESS ADDRESS]`, and the About section text. Replace them with your own information.

The gallery intentionally contains no made-up business photos. To add one later, place image files in an `images` folder and change a gallery slot in `index.html` to an image, for example:

```html
<figure class="gallery-slot"><img src="images/my-outfit.jpg" alt="Description of the garment"></figure>
```

Add this to the end of `style.css` so images display neatly:

```css
.gallery-slot img { width: 100%; height: 100%; object-fit: cover; }
```

## Upload to your existing GitHub repository

Your public repository is `RITHAN-02.github.io`, so its website address will be `https://rithan-02.github.io/`.

1. Download or save these four files: `index.html`, `style.css`, `script.js`, and `README.md`.
2. Go to [github.com/RITHAN-02/RITHAN-02.github.io](https://github.com/RITHAN-02/RITHAN-02.github.io) and sign in.
3. Click **Add file**, then **Upload files**.
4. Drag all four files onto the page. They must be in the top level of the repository—not inside another folder.
5. Scroll down, write a short message such as `Add business website`, and click **Commit changes**.
6. Wait one or two minutes, then visit `https://rithan-02.github.io/`.

If the page does not appear after a few minutes: in the repository open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then click **Save**.

## Update the website later

1. Open the repository on GitHub.
2. Click the file you want to change, then click the pencil icon.
3. Make your edit and click **Commit changes** at the bottom.
4. Refresh your website after a minute or two. If you do not see the change, refresh with `Ctrl + F5`.

### Which file controls what?

- `index.html`: the words, sections, address, opening hours, and gallery layout.
- `style.css`: colours, spacing, fonts, and mobile appearance.
- `script.js`: business name, phone, WhatsApp, email, and directions link.
- `README.md`: these instructions.

## Important note about WhatsApp

The WhatsApp buttons only become active after you enter a real phone number in `script.js`. Use an international number with country code. For India, start with `+91`.
