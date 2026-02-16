
# Accordion images section

A sleek two-column section featuring an interactive accordion on the left (or bottom on mobile) and a dynamic image placeholder area on the right. When an accordion item is selected, the corresponding placeholder image updates with a smooth transition.

## Features

-   **Interactive Accordion**: Smooth expand/collapse animations using CSS grid transitions.
-   **Dynamic Image Switching**: The image (or placeholder) updates based on the active accordion item with a fade/scale transition.
-   **Responsive Design**: Stacks vertically on mobile, side-by-side on desktop.
-   **Hover Effects**: Subtle opacity and color transitions for better user feedback.
-   **Clean Aesthetics**: Minimalist design with refined typography and spacing.

## Usage

```tsx
import NeuralDefense from '@/components/sections/accordion-images/NeuralDefense';

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <NeuralDefense />
    </div>
  );
}
```

## Dependencies

-   **Tailwind CSS**: For styling.
-   **Material Icons**: Requires `material-icons` font to be loaded (e.g., via Google Fonts in your `index.html` or `layout.tsx`).

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

-   **React**: Uses `useState`.

## Customization

-   **Items Data**: Modify the `items` array to change titles, descriptions, icons, and placeholder content.
-   **Placeholders**: The current implementation uses numbered gray placeholders. You can replace the placeholder `div` with an `<img />` tag inside the mapping loop to render actual images.
