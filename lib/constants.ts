import { ServiceCardProps, TestimonialCardProps, FAQItemProps, NavLink, PortfolioImageProps } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Love Notes", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const SERVICES: ServiceCardProps[] = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQQEX6paMymKh8D3ntzSyn7nMxIqbdBy8bn8uYq7a7HRsrKhNhZENqnL99Yc3xLHiSoG4Dzw0rUItbTihlGjIa_tAPlEtabII_9dt-MuPlriqeEA3NMQRxmHV0Ib0V180B2e623heuxIkH0Vjf4xKWI9cXcfH4bgEuwg1c14BnWPr9hcvedwdD97QemQVCTynY2NeEzzkhVxWFNx1KOMttNbwngZfsQCqvGbEKHq3PJkm6pjDozwk5yZcszXXrKTd3VTz87MXAk0Hu",
    title: "The Bride",
    price: "$350",
    description: "A luxurious, unhurried appointment focusing on skin prep and longevity.",
    features: [
      "Consultation & Skin Prep",
      "Premium Lashes Included",
      "Touch-up Kit Gift",
    ],
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4WcFq3Vsl_tHWEkJb-ZqGytD3jt83HNLUaAzvQyMqqhYa3zk0YkrW7CUDaodyPQ5_nzf9CAtA0W-hiMsJOgXtlomrnpqLEgN3u66ZGNPSz_NUlyRcgAlKvUSOOAp015va8fTCaJNQo9EkXKYML5UqQKrNUfx5fC6B06EfdR649cwP1JK4XVaYLgVnvD5k5aiP3nvfyEsrAMhyNXtFNb7HbrgWrgQyKB8xBy5RM1oIZV3Uxaw4rAm5HZZQB9GnrAtqPdm0m4z_twdh",
    title: "Bridal Party",
    price: "$150",
    priceUnit: "/ person",
    description: "Cohesive, elegant looks for your nearest and dearest.",
    features: [
      "45 Minute Service",
      "Full Face Application",
      "Standard Lashes Included",
    ],
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqyyQ_6KIRpsgaWsKqjsQXO15LpVOxdJIiKWJ9DmJS0-n-iNPyV8sbRXiTODjwWAImjlrWE1e9gIynQRsV7ESDpsPAyBKTQFbb2V-WEtPH_v1E3lVTf7cA5-ulSbXg0m-vjJQ_UeLI2tE0Nl8-VNAbtnUO2LdsxHvu6L3LYhaIxRnPwqJFcW7F2T-fUwGXsokwWgYTkfSLCmbjkDv8NurM2yUijAWrAUCJ2K4_lYTeqZz3gjy2gLl6qVvc1f-Md5mhnK2B3zL9P_CR",
    title: "The Trial",
    price: "$200",
    description: "Perfect your signature look before the big day arrives.",
    features: [
      "90 Minute Session",
      "Multiple Look Adjustments",
      "Photography Advice",
    ],
  },
];

export const TESTIMONIALS: TestimonialCardProps[] = [
  {
    quote: "She made me feel like the most beautiful version of myself. The makeup lasted through tears, dancing, and humidity. It was simply perfect.",
    author: "Sarah & Michael",
    date: "June 2023",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4J1ktOs92MOjJ7KBEAF7OXo-piG-ZVw6dkgpsetvzyXC08uZkeDWcMlojBJVxrFJA5xjwsVhKz4fkMP-tTauSm_s1LDlrEYmdDnHWtk4kP3vUfpfHSVH2Iq1JkBKWBSW4YQQa7D7GX2oUceiycVFJoUNkGBAjdKvIoQpmK6kCirdRc5VO8-Fr-hOaSNF_CvnxTdLMxMUxDtHvszKcl-Xx9lWsVgZyfhfEAP2aHrvBMbBa4o2JGNB6_9_NdrL2-Xxpzd1DRtARY4Ff",
  },
  {
    quote: "Incredibly professional and calming on such a hectic morning. She listened to exactly what I wanted and delivered a look that was natural yet glamorous.",
    author: "Emily & David",
    date: "August 2023",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHmpO21n2DCntOLNljbJxWqjl76cN_sq8_4FaWXFjglvb92mhIgiJxWj6ljEPkyYw5cMVR4d7JJrE4GNch2BlgmFKXL9sgorgX_bcLbEdVVdkm31Miz6g09qB8cNGmgiA1V6hhQRGKGUQnPp4YTWyD5QdLrK_UNlh5s35OCZj7u2kar-4YSm3F1JEpQnFNPNFnOsLVRuD67Aypz2YZEkOF1BGBMJ_imLzlwTVTqc4vneopXa7LWZRsIzvE_AjZZGZD6OMNXK8cAReK",
  },
  {
    quote: "My bridesmaids all looked stunning. The airbrush makeup felt so light but looked flawless in photos. I couldn't recommend her enough.",
    author: "Jessica & Tom",
    date: "October 2023",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeJAHlcIU-ct3Sl1g-9DrjY82UMBU3-U95DBS3QKnaGVjnD8VQYJzAYkzZQq4flkbXvnxh2KPGFkPJoPbaXVTLr-ht6SSamFBXVK10ueGRZVmxmll0C--vpEzG95HRlZB6U2zpQDmuFa-r3ePwwoGgaQqktCi_me7aiMJ8rX880nNi4VDeohZzjOZNchOrxXx11IIKh07WjbYtY7G_63Ap7VgkjY-eMk_XrxXiufGFxsRkXshCZxUIy4iA9RP_WBwiIQiSpwmmvX9z",
  },
];

