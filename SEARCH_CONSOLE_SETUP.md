# Search Console & Webmaster Tools Operations Manual

**Target Domain:** `https://aradhy-jain-portfolio.vercel.app/`  
**Google Search Console Verification Status:** Active & Verified (HTML File + Meta Tag)  
**Verification File:** `/google80fa28b362283c56.html` (HTTP 200 OK)  
**Meta Tag:** `<meta name="google-site-verification" content="dGd6wgpc-PRWKzlt6iIg4Vx-XctikxGPd_6Q8-qoiIc"/>`  
**Sitemap Endpoint:** `https://aradhy-jain-portfolio.vercel.app/sitemap.xml`

---

## 1. Google Search Console Configuration Guide

### A. Sitemap Submission
1. Log in to [Google Search Console](https://search.google.com/search-console).
2. Select the property: `https://aradhy-jain-portfolio.vercel.app/`.
3. In the left navigation bar under **Indexing**, click **Sitemaps**.
4. In the "Add a new sitemap" input field, enter:
   ```text
   sitemap.xml
   ```
5. Click **Submit**.
6. Verify that the status reports **Success** and that all 19+ URLs are discovered.

### B. Core URLs Inspection & Indexing Priority
Use the top Search Console search bar (**URL Inspection**) to request indexing for priority pages:
1. `https://aradhy-jain-portfolio.vercel.app/` (Homepage)
2. `https://aradhy-jain-portfolio.vercel.app/freelance` (Commercial Landing Page)
3. `https://aradhy-jain-portfolio.vercel.app/projects/paras-metal` (Flagship E-commerce)
4. `https://aradhy-jain-portfolio.vercel.app/projects/sanmati-journal` (Academic Portal)
5. `https://aradhy-jain-portfolio.vercel.app/projects/dsr-college` (Institutional Portal)
6. `https://aradhy-jain-portfolio.vercel.app/projects/pravaah-upsc` (Educational Platform)
7. `https://aradhy-jain-portfolio.vercel.app/projects/jambudweep` (Heritage Center)

*Note:* Click **Test Live URL** first, confirm "URL is available to Google", then click **Request Indexing**.

### C. Performance & Diagnostics Monitoring
* **Performance Tab:** Filter by Queries, Pages, Countries, and Devices. Monitor initial impressions for brand queries ("Aradhy Jain", "Aradhy Jain portfolio") and commercial queries ("Next.js developer India", "Marketplace catalogue optimization").
* **Page Indexing Tab:** Check for any "Excluded" pages. Ensure only intentional non-pages (`/api/*`) are excluded.
* **Core Web Vitals:** Verify Good scores on LCP (Mobile < 2.5s), INP (< 200ms), and CLS (< 0.1).
* **Rich Results:** Inspect structured data for `ProfilePage`, `Person`, `WebSite`, and `TechArticle`.

---

## 2. Bing Webmaster Tools & IndexNow Configuration

### A. Import Property into Bing Webmaster Tools
1. Navigate to [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Sign in with Microsoft / Google account.
3. Choose **"Import your sites from Google Search Console"** (Fastest & recommended) OR enter `https://aradhy-jain-portfolio.vercel.app/` manually.
4. When prompted, select `https://aradhy-jain-portfolio.vercel.app/`. Verification carries over automatically.

### B. Bing Sitemap Submission
1. In the Bing Webmaster Tools sidebar, select **Sitemaps**.
2. Click **Submit sitemap**.
3. Submit: `https://aradhy-jain-portfolio.vercel.app/sitemap.xml`.

### C. IndexNow Setup (Instant Indexation for Bing, Seznam & Yandex)
IndexNow notifies search engines instantly whenever a URL is added or updated.
1. Generate an IndexNow key (e.g. 32-character hexadecimal key).
2. Place key file at `public/{key}.txt`.
3. Ping IndexNow API on publication:
   ```bash
   curl -i "https://api.indexnow.org/indexnow?url=https://aradhy-jain-portfolio.vercel.app/&key={key}"
   ```

---

## 3. Google Analytics 4 (GA4) + Search Console Association
1. In Google Analytics, navigate to **Admin** → **Product Links** → **Search Console Links**.
2. Click **Link** and select your Search Console web property `https://aradhy-jain-portfolio.vercel.app/`.
3. Select the Web Data Stream (`G-QDMZLRNP6B`).
4. Click **Review & Submit**.
5. This unlocks organic search queries, landing page acquisition, and Google organic search funnel reporting directly inside your GA4 reports under **Reports → Acquisition → Search Console**.
