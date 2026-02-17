# 3 Horizontal Cards with Grainient Backgrounds

A modern, responsive grid of three cards designed for showcases, case studies, or feature highlights. Each card features a beautiful WebGL-powered "Grainient" background in the header and a clean, spacious body.

## Features
- **Dynamic Headers**: Integrated WebGL "Grainient" backgrounds that are customizable per card.
- **Responsive Layout**: Automatically switches to a single column layout at the `lg` breakpoint to ensure content legibility on all devices.
- **Premium Typography**: Clean and focused typography with refined spacing.
- **Interactive Buttons**: High-contrast call-to-action buttons with `whitespace-nowrap` to ensure consistent presentation across breakpoints.
- **Hover Effects**: Subtle scaling and opacity transitions for an interactive feel.

## Usage

1. **Place Dependencies**: Ensure `Grainient.tsx` is in the same directory as `PremiumBrands.tsx`.
2. **Import Material Icons**: This component uses Google Material Icons for the card headers. Add the following to your HTML head or layout:
   ```html
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   ```
3. **Component Usage**:
   ```tsx
   import PremiumBrands from './cards/3-cards-horizontal/PremiumBrands';

   function Showcase() {
     return (
       <div className="container mx-auto p-8">
         <PremiumBrands />
       </div>
     );
   }
   ```

## Customization
- **Grid Layout**: The grid is currently set to `lg:grid-cols-3` for desktop.
- **Padding**: Internal card padding is set to `p-6` for a compact look.
- **Backgrounds**: Modify the `gradient` object in the `brands` array within `PremiumBrands.tsx` to change individual card header colors.
