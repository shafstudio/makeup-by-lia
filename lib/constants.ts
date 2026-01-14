import { ServiceCardProps, TestimonialCardProps, FAQItemProps, NavLink, PortfolioImageProps } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
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
  {
    quote: "From start to finish, the experience was exceptional. The attention to detail and the quality of products used made all the difference. My makeup looked incredible in person and in photos.",
    author: "Rachel & James",
    date: "December 2023",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4J1ktOs92MOjJ7KBEAF7OXo-piG-ZVw6dkgpsetvzyXC08uZkeDWcMlojBJVxrFJA5xjwsVhKz4fkMP-tTauSm_s1LDlrEYmdDnHWtk4kP3vUfpfHSVH2Iq1JkBKWBSW4YQQa7D7GX2oUceiycVFJoUNkGBAjdKvIoQpmK6kCirdRc5VO8-Fr-hOaSNF_CvnxTdLMxMUxDtHvszKcl-Xx9lWsVgZyfhfEAP2aHrvBMbBa4o2JGNB6_9_NdrL2-Xxpzd1DRtARY4Ff",
  },
  {
    quote: "I was nervous about wearing makeup all day, but she created such a natural look that I forgot I was even wearing any. It held up beautifully from morning until midnight.",
    author: "Olivia & Mark",
    date: "February 2024",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHmpO21n2DCntOLNljbJxWqjl76cN_sq8_4FaWXFjglvb92mhIgiJxWj6ljEPkyYw5cMVR4d7JJrE4GNch2BlgmFKXL9sgorgX_bcLbEdVVdkm31Miz6g09qB8cNGmgiA1V6hhQRGKGUQnPp4YTWyD5QdLrK_UNlh5s35OCZj7u2kar-4YSm3F1JEpQnFNPNFnOsLVRuD67Aypz2YZEkOF1BGBMJ_imLzlwTVTqc4vneopXa7LWZRsIzvE_AjZZGZD6OMNXK8cAReK",
  },
  {
    quote: "The trial session was so helpful in finding the perfect look. On the wedding day, she arrived early, kept everything on schedule, and made the whole bridal party feel pampered and beautiful.",
    author: "Amanda & Chris",
    date: "April 2024",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeJAHlcIU-ct3Sl1g-9DrjY82UMBU3-U95DBS3QKnaGVjnD8VQYJzAYkzZQq4flkbXvnxh2KPGFkPJoPbaXVTLr-ht6SSamFBXVK10ueGRZVmxmll0C--vpEzG95HRlZB6U2zpQDmuFa-r3ePwwoGgaQqktCi_me7aiMJ8rX880nNi4VDeohZzjOZNchOrxXx11IIKh07WjbYtY7G_63Ap7VgkjY-eMk_XrxXiufGFxsRkXshCZxUIy4iA9RP_WBwiIQiSpwmmvX9z",
  },
  {
    quote: "Her calm demeanor helped ease my wedding day jitters. The makeup was exactly what I envisioned - timeless, elegant, and perfectly suited to my style. I've never felt more confident.",
    author: "Lauren & Daniel",
    date: "May 2024",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4J1ktOs92MOjJ7KBEAF7OXo-piG-ZVw6dkgpsetvzyXC08uZkeDWcMlojBJVxrFJA5xjwsVhKz4fkMP-tTauSm_s1LDlrEYmdDnHWtk4kP3vUfpfHSVH2Iq1JkBKWBSW4YQQa7D7GX2oUceiycVFJoUNkGBAjdKvIoQpmK6kCirdRc5VO8-Fr-hOaSNF_CvnxTdLMxMUxDtHvszKcl-Xx9lWsVgZyfhfEAP2aHrvBMbBa4o2JGNB6_9_NdrL2-Xxpzd1DRtARY4Ff",
  },
  {
    quote: "Absolutely worth every penny. She understood my vision immediately and executed it flawlessly. The photos came back and I'm still in awe of how beautiful everything looked.",
    author: "Victoria & Ryan",
    date: "July 2024",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHmpO21n2DCntOLNljbJxWqjl76cN_sq8_4FaWXFjglvb92mhIgiJxWj6ljEPkyYw5cMVR4d7JJrE4GNch2BlgmFKXL9sgorgX_bcLbEdVVdkm31Miz6g09qB8cNGmgiA1V6hhQRGKGUQnPp4YTWyD5QdLrK_UNlh5s35OCZj7u2kar-4YSm3F1JEpQnFNPNFnOsLVRuD67Aypz2YZEkOF1BGBMJ_imLzlwTVTqc4vneopXa7LWZRsIzvE_AjZZGZD6OMNXK8cAReK",
  },
  {
    quote: "She has a true gift for enhancing natural beauty. My mom, bridesmaids, and I all looked like the best versions of ourselves. The makeup photography beautifully and lasted the entire evening.",
    author: "Sophie & Alexander",
    date: "September 2024",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeJAHlcIU-ct3Sl1g-9DrjY82UMBU3-U95DBS3QKnaGVjnD8VQYJzAYkzZQq4flkbXvnxh2KPGFkPJoPbaXVTLr-ht6SSamFBXVK10ueGRZVmxmll0C--vpEzG95HRlZB6U2zpQDmuFa-r3ePwwoGgaQqktCi_me7aiMJ8rX880nNi4VDeohZzjOZNchOrxXx11IIKh07WjbYtY7G_63Ap7VgkjY-eMk_XrxXiufGFxsRkXshCZxUIy4iA9RP_WBwiIQiSpwmmvX9z",
  },
];

