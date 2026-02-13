# Kopi-Kenangan Landing Page

A premium scrollytelling experience for Kopi-Kenangan Coffee.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open Browser**:
    Visit [http://localhost:3000](http://localhost:3000)

## Features
-   **Sequence Scroll**: 400vh scroll-linked animation using HTML5 Canvas.
-   **Smooth Scrolling**: Powered by Lenis with smooth 60fps rendering.
-   **Animations**: Framer Motion for text reveals and transitions.
-   **Responsive Design**: Mobile-optimized canvas scaling.
-   **Accessibility**: WCAG 2.1 compliant with keyboard navigation and ARIA labels.
-   **SEO Optimized**: Enhanced metadata and proper semantic HTML.

## Assets
Ensure the image sequence is located in `public/sequence/ezgif-frame-[i].jpg`.

## Recent Improvements (Feb 2026) ✨
-   **⚡ Smooth 60fps Scrolling**: Optimized rendering with requestAnimationFrame
-   **♿ Accessibility**: Added ARIA labels, keyboard navigation, and screen reader support
-   **🔷 TypeScript**: Removed all `any` types, added proper type definitions
-   **🔍 SEO**: Enhanced metadata, OpenGraph, Twitter cards, and robots.txt

See [CODE_REVIEW_REPORT.md](CODE_REVIEW_REPORT.md) for detailed changelog.

## Troubleshooting
-   **Missing Styles**: 
    1. Stop server. 
    2. Run `rd /s /q .next` (Windows) or `rm -rf .next`. 
    3. Run `npm install`. 
    4. Run `npm run dev`.
-   **Canvas Errors**: Ensure images exist in `public/sequence`.
