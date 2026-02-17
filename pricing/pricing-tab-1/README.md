# Pricing Tab 1

A modern, clean pricing section with monthly/yearly toggle and featured plan highlighting.

## Preview

![Pricing Preview](preview.png)

## Installation

### 1. Install Dependencies

```bash
npm install framer-motion lucide-react @radix-ui/react-slot @radix-ui/react-tabs class-variance-authority tailwind-merge clsx
```

### 2. Add Tailwind Config & Styles

The component relies on specific color variables. Add the following to your `globals.css` or import the provided `styles.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 0%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 0%;
  --primary: 0 0% 0%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;
  --secondary-foreground: 0 0% 21%;
  --muted: 0 0% 96%;
  --muted-foreground: 0 0% 45%;
  --accent: 0 0% 96%;
  --accent-foreground: 0 0% 21%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 90%;
  --input: 0 0% 90%;
  --ring: 0 0% 70%;
  --radius: 0.75rem;
}

@theme inline {
  --animate-aurora: aurora 8s ease-in-out infinite alternate;
  @keyframes aurora {
    0% {
      background-position: 0% 50%;
      transform: rotate(-5deg) scale(0.9);
    }
    25% {
      background-position: 50% 100%;
      transform: rotate(5deg) scale(1.1);
    }
    50% {
      background-position: 100% 50%;
      transform: rotate(-3deg) scale(0.95);
    }
    75% {
      background-position: 50% 0%;
      transform: rotate(3deg) scale(1.05);
    }
    100% {
      background-position: 0% 50%;
      transform: rotate(-5deg) scale(0.9);
    }
  }
}
```

### 3. Usage

```tsx
import PricingTable from "./PricingTable";

const pricingPlans = [
    {
        title: "Starter",
        price: { monthly: 0, yearly: 0 },
        description: "For casual memory keepers",
        features: ["5GB cloud storage", "Basic AI search", "Standard albums", "Family sharing (up to 2 users)"],
        ctaText: "Get Started Free",
        ctaHref: "#",
        isFeatured: false
    },
    {
        title: "Memories Pro",
        price: { monthly: 9, yearly: 86 },
        description: "Our most popular plan for families",
        features: ["500GB cloud storage", "Advanced AI selection", "Personalized weekly bundles", "Family sharing (up to 6 users)", "RAW file support"],
        ctaText: "Start 14-day Trial",
        ctaHref: "#",
        isFeatured: true
    },
    {
        title: "Archive",
        price: { monthly: 24, yearly: 230 },
        description: "Unlimited storage for life",
        features: ["Unlimited cloud storage", "Priority AI rendering", "Physical album discounts", "Concierge search support", "Advanced encryption"],
        ctaText: "Go Unlimited",
        ctaHref: "#",
        isFeatured: false
    }
];

export default function PricingPage() {
    return (
        <div className="py-20 bg-white">
            <PricingTable plans={pricingPlans} />
        </div>
    );
}
```

## Features

- **Toggle Billing**: Seamless transition between monthly and yearly pricing.
- **Micro-animations**: Powered by Framer Motion.
- **Aurora Text**: Animated gradient text for discounts/highlights.
- **Responsive**: Fully optimized for mobile and desktop.
- **Accessible**: Built on Radix UI primitives.
