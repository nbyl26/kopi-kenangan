# Tuku Landing Page

A premium scrollytelling experience for Tuku Coffee.

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
-   **Smooth Scrolling**: Powered by Lenis.
-   **Animations**: Framer Motion for text reveals and transitions.
-   **Responsive Design**: Mobile-optimized canvas scaling.

## Assets
Ensure the image sequence is located in `public/sequence/ezgif-frame-[i].jpg`.

## Troubleshooting
-   **Missing Styles**: 
    1. Stop server. 
    2. Run `rd /s /q .next` (Windows) or `rm -rf .next`. 
    3. Run `npm install`. 
    4. Run `npm run dev`.
-   **Canvas Errors**: Ensure images exist in `public/sequence`.
