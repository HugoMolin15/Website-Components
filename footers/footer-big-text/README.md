# Footer with Big Text Reveal

A modern, minimal footer featuring a "sticky reveal" effect and large background typography.

## Preview

The footer reveals itself as you scroll down, with large italicized "Big Text" at the bottom.

## Installation

### 1. Install Dependencies

```bash
npm install lucide-react
```

### 2. Usage

```tsx
import { Footer } from "./Footer";

export default function Layout({ children }) {
    return (
        <main>
            {children}
            <Footer />
        </main>
    );
}
```

## Features

- **Sticky Reveal Effect**: Uses CSS `clip-path` and `sticky` positioning to create a smooth reveal animation as the user scrolls to the bottom of the page.
- **Large Typography**: Features massive italicized text (14vw) for a bold brand statement.
- **Responsive Grid**: Automatically adapts from a multi-column layout on desktop to a stacked layout on mobile.
- **Micro-interactions**: Hover effects on links and social icons.
- **Newsletter Input**: Minimal integrated subscription form.