export const FAQS: FAQItemProps[] = [
  {
    question: "Where is your studio located?",
    answer: " My studio is located in Guildford, NSW 2161.",
  },
  {
    question: "How do I secure my appointment?",
    answer: "A 50% booking fee is required along with your event details (date, location, services, number of people). Your appointment is confirmed only once both are received.",
  },
  {
    question: "Do you travel for bookings?",
    answer: "Yes! I’m happy to come to your location. Travel fees depend on the location, and parking may be added if necessary. For longer trips, overnight arrangements may be required.",
  },
  {
    question: "Do you offer trial sessions?",
    answer: "Yes! Trials are recommended for bridal clients so you can preview your look. They typically take 2–2.5 hours at my Guildford studio or on location, depending on your preference.",
  },
  {
    question: "Is a trial session a must?",
    answer: "A trial is not mandatory, but it is strongly recommended for brides. It allows us to finalise your look, test longevity, and ensure you feel completely confident and comfortable on your special day.",
  },
  {
    question: "Can I wear eyelash extensions or have a lash lift?",
    answer: "Eyelash extensions are perfectly fine. However, lash lifts are <strong>not recommended immediately before your appointment </strong>, as they can affect the application of false lashes. I provide a range of strip lashes to suit both natural and glamorous looks.",
  },
  {
    question: "What products do you use?",
    answer: "I primarily use <strong>high-end and professional makeup brands </strong> known for their quality, longevity, and flawless results. My kit includes luxury and pro favourites such as <strong> Chanel, Dior, Tom Ford, Clé de Peau Beauté, Natasha Denona, Charlotte Tilbury, Hourglass, Huda Beauty, Estée Lauder, Anastasia Beverly Hills, Makeup by Mario, Patrick Ta, MAC, Makeup Forever, RCMA, and NARS </strong>, along with selected products from <strong> Mecca and Sephora </strong>. <br/>All products and tools are <strong>thoroughly sanitized and suitable</strong> for all skin types.",
  },
  {
    question: "Can I bring my own makeup?",
    answer: "Yes, you may. However, my service includes the use of my professional products and techniques. If I’m unfamiliar with a product, I can’t guarantee the final result.",
  },
  {
    question: "How long does a bridal appointment take?",
    answer: "Bridal makeup typically takes <strong>90–120 minutes</strong>. Hair styling and trial sessions may require additional time. All timings are discussed during your consultation.",
  },
  {
    question: "Can I book makeup for my bridal party or a group?",
    answer: "Absolutely. I can accommodate multiple clients. Please provide full details so I can schedule accordingly and ensure a smooth, relaxed experience for everyone.",
  },
  {
    question: "Do you offer hair styling?",
    answer: "Yes, I provide <strong>hair styling for weddings and special events</strong>, with styles tailored to your vision and preferences.",
  },
  {
    question: "Will my makeup last all day?",
    answer: "Yes. I use professional products and techniques designed for long wear. Touch-up services can also be arranged if required.",
  },
  {
    question: "What happens if I’m running late?",
    answer: "Please arrive on time to receive the full experience. Late arrivals may result in a shortened appointment or rescheduling, with the full fee still applicable. Early morning start times may incur additional fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept <strong>bank transfer, PayID, and other secure payment methods</strong> for both deposits and final payments.",
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
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB3nxxHK1EM-I_GypSvPdJ6qn2X7Ohchn_VJ3lPDmYhc_qEXuz3ncsd4Km4_r-LKAVAeBu555GwAckZiL_4Wd4_Qx8PxQUtQkrQp8wooLkGzJljR_23YTmLtB1brtuqE-_bRpp6DwZ-YM-Zjo6wiW5HxaWS2g2IipaD9WrtKjRxpBW_VBLQYRFNSe3aixAtsvHaTr1yzT0qxoL8nl3tMYMt-rpJUaXU4xvMJdyfRhwTQhwkNLlnJorKAlPwTfHcVfwVL4x4W5FRWbg",
    alt: "Beautiful bride with natural makeup",
  },
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
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB3nxxHK1EM-I_GypSvPdJ6qn2X7Ohchn_VJ3lPDmYhc_qEXuz3ncsd4Km4_r-LKAVAeBu555GwAckZiL_4Wd4_Qx8PxQUtQkrQp8wooLkGzJljR_23YTmLtB1brtuqE-_bRpp6DwZ-YM-Zjo6wiW5HxaWS2g2IipaD9WrtKjRxpBW_VBLQYRFNSe3aixAtsvHaTr1yzT0qxoL8nl3tMYMt-rpJUaXU4xvMJdyfRhwTQhwkNLlnJorKAlPwTfHcVfwVL4x4W5FRWbg",
    alt: "Beautiful bride with natural makeup",
  },
];
