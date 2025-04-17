
# Concept React Theme Development Plan

## Project Architecture

```
concept-react/
├── components/
│   ├── layout/           # Layout components
│   ├── ui/               # Reusable UI components
│   ├── home/             # Home page specific components
│   ├── product/          # Product page components
│   ├── collection/       # Collection page components
│   └── shared/           # Shared components across pages
├── pages/                # Next.js pages
├── hooks/                # Custom hooks
├── context/              # Context providers
├── lib/                  # Utility functions
└── styles/               # Global styles
```

## Layout Components

These components will be used across all pages:

### 1. Layout (`components/layout/Layout.tsx`)
- **Description**: Main wrapper for all pages, includes global components
- **Children**:
  - AnnouncementBar
  - Header
  - Main content (children prop)
  - Footer
  - NewsletterPopup
  - AgeVerification
  - CartDrawer
  - SearchDrawer
  - CookieBanner
  - MobileDock

### 2. Header Components

#### AnnouncementBar (`components/layout/AnnouncementBar.tsx`)
- Simple banner with promotional messages

#### Header (`components/layout/Header.tsx`)
- **Description**: Main navigation with logo, links, and icons
- **Children**:
  - Logo
  - Navigation (with MegaMenu)
  - HeaderIcons (cart, search, account)

#### MegaMenu (`components/layout/MegaMenu.tsx`)
- Expandable navigation for categories

### 3. Footer (`components/layout/Footer.tsx`)
- Site-wide footer with links and info

### 4. Overlay Components

#### NewsletterPopup (`components/layout/NewsletterPopup.tsx`)
- Modal for newsletter signup

#### AgeVerification (`components/layout/AgeVerification.tsx`)
- Age verification popup

#### CartDrawer (`components/layout/CartDrawer.tsx`)
- Slide-out cart panel

#### SearchDrawer (`components/layout/SearchDrawer.tsx`)
- Slide-out search panel

#### CookieBanner (`components/layout/CookieBanner.tsx`)
- Cookie consent notification

#### MobileDock (`components/layout/MobileDock.tsx`)
- Mobile navigation bar fixed at bottom

## Shared UI Components

### 1. ProductCard (`components/ui/ProductCard.tsx`)
- Reusable product card for grids and collections

### 2. Button (`components/ui/Button.tsx`)
- Customizable button component

### 3. ScrollingText (`components/ui/ScrollingText.tsx`)
- Animated text ticker

### 4. Countdown (`components/ui/Countdown.tsx`)
- Timer component for promotions

### 5. Carousel (`components/ui/Carousel.tsx`)
- Reusable slider/carousel

## Home Page Components

### 1. HeroSection (`components/home/HeroSection.tsx`)
- Full-width banner/slider

### 2. RichText (`components/home/RichText.tsx`)
- Formatted text section

### 3. CollectionList (`components/home/CollectionList.tsx`)
- **Children**:
  - CollectionCard (multiple)

### 4. FeaturedProduct (`components/home/FeaturedProduct.tsx`)
- Highlighted product display

### 5. ImageComparison (`components/home/ImageComparison.tsx`)
- Before/after image slider

### 6. ProductBundle (`components/home/ProductBundle.tsx`)
- Grouped products for package deals

### 7. ShopTheFeed (`components/home/ShopTheFeed.tsx`)
- Social media integration with shopping

### 8. BestSellers (`components/home/BestSellers.tsx`)
- **Children**:
  - ProductCard (multiple)

### 9. ScrollingLogos (`components/home/ScrollingLogos.tsx`)
- Brand/partner logos carousel

### 10. TestimonialsBanner (`components/home/TestimonialsBanner.tsx`)
- Customer reviews display

### 11. CollapsibleContent (`components/home/CollapsibleContent.tsx`)
- Expandable sections

### 12. BlogPostList (`components/home/BlogPostList.tsx`)
- **Children**:
  - BlogPostCard (multiple)

## Collection Page Components

### 1. CollectionHero (`components/collection/CollectionHero.tsx`)
- Collection title and description

### 2. ProductGrid (`components/collection/ProductGrid.tsx`)
- **Description**: Grid layout for products
- **Children**:
  - ProductCard (multiple)

### 3. FilterSort (`components/collection/FilterSort.tsx`)
- Product filtering and sorting controls

## Product Page Components

### 1. ProductInfo (`components/product/ProductInfo.tsx`)
- **Description**: Main product details section
- **Children**:
  - ProductGallery
  - ProductDetails
  - ProductForm (add to cart, buy now)

### 2. VideoHero (`components/product/VideoHero.tsx`)
- Featured product video

### 3. CollageOnScroll (`components/product/CollageOnScroll.tsx`)
- Scrolling image collage effect

### 4. ImageWithText (`components/product/ImageWithText.tsx`)
- Image and text layout

### 5. ProductDetails (`components/product/ProductDetails.tsx`)
- Detailed specifications tabs/accordion

### 6. FAQ (`components/product/FAQ.tsx`)
- Frequently asked questions

### 7. RelatedProducts (`components/product/RelatedProducts.tsx`)
- **Children**:
  - ProductCard (multiple)

### 8. RecentlyViewed (`components/product/RecentlyViewed.tsx`)
- Recently viewed products carousel

## Other Pages

### 1. Contact (`pages/contact.tsx`)
- Contact form and info

### 2. OurStory (`pages/our-story.tsx`)
- About page

### 3. Journal (`pages/journal.tsx`)
- Blog listing page

### 4. FAQPage (`pages/faq.tsx`)
- Dedicated FAQ page

## Implementation Order

1. Set up project with Next.js and TailwindCSS
2. Create base layout components (Layout, Header, Footer)
3. Build core UI components (Button, ProductCard, etc.)
4. Implement home page sections
5. Build collection and product page components
6. Add overlay components (Cart, Search, etc.)
7. Implement remaining pages
8. Add animations and interactivity