export const FAQS: FAQItemProps[] = [
  {
    question: "How far in advance should I book?",
    answer: "I recommend booking as soon as you have your venue and date secured. Most brides book 9-12 months in advance, especially for popular spring and summer dates.",
  },
  {
    question: "Do you travel to the venue?",
    answer: "Yes! I am a fully mobile service and will travel to your home, hotel, or venue. Travel fees may apply depending on the distance from the studio.",
  },
  {
    question: "What brands of makeup do you use?",
    answer: "My kit is curated with high-end professional products designed for HD photography. I primarily use Charlotte Tilbury, NARS, Dior, and Bobbi Brown.",
  },
  {
    question: "Is a trial required?",
    answer: "A trial is highly recommended. It allows us to meet and refine your vision to ensure complete peace of mind for your wedding day.",
  },
];

export const PORTFOLIO_IMAGES: PortfolioImageProps[] = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB3nxxHK1EM-I_GypSvPdJ6qn2X7Ohchn_VJ3lPDmYhc_qEXuz3ncsd4Km4_r-LKAVAeBu555GwAckZiL_4Wd4_Qx8PxQUtQkrQp8wooLkGzJljR_23YTmLtB1brtuqE-_bRpp6DwZ-YM-Zjo6wiW5HxaWS2g2IipaD9WrtKjRxpBW_VBLQYRFNSe3aixAtsvHaTr1yzT0qxoL8nl3tMYMt-rpJUaXU4xvMJdyfRhwTQhwkNLlnJorKAlPwTfHcVfwVL4x4W5FRWbg",
    alt: "Beautiful bride with natural makeup",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu2wjG_OV__RAUm7mZFV2-jenpfRomQbYXyB5XK_pTbw84xkJ2QUoC_did-qcWvnqFjas01hhOD3yKVuI73ui3rzIK6x6ZP8dzOs0xJ2iIJFeHukxXPYteghgC3Hzst4HlLx5ci_9RReRdqshLwNXSbFllvsSeO_tSN_nqLzK_ltht4HdaR_ony_QKejnOW-2FopRiFrJtlsax53j1dfS_DgL_PeoHhGXhb90OMu31BFFeYOPrrelVw4aTn3y-T84CTcOi6IBfSfm9",
    alt: "Bride looking down with soft eye makeup",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmfc4wwphRlro2_USeAOvEmc5Pa702AauXotryMv05Xc8JFVpyT9uy1mk7SkUKPNdmnNSuX_nzZJUxGWlbxpuSt9tRaHt8hQu-ugu8mUVc9IEG2yTAnop4QMiHjx4FBt9AbdHlA74DIQYyCS_X5E-FJdCABKpuCJLwNcxELj1vw_nN5R7qjLs9jDvCiT9gDrvP9980B8SdrLRkbnp0iLSVZXWU-co3WRCcpXU0Hnxn3VF4Raa4I1e2H3Qq27fgWuXjHxlX4PLIoq4-",
    alt: "Bride smiling with bouquet",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX9lwbtAS4OgksBBTeBowLiaMnC2xxW6-coDh7IM-B6NFhFiBAaZTRbNI-odqHZ9irKP7wKhptYZoSzdXPyQ63gzfEUwQpQIbfs04Pkb26uG_BCDpDxLDbjExWYEvOFtF0k0vc1PAXfGAFwrsmAOMOjjzsyFbVMKi0XrAKl5CMrfhZxELZknuUA_jU1zcSBtYc9t0mIOXq_IGNYAWL5S2RRwp17bPxNv9ARzT4tWftrXNszUDTlfyOhMdTQlsmUlfmtUOEOY_Fl5dC",
    alt: "Bride applying lipstick in mirror",
  },
];
