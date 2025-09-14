import {Component, signal, OnInit, HostListener} from '@angular/core';
import {TldrComponent} from '../../shared/ui/tldr/tldr.component';
import {KeyValueTableComponent, KeyValueTableItem} from '../../shared/ui/key-value-table/key-value-table.component';
import {ProsConsTableComponent, ProsConsItem} from '../../shared/ui/pros-cons-table/pros-cons-table.component';
import {
  MaterialComparisonTableComponent,
  MaterialComparisonColumn,
  MaterialComparisonRow
} from '../../shared/ui/material-comparison-table/material-comparison-table.component';
import {FaqComponent, FaqItem} from '../../shared/ui/faq/faq.component';
import {TableOfContentsComponent} from '../../shared/ui/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-coinbase-review',
  templateUrl: './coinbase-review.component.html',
  styleUrl: './coinbase-review.component.scss',
  standalone: true,
  imports: [
    TldrComponent,
    KeyValueTableComponent,
    ProsConsTableComponent,
    MaterialComparisonTableComponent,
    FaqComponent,
    TableOfContentsComponent
  ]
})
export class CoinbaseReviewComponent implements OnInit {

  // Mobile detection
  protected readonly isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }

  // Hero данные - минимально
  protected readonly article = {
    title: 'Coinbase Review UK 2025: Fees, FCA Regulation & Alternatives',
    author: 'Crypto Expert Team',
    date: 'January 2025',
    category: 'Exchange Review',
    heroImage: {
      src: '/images/coinbase-review-hero.png',
      alt: 'Coinbase UK Review 2025'
    }
  };

  // Данные для компонентов - оставляем как есть
  protected readonly tldrItems: string[] = [
    'For beginners who want a simple way to buy crypto in the UK, Coinbase is often the first recommendation. The interface is uncluttered, deposits can be made through several methods, and additional products like a Visa debit card or a non-custodial wallet are also available. However, the pricing model is less attractive for those who trade actively, and advanced investors may find the tools somewhat restrictive.',
  ];

  protected readonly regulationAndSafetyFeatures: KeyValueTableItem[] = [
    {key: 'FCA authorisation', value: 'E-money licence for GBP transfers'},
    {key: 'AML & KYC compliance', value: 'Registered with FCA under MLRs'},
    {key: 'Customer fund protection', value: 'Segregated GBP accounts'},
    {key: 'Security measures', value: 'Cold storage, 2FA, insurance cover'},
    {key: 'Tax obligations', value: 'Capital Gains Tax on crypto profits'},
  ];

  protected readonly prosData: ProsConsItem[] = [
    {text: 'Straightforward for newcomers '},
    {text: 'FCA registration and e-money licence '},
    {text: 'Multiple deposit options in GBP  '},
    {text: 'Wallet and Card integration '},
    {text: 'Friendly design that is easy to navigate for first-time users '},
    {text: 'Strong compliance and a solid security record '},
    {text: 'Support for a large number of coins and tokens '},
  ];

  protected readonly consData: ProsConsItem[] = [
    {text: 'Higher transaction costs  '},
    {text: 'Restricted tools on main app '},
    {text: 'Delays in customer service  '},
    {text: 'Fewer advanced features than rivals  '},
  ];


  protected readonly paymentsComparisonColumns: MaterialComparisonColumn[] = [
    {key: 'method', title: 'Method', type: 'text'},
    {key: 'action', title: 'Action', type: 'text'},
    {key: 'fees', title: 'Fees', type: 'text'},
    {key: 'processingTime', title: 'Processing time', type: 'text'},
  ];

  protected readonly paymentsComparisonRows: MaterialComparisonRow[] = [
    {
      method: 'Faster Payments',
      action: 'Deposit/Withdraw',
      fees: 'Free (deposit) / up to £1 (withdrawal)',
      processingTime: 'Same day (1–2 hours typical)',
    },
    {
      method: 'SEPA transfer',
      action: 'Deposit/Withdraw',
      fees: 'Minimal bank fees',
      processingTime: '1–2 business days',
    },
    {
      method: 'Debit/Credit Card',
      action: 'Buy crypto UK',
      fees: '~3.99% per transaction',
      processingTime: 'Instant',
    },
    {
      method: 'PayPal',
      action: 'Withdraw only',
      fees: '2% (max £25)',
      processingTime: 'Instant to 1 day',
    },
  ];


  protected readonly coinbaseProComparisonColumns: MaterialComparisonColumn[] = [
    {key: 'transactionType', title: 'Transaction type', type: 'text'},
    {key: 'basicCoinbase', title: 'Basic Coinbase exchange UK', type: 'text'},
    {key: 'coinbasePro', title: 'Coinbase Pro', type: 'text'},
  ];

  protected readonly coinbaseProComparisonRows: MaterialComparisonRow[] = [
    {
      transactionType: 'Buy with GBP balance',
      basicCoinbase: '0.5% spread + flat fee',
      coinbasePro: 'Maker 0.4% / Taker 0.6%',
    },
    {
      transactionType: 'Buy with card',
      basicCoinbase: '3.99%',
      coinbasePro: 'Not available',
    },
    {
      transactionType: 'Bank transfer deposit',
      basicCoinbase: 'Free',
      coinbasePro: 'Free',
    },
    {
      transactionType: 'Crypto-to-crypto trade',
      basicCoinbase: '2% approx.',
      coinbasePro: 'Maker/Taker fees only',
    },
    {
      transactionType: 'Withdraw to bank (GBP)',
      basicCoinbase: 'Up to £1',
      coinbasePro: '£0.15',
    },
  ];

  constructor() {
    const a = {
      "metadata": {
        "templateName": "exchange_review_universal_skeleton",
        "version": "1.0",
        "language": "${language}",
        "dateCreated": "${date}",
        "authorTemplate": "${authorName}",
        "placeholders": {
          "exchange": "${currentExchange}",
          "geo": "${currentGeo}",
          "currency": "${localCurrency}",
          "paymentRails": "${localPaymentRails}",
          "regulator": "${localRegulator}",
          "affiliateLink": "${affiliateLink}",
          "accessDate": "${access_date}"
        },
        "notes": "Universal skeleton for exchange review articles. Replace placeholders before sending to Writer/Renderer."
      },
      "meta": {
        "goal": "Produce a localized, SEO-optimized review of a crypto exchange tailored to a specific GEO. Provide clear CTAs (affiliate or internal), internal linking, and visuals instructions.",
        "contentType": "exchange_review",
        "wordCountTarget": {"min": 2000, "max": 3500},
        "toneOfVoice": "neutral, expert, accessible",
        "audience": "general crypto users in target GEO (novice → intermediate)"
      },
      "ctaGlobal": {
        "affiliateUrlTemplate": "${affiliateLink}?utm_source=site&utm_medium=affiliate&utm_campaign=${exchange}_${geo}_${placement}",
        "maxAffiliateCtasPerArticle": 3,
        "maxAffiliateAboveFold": 1,
        "minWordsBetweenAffiliateCtas": 500,
        "disclaimerText": "This is an affiliate link — we may earn a commission.",
        "defaultAffiliateTexts": {
          "hero": "Sign up on ${exchange} — start trading with ${currency}",
          "after_registration": "Create your ${exchange} account — quick verification for ${geo} users",
          "after_deposit": "Ready to deposit? Fund your account on ${exchange} and start trading",
          "verdict": "Final verdict: Register on ${exchange} — start with ${currency}"
        },
        "displayRulesSummary": "Use affiliate CTAs sparingly and only in contextually relevant sections: registration, deposit, verdict. Prefer internal links elsewhere."
      },
      "keywordUsageGuidance": {
        "h1": "Include 1 primary keyword (branded + geo) if available.",
        "intro": "1 primary + 1–2 MF variants naturally placed in first 100–150 words.",
        "h2Blocks": "Place 1–3 MF keywords per H2 where relevant; include 2–6 LF phrases naturally in examples and steps.",
        "faq": "Primary reservoir for LF (6–20 LF items depending on discoveryLimits).",
        "density": "Avoid repeating the same exact phrase more than 2–3 times per 1000 words. Prefer synonyms and LSI.",
        "anchors": "Use natural anchors for internal links, do not use 'click here'."
      },
      "skeleton": {
        "h1": "${exchange} review in ${geo}",
        "metaDescription": "Is ${exchange} a good choice for users in ${geo}? This guide covers regulation, deposits, fees, security, and how to get started.",
        "blocks": [{
          "id": "intro",
          "title": "Introduction",
          "goal": "Short summary: what the exchange is and why it matters for users in the target GEO; include fiat and regulator status when relevant.",
          "mappedKeywords": [],
          "internalLinks": [],
          "uiElements": ["lead-paragraph", "infobox-quick-facts"],
          "cta": {
            "type": "affiliate_optional",
            "placement": "hero",
            "allowed": true,
            "rules": "Only show hero affiliate CTA if editorial assesses high purchase intent. Count toward maxAffiliateCtasPerArticle."
          },
          "visuals": [{
            "id": "hero_banner",
            "type": "illustration",
            "description": "Hero banner mixing exchange branding and country tokens (flag/currency) or neutral finance imagery.",
            "purpose": "hero"
          }],
          "humanTips": "Start with a 2–3 sentence hook and one-line TL;DR that answers the legality/availability question for the GEO."
        }, {
          "id": "key_facts",
          "title": "Key facts (quick snapshot)",
          "goal": "One-table snapshot: founded, HQ, local fiat support, regulatory flag, typical fees summary, number of assets.",
          "mappedKeywords": [],
          "internalLinks": [],
          "uiElements": ["table-infobox"],
          "cta": null,
          "visuals": [{
            "id": "key_facts_infobox",
            "type": "infographic",
            "description": "Compact graphic summarizing licenses, fiat support and quick stats."
          }],
          "humanTips": "Keep this block scannable — 4–6 rows, each with one data point and source if available."
        }, {
          "id": "pros_cons",
          "title": "Pros & Cons",
          "goal": "Clear, balanced list of main advantages and disadvantages relevant to the GEO audience.",
          "mappedKeywords": [],
          "internalLinks": [],
          "uiElements": ["two-column-list", "bullet-points"],
          "cta": {
            "type": "affiliate_inline",
            "placement": "after_pros",
            "allowed": true,
            "rules": "One inline affiliate CTA allowed here; prefer an internal link if regulatory landscape makes affiliate inappropriate."
          },
          "visuals": [{
            "id": "pros_cons_table",
            "type": "table",
            "description": "Optional visual table or styled HTML block showing pros vs cons."
          }],
          "humanTips": "Make pros/cons locally relevant — e.g., if certain products are blocked in GEO, include as a con."
        }, {
          "id": "regulation_safety",
          "title": "Regulation & Safety",
          "goal": "Explain regulator relationship, legal status, AML/KYC, fund protection, and typical security measures.",
          "mappedKeywords": [],
          "internalLinks": ["is_${exchange}_legit_in_${geo}", "country_regulation_guide_${geo}"],
          "uiElements": ["callout-warning", "checklist"],
          "cta": null,
          "visuals": [{
            "id": "regulator_badge",
            "type": "illustration",
            "description": "Generic regulator icon or text badge. If using official logos, flag licenseCheckRequired:true."
          }, {
            "id": "security_checklist",
            "type": "infographic",
            "description": "Checklist for user security: 2FA, withdrawal whitelisting, insurance notes."
          }],
          "humanTips": "Cite primary sources for regulatory claims; do not invent registration numbers. If no registration, state status clearly."
        }, {
          "id": "how_to_register",
          "title": "How to register",
          "goal": "Step-by-step guide for account creation and verification for GEO residents; list required documents and expected timeframes.",
          "mappedKeywords": [],
          "internalLinks": ["detailed_register_guide_${exchange}_${geo}"],
          "uiElements": ["numbered-steps", "tips-box"],
          "cta": {
            "type": "affiliate",
            "placement": "after_registration",
            "allowed": true,
            "rules": "Full-width affiliate CTA allowed directly after step list (counts toward maxAffiliateCtasPerArticle)."
          },
          "visuals": [{
            "id": "register_form_screenshot",
            "type": "screenshot",
            "description": "Anonymized screenshot of registration form; mask any PII. Flag licenseCheckRequired:true."
          }],
          "humanTips": "Provide exact common pitfalls (document types not accepted, photo rules, selfie steps)."
        }, {
          "id": "deposit_withdraw",
          "title": "Deposit & Withdrawal",
          "goal": "Explain fiat on-ramps and off-ramps available in the GEO, fees, limits, common bank issues and recommended flows.",
          "mappedKeywords": [],
          "internalLinks": ["detailed_deposit_guide_${exchange}_${geo}", "withdrawal_guide_${exchange}_${geo}"],
          "uiElements": ["rails-table", "faq-callout"],
          "cta": {
            "type": "affiliate",
            "placement": "after_deposit",
            "allowed": true,
            "rules": "Full-width affiliate CTA allowed after deposit section if appropriate. Otherwise use internal link to deposit guide."
          },
          "visuals": [{
            "id": "deposit_method_screenshot",
            "type": "screenshot",
            "description": "Screenshot showing deposit methods; anonymize; include access_date and source."
          }, {
            "id": "withdrawal_flow_screenshot",
            "type": "screenshot",
            "description": "Screenshot of withdrawal confirmation flow; anonymize."
          }],
          "humanTips": "Include bank-specific notes if the countryInfo indicates particular banks block crypto transfers."
        }, {
          "id": "features_products",
          "title": "Features & Products",
          "goal": "Overview of key products (spot, margin/derivatives if allowed, staking, P2P, cards, NFT) and GEO availability notes.",
          "mappedKeywords": [],
          "internalLinks": ["how_to_trade_guide_${exchange}_${geo}", "staking_guide_${exchange}_${geo}"],
          "uiElements": ["feature-grid", "status-pill"],
          "cta": {
            "type": "affiliate_inline_or_internal",
            "placement": "after_trading_section",
            "allowed": true,
            "rules": "Prefer internal link to product guide; affiliate inline allowed only if user-intent high and regulatory OK."
          },
          "visuals": [{
            "id": "features_icons",
            "type": "illustration",
            "description": "Icon grid for main product categories."
          }],
          "humanTips": "Explicitly note which advanced products are restricted for retail users in the GEO (if any)."
        }, {
          "id": "comparison",
          "title": "Comparison vs Competitors",
          "goal": "Side-by-side comparison on regulation, fiat support, fees, product availability and UX for GEO users.",
          "mappedKeywords": [],
          "internalLinks": ["competitorA_review_${geo}", "competitorB_review_${geo}"],
          "uiElements": ["comparison-table", "pros-cons-mini"],
          "cta": null,
          "visuals": [{
            "id": "comparison_table_visual",
            "type": "table",
            "description": "Comparison table (prefer HTML for SEO; raster only if needed)."
          }],
          "humanTips": "Use competitor data only from reputable sources; link the source in caption."
        }, {
          "id": "who_for",
          "title": "Who is this exchange for?",
          "goal": "Define persona segments (Beginner / Investor / Active trader) and suitability notes per persona for the GEO.",
          "mappedKeywords": [],
          "internalLinks": [],
          "uiElements": ["persona-bullets"],
          "cta": null,
          "visuals": [{
            "id": "persona_icons_visual",
            "type": "illustration",
            "description": "Small visuals representing common user personas."
          }],
          "humanTips": "Be specific: e.g., 'Good for long-term investors who need simple GBP on-ramps' — replace placeholders."
        }, {
          "id": "verdict",
          "title": "Verdict & Final Thoughts",
          "goal": "Summarize pros/cons, present a short checklist and a clear recommendation; final CTA (affiliate) if applicable.",
          "mappedKeywords": [],
          "internalLinks": ["full_checklist_${exchange}_${geo}"],
          "uiElements": ["rating-block", "final-checklist"],
          "cta": {
            "type": "affiliate",
            "placement": "verdict",
            "allowed": true,
            "rules": "One prominent affiliate CTA allowed in verdict; must include short legal disclaimer and link tracking params."
          },
          "visuals": [{
            "id": "final_cta_visual",
            "type": "illustration",
            "description": "Prominent final banner encouraging sign-up or internal next-step (designed)."
          }],
          "humanTips": "Offer clear decision points: 'Use it if X; avoid if Y.' Keep the verdict concise."
        }, {
          "id": "faq",
          "title": "FAQ",
          "goal": "Answer localized long-tail questions; act as main reservoir for LF keywords and micro-how-tos.",
          "mappedKeywords": [],
          "internalLinks": ["is_${exchange}_legit_in_${geo}", "detailed_register_guide_${exchange}_${geo}", "detailed_deposit_guide_${exchange}_${geo}", "how_to_trade_guide_${exchange}_${geo}", "staking_guide_${exchange}_${geo}"],
          "uiElements": ["accordion"],
          "cta": {
            "type": "internal_preferred",
            "placement": "inline",
            "allowed": true,
            "rules": "Prefer internal links. Allow one small affiliate inline only if directly answering 'where to sign up' and regulatory OK."
          },
          "visuals": [{
            "id": "faq_helper_visual",
            "type": "infographic",
            "description": "Small helper graphic summarizing quick answers or common flows."
          }],
          "humanTips": "Populate FAQ entries from long-tail keyword list; keep answers short (1–3 sentences) with link to full guide."
        }]
      },
      "visualsGlobal": {
        "ogImage": {
          "id": "og_image",
          "type": "illustration",
          "description": "Social preview image: exchange + GEO + short tagline (designed)."
        },
        "authorPortrait": {
          "id": "author_portrait",
          "type": "photo",
          "description": "Author photo or team logo for byline (optional)."
        }
      },
      "visualsGuidance": {
        "screenshots": "Must be anonymized: mask emails, balances, tx ids. Add caption with source and access_date. Flag 'licenseCheckRequired' if official logos or copyrighted assets used.",
        "illustrations": "Designer-made or AI generated. Maintain consistent visual style across site. Avoid using protected logos without license; prefer stylized/abstract representations.",
        "infographics": "Prefer vector (SVG) or HTML; rasterize only when necessary. Include data source and access_date in caption.",
        "fileNaming": "{exchange}_{purpose}_{geo}_{yyyy-mm-dd}.{ext}",
        "altAndCaption": "Every visual must include alt_text and caption_text with source or 'designed' and access_date placeholder."
      },
      "ctaGuidelines": {
        "summaryRules": ["Max affiliate CTAs per article: ctaGlobal.maxAffiliateCtasPerArticle", "Max affiliate CTAs above the fold: ctaGlobal.maxAffiliateAboveFold", "Do not place two affiliate CTAs in adjacent sections", "Prefer internal links for informational blocks; use affiliate for conversion-intent blocks"],
        "disclaimer": "Place visible affiliate disclaimer near first affiliate CTA and in verdict. Example: 'This is an affiliate link — we may earn a commission.'",
        "tracking": "Use affiliateUrlTemplate for all affiliate CTAs. Required UTM fields: utm_source, utm_medium, utm_campaign."
      },
      "publishingChecklist": {
        "content": ["Mapped keywords present in each block according to keywordUsageGuidance", "H1 includes primary keyword (if available)", "Meta description present and localized", "Internal links validated (no 404s)", "Author bio and 'Last updated' date present"],
        "visuals": ["All screenshots anonymized and captioned with source and access_date", "All images uploaded to CDN and URLs inserted into article JSON", "License check flagged for visuals using brand assets"],
        "cta": ["affiliate CTA count <= ctaGlobal.maxAffiliateCtasPerArticle", "affiliate above-fold count <= ctaGlobal.maxAffiliateAboveFold", "word distance between affiliate CTAs >= ctaGlobal.minWordsBetweenAffiliateCtas", "affiliate disclaimer visible"],
        "seo": ["Schema.org Article metadata present", "Open Graph and Twitter cards set", "Sitemap updated and index request submitted if new"],
        "legal": ["Regulatory claims sourced and cited", "No personal data in screenshots", "Affiliate disclosure present"]
      },
      "integrationNotes": {
        "writerInput": "Provide this skeleton + countryInfo + mapped keywords + competitors list as Writer input. Writer should output markdown article and a final article JSON with filled visuals (CDN URLs) and confirmed CTA insertion points.",
        "reviewerInput": "Reviewer checks mapped keyword usage, factual claims (countryInfo sources), visuals anonymization, CTA policy compliance, and pushes to publisher."
      }
    }
  }


}
