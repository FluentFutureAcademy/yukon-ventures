/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  YUKON VENTURES — ALL WEBSITE CONTENT LIVES IN THIS ONE FILE
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  HOW TO EDIT TEXT
 *    Change any text between the quotation marks below and save. Keep the
 *    quotation marks and the comma at the end of the line. If your text
 *    contains a double quote ("), use a curly quote (“ ”) instead.
 *
 *  HOW TO SWAP AN IMAGE
 *    1. Put the new picture in  public/images/  (JPG or WebP, ideally 1600px wide).
 *    2. Change the matching "image" value below to the file name, e.g.
 *       image: "/images/my-new-photo.jpg"
 *       Images with a {w} in the path are served in three sizes
 *       (480 / 800 / 1200 px). For a single file, just write its full name,
 *       e.g. "/images/my-new-photo.jpg"; the site handles both.
 *    3. Update "alt" to describe the new picture (for accessibility and Google).
 *    The hero (top of the page) uses public/hero/yukon-hero-desktop.webp and
 *    public/hero/yukon-hero-mobile.webp. See the README for hero image rules.
 *
 *  HOW TO ADD A PRODUCT CATEGORY
 *    Copy one { ... } block inside `categories` (from the opening { to the
 *    closing },), paste it at the end of the list and change its text. The
 *    number (01, 02 …) is added automatically.
 *
 *  HOW TO ADD A STORE
 *    Copy one { ... } block inside `stores`, paste it at the end and change it.
 *    `platform` must be "poshmark", "ebay" or "walmart" (controls the badge colour).
 *
 *  HOW TO ADD THE WALMART LINK
 *    Paste the official Walmart seller store link into WALMART_URL just below.
 *    The "Store Link Coming Soon" button turns into a real button by itself,
 *    and the footer link appears automatically.
 *
 *  HOW TO ADD SOCIAL LINKS
 *    Fill in the links inside `social` (near the bottom). Icons only appear for
 *    links that are filled in; leave "" to hide an icon.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Paste the official Walmart seller store link here */
export const WALMART_URL = ""

export type Platform = "poshmark" | "ebay" | "walmart"

export interface Category {
  title: string
  description: string
  /** "{w}" is replaced with 480 / 800 / 1200 for responsive images */
  image: string
  alt: string
}

export interface Store {
  name: string
  platform: Platform
  platformLabel: string
  username?: string
  description: string
  url: string
  buttonText: string
  /** Extra line shown under the description while `url` is still empty */
  comingSoonText?: string
}

export const site = {
  companyName: "Yukon Ventures",
  domain: "https://yukonvllc.com",
  tagline: "Thoughtfully Selected Products for Home, Beauty & Everyday Living",
  copyrightYear: "2026",

  seo: {
    title: "Yukon Ventures | Home Décor, Fragrances, Beauty & Lifestyle Products",
    description:
      "Yukon Ventures is an online retail business registered in Canada and the United States, offering home décor, perfumes, beauty, skincare, personal care and lifestyle products through our Poshmark, eBay and Walmart Marketplace stores.",
    keywords: [
      "Yukon Ventures",
      "home décor online shopping",
      "perfumes and fragrances",
      "beauty and skincare products",
      "haircare and personal care",
      "lifestyle products",
      "online retail stores",
      "Trend Zones",
      "Glow Essentials Beauty",
      "Dwell Essence",
    ],
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Our Online Stores", href: "#stores" },
    { label: "Contact Us", href: "#contact" },
  ],

  hero: {
    eyebrow: "Online Retail · Canada & United States",
    headline: "Yukon\nVentures",
    headlineAccent: "Ventures",
    subheading: "Thoughtfully Selected Products for Home, Beauty & Everyday Living",
    body: "Welcome to Yukon Ventures, a retail business offering a carefully selected range of products designed to complement your home, lifestyle and everyday needs.",
    imageAlt: "Curated home décor, fragrance and beauty products from Yukon Ventures",
    desktopImage: "/hero/yukon-hero-desktop.webp",
    mobileImage: "/hero/yukon-hero-mobile.webp",
    ctas: [
      { label: "Explore Our Stores", href: "#stores", variant: "primary" as const },
      { label: "Shop on eBay", href: "https://www.ebay.com/usr/trend_zones", variant: "secondary" as const, external: true },
      { label: "Shop on Poshmark", href: "https://poshmark.com/closet/dwell_essence", variant: "secondary" as const, external: true },
    ],
    hint: "Move across the collection",
    hintTouch: "Touch the collection",
    backdropText: "YUKON",
  },

  welcome: [
    "From beautiful home décor and fragrances to beauty essentials, personal care products and lifestyle accessories, we bring together a diverse selection of products through our established online shopping stores.",
    "Discover our collections and shop with us through our trusted marketplace storefronts.",
  ],

  trust: [
    { icon: "registered", text: "Registered in Canada & the United States" },
    { icon: "stores", text: "4 Marketplace Storefronts" },
    { icon: "categories", text: "Home, Beauty & Lifestyle" },
    { icon: "service", text: "Customer-Focused Service" },
  ] as const,

  about: {
    label: "About Yukon Ventures",
    heading: "About Us",
    image: "/images/about-{w}.webp",
    alt: "Calm neutral interior with a white ceramic vase, candle and textured artwork on a light wooden cabinet",
    paragraphs: [
      "Yukon Ventures is a business registered in Canada and the United States, engaged in online retail and the sale of a diverse range of consumer products.",
      "Our business focuses on bringing customers a carefully selected range of products across home décor, fragrances, beauty and personal care, accessories, household essentials and other lifestyle categories.",
      "We believe shopping should be convenient, accessible and enjoyable. Our approach focuses on product selection, value, reliable customer service and a smooth shopping experience.",
      "Through our presence on established online marketplaces, we make it easy for customers to discover our products and complete their purchases through their preferred shopping platforms.",
      "Our online retail business continues to grow, with new products and selections being introduced regularly.",
    ],
    mission: {
      title: "Our Mission",
      text: "To provide customers with access to thoughtfully selected products that combine quality, value and everyday convenience.",
    },
    vision: {
      title: "Our Vision",
      text: "To continue growing Yukon Ventures as a recognized and trusted online retail business, expanding our product selection and marketplace presence across North America.",
    },
  },

  products: {
    label: "Our Products",
    heading: "What We Offer",
    intro: "A diverse selection of products across home, beauty and everyday living, available through our online stores.",
    note: "Our product range is updated regularly. Visit our online stores for current availability.",
    linkText: "Available in our stores",
  },

  categories: [
    {
      title: "Home Décor & Living",
      description:
        "Products that help make homes more beautiful, comfortable and welcoming. Home decorations, decorative accessories, kitchen and household products, and lifestyle essentials.",
      image: "/images/home-decor-{w}.webp",
      alt: "Three handmade clay vases in warm neutral tones on a plaster plinth",
    },
    {
      title: "Perfumes & Fragrances",
      description: "A selection of fragrances and perfumes for different preferences and occasions.",
      image: "/images/perfumes-{w}.webp",
      alt: "Round glass perfume bottle with a gold cap resting on ivory satin in warm light",
    },
    {
      title: "Beauty & Skincare",
      description:
        "Beauty and skincare products, including facial care, skin treatments, makeup and other beauty essentials.",
      image: "/images/skincare-{w}.webp",
      alt: "Glass serum bottle with a dropper beside dried grasses on a soft beige background",
    },
    {
      title: "Haircare & Personal Care",
      description: "Haircare products, treatments, grooming essentials and personal care products.",
      image: "/images/haircare-{w}.webp",
      alt: "Bamboo hair brushes gathered in a dark wooden bowl",
    },
    {
      title: "Fashion & Accessories",
      description: "Selected fashion products, clothing, hats, jewelry, watches and accessories.",
      image: "/images/fashion-{w}.webp",
      alt: "Gold rings, earrings and necklaces displayed on pale stone on a sand-coloured background",
    },
    {
      title: "Lifestyle & Everyday Essentials",
      description:
        "A diverse selection of useful and interesting products for everyday living, gifts and personal use.",
      image: "/images/lifestyle-{w}.webp",
      alt: "Frosted glass candle with dried autumn leaves and nuts on a rustic wooden table",
    },
  ] satisfies Category[],

  storesSection: {
    label: "Our Online Stores",
    heading: "Find Us Online",
    intro: "Shop our collections through our trusted marketplace storefronts, all operated by Yukon Ventures.",
    operatedBy: "Operated by Yukon Ventures",
    comingSoonButton: "Store Link Coming Soon",
  },

  stores: [
    {
      name: "Dwell Essence",
      platform: "poshmark",
      platformLabel: "Poshmark",
      username: "@dwell_essence",
      description:
        "Discover quality finds selected with care. Dwell Essence offers a variety of everyday essentials and unique lifestyle finds, with a focus on great value, reliable service and a smooth shopping experience. Our selection includes fashion, accessories, beauty, electronics, home and other lifestyle categories.",
      url: "https://poshmark.com/closet/dwell_essence",
      buttonText: "Visit Our Poshmark Store",
    },
    {
      name: "Trend Zones",
      platform: "ebay",
      platformLabel: "eBay",
      username: "trend_zones",
      description:
        "Trend Zones offers a diverse selection of products across beauty, health, personal care, fashion, accessories, sporting goods and other lifestyle categories. Customers can discover skincare, haircare, makeup, sun protection, oral care, jewelry, watches, clothing, home and garden products and more. We aim to provide a convenient shopping experience with carefully selected products and competitive value.",
      url: "https://www.ebay.com/usr/trend_zones",
      buttonText: "Visit Our eBay Store",
    },
    {
      name: "Glow Essentials Beauty",
      platform: "ebay",
      platformLabel: "eBay",
      username: "glowessentialsbeauty",
      description:
        "Glow Essentials Beauty brings together a selection of beauty, skincare and personal care products. Our range includes skincare essentials, makeup, haircare, sun protection and selected lifestyle and household products. Discover products from established beauty and personal care brands, alongside other carefully selected everyday finds.",
      url: "https://www.ebay.com/usr/glowessentialsbeauty",
      buttonText: "Visit Our eBay Store",
    },
    {
      name: "Walmart Marketplace",
      platform: "walmart",
      platformLabel: "Walmart",
      description: "Shop our selected products through our Walmart Marketplace storefront.",
      url: WALMART_URL,
      buttonText: "Visit Our Walmart Store",
      comingSoonText: "Our Walmart storefront link will be available here soon.",
    },
  ] satisfies Store[],

  why: {
    label: "Our Commitment",
    heading: "Why Choose Yukon Ventures?",
    intro: [
      "At Yukon Ventures, we believe in making online shopping straightforward, convenient and enjoyable.",
      "We focus on providing customers with a diverse selection of products and a positive shopping experience.",
    ],
    items: [
      { icon: "selected", title: "Carefully Selected Products", text: "A diverse range of products across different lifestyle and consumer categories." },
      { icon: "value", title: "Great Value", text: "A focus on offering attractive products at competitive prices." },
      { icon: "service", title: "Customer-Focused Service", text: "Providing responsive and helpful service to our customers." },
      { icon: "convenient", title: "Convenient Online Shopping", text: "Access to our products through established online marketplaces." },
      { icon: "growing", title: "Growing Product Selection", text: "Regularly introducing new finds and expanding our collections." },
    ] as const,
    closing: "We want every customer to enjoy discovering something useful, practical or special when shopping with us.",
  },

  presence: {
    label: "Our Presence",
    heading: "Serving Customers Through Established Online Marketplaces",
    paragraphs: [
      "Yukon Ventures is registered in Canada and the United States.",
      "Our online retail activities are supported by multiple marketplace storefronts, allowing customers to discover and shop our products through established ecommerce platforms.",
      "We are focused on developing our online presence, expanding our product selection and building long-term customer relationships.",
    ],
    countries: ["Canada", "United States"],
    mapAlt: "Map of North America highlighting Canada and the United States",
    marketplaces: [
      { label: "Poshmark", platform: "poshmark" },
      { label: "eBay", platform: "ebay" },
      { label: "Walmart Marketplace", platform: "walmart" },
    ] as const,
  },

  contact: {
    label: "Contact Us",
    heading: "Get in Touch",
    paragraphs: [
      "Thank you for visiting Yukon Ventures.",
      "We appreciate your interest in our products and online stores.",
      "For product enquiries, business enquiries or general questions, please feel free to contact us.",
      "We look forward to hearing from you.",
    ],
    email: "yukonvllc@gmail.com",
    phoneDisplay: "+1 437 604 5667",
    phoneHref: "tel:+14376045667",
    form: {
      heading: "Send Us a Message",
      name: "Name",
      email: "Email address",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      sending: "Sending…",
      success: "Thank you — your message has been sent. We'll get back to you soon.",
      error: "Something went wrong. Please email us directly at yukonvllc@gmail.com.",
      emailSubjectPrefix: "New message from yukonvllc.com",
    },
  },

  /** Leave "" to hide an icon. Paste the full link (https://…) to show it. */
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    pinterest: "",
  },

  footer: {
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Our Products", href: "#products" },
      { label: "Our Stores", href: "#stores" },
      { label: "Contact Us", href: "#contact" },
    ],
    storeLinks: [
      { label: "Poshmark – Dwell Essence", url: "https://poshmark.com/closet/dwell_essence" },
      { label: "eBay – Trend Zones", url: "https://www.ebay.com/usr/trend_zones" },
      { label: "eBay – Glow Essentials Beauty", url: "https://www.ebay.com/usr/glowessentialsbeauty" },
      { label: "Walmart Marketplace", url: WALMART_URL },
    ],
    rights: "All Rights Reserved.",
  },

  legal: {
    lastUpdated: "[DATE]",
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "About this website",
          body: "yukonvllc.com is an information website for Yukon Ventures, an online retail business registered in Canada and the United States. We do not sell products directly on this website. Links to our stores take you to third-party marketplaces (Poshmark, eBay and Walmart Marketplace).",
        },
        {
          heading: "Purchases, payments and shipping",
          body: "All purchases, payments, shipping, returns and related customer data are handled by each marketplace under its own terms and privacy policy. Please review the policies of the marketplace you shop on. We do not receive or store your payment card details.",
        },
        {
          heading: "What our contact form collects",
          body: "When you use the contact form we receive your name, email address, subject and message. We use this information only to reply to your enquiry and to keep a record of our correspondence. The form is delivered through Web3Forms, a third-party form service, which forwards your message to our email inbox.",
        },
        {
          heading: "No sale of personal data",
          body: "We do not sell, rent or trade your personal information. We do not use advertising trackers on this website.",
        },
        {
          heading: "Your choices",
          body: "You may ask us to access, correct or delete the information you sent us at any time by emailing yukonvllc@gmail.com.",
        },
        {
          heading: "Contact",
          body: "Questions about this policy: yukonvllc@gmail.com · +1 437 604 5667.",
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      sections: [
        {
          heading: "Use of this website",
          body: "This website provides general information about Yukon Ventures and links to our marketplace storefronts. By using it you agree to these terms.",
        },
        {
          heading: "Third-party marketplaces",
          body: "Our products are sold through Poshmark, eBay and Walmart Marketplace. Each purchase is made on that marketplace and is governed by its own terms, payment, shipping and return policies. We are not responsible for the content or availability of third-party websites.",
        },
        {
          heading: "Product information",
          body: "Product ranges change regularly. Current availability, prices and descriptions are shown on our marketplace listings. Images on this website are illustrative.",
        },
        {
          heading: "Intellectual property",
          body: "The Yukon Ventures name, logo and the content of this website belong to Yukon Ventures unless stated otherwise. Brand names of products sold in our stores belong to their respective owners.",
        },
        {
          heading: "Limitation of liability",
          body: "This website is provided “as is”. To the extent permitted by law, Yukon Ventures is not liable for any loss arising from the use of this website.",
        },
        {
          heading: "Contact",
          body: "Questions about these terms: yukonvllc@gmail.com · +1 437 604 5667.",
        },
      ],
    },
  },
}

/** Resolves an image path to src + srcSet (see "HOW TO SWAP AN IMAGE"). */
export function imageSources(path: string) {
  if (!path.includes("{w}")) return { src: path, srcSet: undefined }
  return {
    src: path.replace("{w}", "800"),
    srcSet: [480, 800, 1200].map((w) => `${path.replace("{w}", String(w))} ${w}w`).join(", "),
  }
}
