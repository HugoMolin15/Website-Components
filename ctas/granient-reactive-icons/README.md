# Gradient Reactive Icons CTA

A Call to Action component with a dynamic WebGL gradient background and interactive floating icons that repel from the cursor.

## Preview

A dark-themed CTA with a fluid background and floating icons that gently move away when you hover near them.

## Installation

1.  **Dependencies**: ensure you have the following installed:
    ```bash
    npm install framer-motion ogl clsx tailwind-merge
    ```

2.  **Files**:
    *   `GradientReactiveIcons.tsx`: The main component.
    *   `Grainient.tsx`: The WebGL background component.
    *   `FloatingIcons.tsx`: The interactive icon logic.

3.  **Usage**:

    ```tsx
    import GradientReactiveIconsCTA from './GradientReactiveIcons';

    export default function Page() {
      return (
        <div>
          <GradientReactiveIconsCTA />
        </div>
      )
    }
    ```

## Customization

*   **Icons**: Modify `defaultIcons` in `GradientReactiveIcons.tsx` to use your own SVGs or components.
*   **Colors**: Adjust the `Grainient` props in `GradientReactiveIcons.tsx` to change the background colors (`color1`, `color2`, `color3`).
*   **Text**: Update the `<h2>` and `<p>` tags in `GradientReactiveIcons.tsx`.
