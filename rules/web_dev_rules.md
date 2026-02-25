# Website Development & Audit Guidelines

This document outlines the strict rules and best practices for website development. These rules must be applied when generating code, auditing existing sites, or designing UI components.

## 1. Hero Section & Value Proposition
* **The 5-Second Rule:** The hero section must clearly answer "What do you offer?" within 5 seconds.
* **Headline:** Must be specific and benefit-driven (e.g., "Accounting for Small Businesses in Sofia" instead of "Welcome"). Avoid generic terms like "High Quality" or "Professional Solutions".
* **Subheadline:** Must explain *how* the problem is solved and include a specific result or timeframe (e.g., "Double your sales in 30 days").
* **Target Audience:** Explicitly mention who the service is for (e.g., "For shop owners").

## 2. Call to Action (CTA) Implementation
* **Primary CTA:**
    * Must be visually distinct (contrasting color) and placed prominently in the Hero section.
    * **Labeling:** Use specific action verbs (e.g., "Get Free Audit," "Book Consultation") rather than generic "Submit" or "Click here."
* **Secondary CTA:** Provide a lower-commitment alternative (e.g., "See Pricing," "Read Case Study") near the primary button.
* **Placement:** Ensure CTAs are accessible without scrolling on mobile devices.

## 3. Technical Performance (Speed & Core Web Vitals)
* **Load Time Target:** Under 3 seconds on mobile networks (3G/4G).
* **Image Optimization:**
    * **Format:** Use Next-Gen formats (AVIF, WebP) with JPEG fallback.
    * **Size Limits:** Aim for <200KB per image; absolute max 500KB for large hero banners.
    * **Dimensions:** Never load an image larger than its display container (e.g., do not load a 2000px width image for a 400px card).
    * **Lazy Loading:** Implement `loading="lazy"` for all images below the fold.
* **Caching:** Ensure browser caching and Gzip/Brotli compression are enabled.

## 4. Mobile Responsiveness (Mobile-First)
* **Typography:** Body text must be minimum **16px** to prevent zooming/eye strain.
* **Touch Targets:** All interactive elements (buttons, links, inputs) must be at least **44x44px** with 8px spacing between them.
* **Layout:**
    * No horizontal scrolling allowed.
    * Content must stack vertically.
    * Input fields must not zoom the viewport on focus.
* **Mobile Menu:** Must have a clear trigger icon (hamburger), occupy at least 80% of the screen when open, and include a "Close" (X) button.

## 5. Security & Compliance
* **GDPR/Cookies:**
    * **Consent Banner:** Must block non-essential cookies (Analytics, Marketing) *before* consent is given.
    * **Options:** Must offer "Accept Selected," "Decline All," and "Customize" (not just "OK").
    * **Google Consent Mode v2:** Must be implemented for Ads compatibility.
    * **Privacy Policy:** Must be linked from the banner and footer.

## 6. Navigation & Structure
* **Menu Limit:** Adhere to the "7 ± 2" rule. Maximum 7 main menu items.
* **Naming:** Use standard naming conventions (Services, Pricing, Contact, About) rather than creative jargon.
* **Hierarchy:** Max 2 levels of depth (Main > Submenu). Do not use Level 3 menus.
* **Contact Visibility:**
    * **Header:** Phone number (clickable `tel:` link).
    * **Footer:** Full address, email, phone, and opening hours.

## 7. Typography & Readability
* **Line Length:** Limit text block width to **60-70 characters** per line for readability.
* **Alignment:** Always **Left-Align** body text. Never Center-align (except headings) or Justify long blocks of text.
* **Paragraphs:** Keep paragraphs short (3-4 sentences max).
* **Hierarchy:** Strict use of `<h1>` (one per page), `<h2>`, and `<h3>` tags for structure.

## 8. SEO Fundamentals
* **Title Tags:** Must be unique for every page. Formula: `[Keyword] + [Location] + [Brand Name]`.
* **Meta Descriptions:** Unique, 150-160 characters, must include a call to action.
* **Headings:** Include primary keywords naturally in H1 and H2 tags.

## 9. Design System & Branding
* **Consistency:**
    * **Colors:** Limit to 3-5 colors (Primary, Secondary, Neutral, Accent).
    * **Fonts:** Max 2-3 font families total (e.g., one for Headings, one for Body).
    * **Buttons:** Uniform border-radius, padding, and hover states across the site.
* **Logo:** Always linked to Home, visible on all pages (Header Left/Center).

## 10. Accessibility (A11y)
* **Contrast Ratio:** Minimum **4.5:1** for normal text and **3:1** for large text/UI components.
* **Keyboard Navigation:** All elements must be focusable (Tab) and actionable (Enter) without a mouse. Visual focus indicators must be visible.
* **Alt Text:** All informational images must have descriptive `alt` attributes. Decorative images must have `alt=""`.

## 11. Trust Signals (Social Proof)
* **Testimonials:** Must include specific results (numbers/percentages), real names, and roles. Avoid generic "Great service" reviews.
* **About Page:** Must exist. Must include real photos of the team/owner (no stock photos of people shaking hands).
* **Badges:** Display security badges (SSL), payment logos, and professional certifications/awards.