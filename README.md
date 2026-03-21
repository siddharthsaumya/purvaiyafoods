# Spice Blends - Premium Luxury Spice Website

A modern, responsive static website showcasing premium artisanal spice blends with an emphasis on authenticity, quality, and culinary heritage.

## 📁 Project Structure

```
ecom/
├── index.html                 # Home page - Hero, featured blends, philosophy
├── pages/
│   ├── philosophy.html        # Brand philosophy & values
│   ├── collection.html        # Complete spice collection with filters
│   ├── recipes.html          # Recipe ideas and cooking guides
│   ├── craft.html            # The art of spice blending process
│   ├── community.html        # Community stories & testimonials
│   ├── shop.html             # E-commerce shop with products
│   ├── contact.html          # Contact form & support
│   └── about.html            # Company story & team
├── assets/
│   ├── css/
│   │   └── main.css          # Compiled CSS stylesheet
│   ├── js/
│   │   └── main.js           # JavaScript functionality
│   └── images/               # Product & content images
└── scss/                     # Source SCSS files (for reference)
    ├── main.scss
    ├── variables.scss
    ├── mixins.scss
    ├── reset.scss
    ├── layout.scss
    └── components.scss
```

## 🎨 Design System

### Colors
- **Primary**: #8B4513 (Rich Brown)
- **Secondary**: #D4AF37 (Gold)
- **Accent**: #2C2C2C (Dark Charcoal)
- **Background**: #FAF9F6 (Cream/Off-white)

### Typography
- **Headings**: Georgia (Serif)
- **Body**: Raleway (Sans-serif)

### Responsive Breakpoints
- Mobile: < 576px
- Tablet: 576px - 991px
- Desktop: > 992px

## 📄 Pages Created

### 1. **Home (index.html)**
- Hero section with CTA
- Why Choose Us section
- Featured signature blends
- Regional collections
- Testimonials
- Newsletter signup

### 2. **Philosophy (philosophy.html)**
- Brand mission & values
- Why they exist
- Craftsmanship overview
- Ingredient sourcing
- Sustainability commitment

### 3. **Collection (collection.html)**
- Signature blends (6 items)
- Regional collections (6 items)
- Limited editions (3 items)
- Filter functionality
- Product cards with add-to-cart

### 4. **Recipes (recipes.html)**
- Quick recipes (30 minutes)
- Traditional recipes
- Chef's special recipes
- Cooking tips & measurements

### 5. **The Craft (craft.html)**
- 5-step craft process
  1. Selection
  2. Roasting
  3. Grinding
  4. Blending
  5. Testing
- Detailed process explanation
- Behind-the-scenes content

### 6. **Community (community.html)**
- Customer stories
- Chef interviews
- Customer creations
- Blog/food culture
- Social media integration

### 7. **Shop (shop.html)**
- Product catalog
- Spice blends (12 items)
- Gift sets (3 items)
- Subscription plans (3 options)
- Filter & quantity controls
- Shopping benefits

### 8. **Contact (contact.html)**
- Contact form with validation
- Contact information
- B2B inquiries
- FAQ section
- Multi-channel support

### 9. **About (about.html)**
- Founder's story
- Company timeline
- Team members
- Brand vision & values
- Awards & recognition

## 🎯 Key Features

### Interactive Elements
- ✓ Form validation
- ✓ Product filtering
- ✓ Quantity controls
- ✓ Add-to-cart notifications
- ✓ Smooth scrolling
- ✓ Mobile menu (ready for implementation)
- ✓ Lazy image loading support
- ✓ Scroll animations with Intersection Observer

### Responsive Design
- ✓ Mobile-first approach
- ✓ Flexible grid layouts
- ✓ Responsive typography
- ✓ Touch-friendly buttons
- ✓ Adaptive navigation

### Accessibility
- ✓ Semantic HTML
- ✓ ARIA labels ready
- ✓ Focus states
- ✓ Keyboard navigation
- ✓ Color contrast compliance

## 🚀 How to Use

### 1. Open in Browser
Simply open `index.html` in any modern web browser to view the website.

### 2. Navigate Pages
- Use the navigation menu in the header
- Click on internal links throughout the site
- Use footer links for secondary navigation

### 3. Interactive Features
- **Shop**: Add products to cart, adjust quantities
- **Contact**: Fill out the contact form
- **Filter**: Use collection filters to browse products
- **Testimonials**: Read customer reviews and stories

## 💻 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript**: Vanilla JS (no frameworks)
- **SCSS**: For maintainable styles (source files included)

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 CSS Classes & Utilities

### Layout
- `.container` - Max-width wrapper
- `.grid` - Responsive grid
- `.grid-2`, `.grid-3`, `.grid-4` - Fixed column grids
- `.flex`, `.flex-center`, `.flex-between` - Flexbox utilities

### Components
- `.card` - Elevated content card
- `.btn` - Buttons with variants
- `.badge` - Status badges
- `.testimonial` - Review/quote blocks
- `.feature-box` - Icon + text blocks

### Spacing
- `.mb-0` to `.mb-5` - Margin bottom
- `.mt-0` to `.mt-5` - Margin top
- `.p-0` to `.p-5` - Padding
- `.gap-1` to `.gap-4` - Gap utilities

### Animations
- `.fade-in` - Fade in animation
- `.slide-up` - Slide up animation
- `.slide-in-left` - Slide from left

## 📝 JavaScript Functions

- `initNavigation()` - Active link highlighting
- `validateForm()` - Form validation
- `filterItems()` - Product filtering
- `addToCart()` - Cart notification
- `updateQuantity()` - Quantity update
- `subscribeNewsletter()` - Email subscription
- `initScrollAnimations()` - Scroll-triggered animations
- `initLazyLoad()` - Lazy image loading

## 🔧 Customization

### Colors
Edit CSS variables in `assets/css/main.css` (lines 1-30):
```css
:root {
  --primary-color: #8B4513;
  --secondary-color: #D4AF37;
  /* ... */
}
```

### Typography
Update font families in CSS variables section or in individual selectors.

### Content
Edit HTML files directly. All content is in the page files.

## 📸 Image Placeholders

Uses placeholder images from `https://via.placeholder.com/`. Replace with actual product images:

```html
<!-- Replace this -->
<img src="https://via.placeholder.com/300x200?text=Product+Name" alt="Product Name">

<!-- With this -->
<img src="assets/images/product-name.jpg" alt="Product Name">
```

## 🎯 Next Steps for Production

1. **Replace Placeholder Images** - Add real product photography
2. **Add Backend Integration** - Connect to e-commerce platform
3. **Implement Payment Gateway** - For shop functionality
4. **Add Email Service** - For newsletter and contact forms
5. **Optimize Performance** - Image optimization, lazy loading
6. **SEO Optimization** - Add meta tags, structured data
7. **Analytics** - Implement Google Analytics
8. **Sitemap** - Create XML sitemap
9. **Mobile Menu** - Implement hamburger menu for mobile
10. **CDN** - Host assets on CDN for faster delivery

## 📄 License

This website design is created for Spice Blends brand.

## 💬 Support

For questions or customization requests, contact hello@spiceblends.com

---

**Created**: March 2024  
**Version**: 1.0
