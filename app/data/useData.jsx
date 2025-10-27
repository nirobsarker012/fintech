const menu = [
  {
    id: 1,
    item: "Features",
  },
  {
    id: 2,
    item: "Pricing",
  },
  {
    id: 3,
    item: "Security",
  },
  {
    id: 4,
    item: "Benefits",
  },
];

// Payment Data
const paymentData = [
  {
    id: 1,
    img: "/images/payment.png",
    title: "Instant payments",
    desc: "Send money to friends or family in real-time, for free.",
    bgColor: "#F3F7FF",
  },
  {
    id: 2,
    img: "/images/no-fees.png",
    title: "No hidden fees",
    desc: "Clear and simple pricing. Always be aware of your costs.",
    bgColor: "#FBF6EF",
  },
  {
    id: 3,
    img: "/images/wallet.png",
    title: "Digital wallet",
    desc: "Store money securely and make fast transfers or purchases.",
    bgColor: "#EEF9FE",
  },
  {
    id: 4,
    img: "/images/transitions.png",
    title: "Secure transactions",
    desc: "End-to-end encryption for all transactions.",
    bgColor: "#F4EDFC",
  },
];

// Partner Image
const partnerImages = [
  {
    id: 1,
    img: "/images/logo-1.png",
  },
  {
    id: 2,
    img: "/images/logo-2.png",
  },
  {
    id: 3,
    img: "/images/logo-3.png",
  },
  {
    id: 4,
    img: "/images/logo-4.png",
  },
  {
    id: 5,
    img: "/images/logo-5.png",
  },
];

// PaymentWay Data
const paymentwayData = [
  {
    id: 1,
    num: "01",
    img: "/images/fi_1.svg",
    title: "Download Easy Pay",
    desc: "Get the Easy Pay app today from the App Store or Google Play hassle free.",
    borderColor:
      "linear-gradient(180deg, #F5F5F5 0%, #CBCBCB 50%, #F5F5F5 100%)",
  },
  {
    id: 2,
    num: "02",
    img: "/images/fi_2.svg",
    title: "Link your bank or card",
    desc: "Easily connect your account in seconds with advanced security for peace of mind.",
    borderColor:
      "linear-gradient(180deg, #F5F5F5 0%, #CBCBCB 50%, #F5F5F5 100%)",
  },
  {
    id: 3,
    num: "03",
    img: "/images/fi_3.svg",
    title: "Start paying",
    desc: "Easily split bills, send money to friends, and make smooth online payments instantly.",
    borderColor:
      "linear-gradient(180deg, #F5F5F5 0%, #CBCBCB 50%, #F5F5F5 100%)",
  },
];

// Security Box Details
const securityBoxData = [
  {
    id: 1,
    color: "#2E68FD",
    blurColor: "#ECF0FB",
    title: "Two-factor authentication",
    desc: "Two-factor authentication ensures added protection by using verification steps.",
  },
  {
    id: 2,
    color: "#FC4343",
    blurColor: "#FEEDED",
    title: "Fraud detection and alerts",
    desc: "Fraud detection safeguards your money, sending instant alerts for any activity.",
  },
  {
    id: 3,
    color: "#08A965",
    blurColor: "#E5FCF2",
    title: "Transaction notifications",
    desc: "Instant notifications for transaction keep you informed to manage your finances.",
  },
  {
    id: 4,
    color: "#3B7793",
    blurColor: "#E1F1F9",
    title: "Biometric access",
    desc: "Easily and securely log in with biometric features, and facial recognition.",
  },
  {
    id: 5,
    color: "#D77E1B",
    blurColor: "#FAEEE2",
    title: "End-to-end encryption",
    desc: "By encryption, protecting your data from unauthorized access.",
  },
  {
    id: 5,
    color: "#932EFA",
    blurColor: "#F4EDFC",
    title: "24/7 Protection support",
    desc: "Our dedicated team is available around the clock to help you.",
  },
];

// Price card data

const priceCardData = [
  {
    id: 1,
    title: "Free Plan",
    subTitle: "Free for personal payments.",
    amount: "0",
    btnText: "Get Free Plan",
    priceList: [
      {
        title: "Up to 100 transections per month",
      },
      {
        title: "Basic proud protection",
      },
      {
        title: "Email support",
      },
    ],
  },
  {
    id: 2,
    title: "Advanced",
    subTitle: "Minimal fees for advanced transactions",
    amount: "19",
    isBg: true,
    btnText: "Get Advanced Plan",
    priceList: [
      {
        title: "Up to 1000 transections per month",
      },
      {
        title: "Advanced proud protection",
      },
      {
        title: "Detailed transaction reports",
      },
      {
        title: "Priority email & chat support",
      },
    ],
  },
  {
    id: 3,
    title: "Business",
    subTitle: "Premium business transactions",
    amount: "29",
    btnText: "Get Business Plan",
    priceList: [
      {
        title: "Unlimited transections per month",
      },
      {
        title: "Premium proud protection",
      },
      {
        title: "Detailed transaction reports",
      },
      {
        title: "Priority email & chat support",
      },
    ],
  },
];

// Footer Data
const footerShortLinksData = [
  {
    id: 1,
    title: "Short links",
    metaLink: [
      {
        link: "Features",
      },
      {
        link: "How it works",
      },
      {
        link: "Security",
      },
      {
        link: "Testimonial",
      },
    ],
  },
];

const footerOtherPageData = [
  {
    id: 1,
    title: "Other pages",
    metaLink: [
      {
        link: "Privacy policy",
      },
      {
        link: "Terms & conditions",
      },
      {
        link: "404",
      },
    ],
  },
];

const useData = () => {
  return {
    menu,
    paymentData,
    partnerImages,
    paymentwayData,
    securityBoxData,
    priceCardData,
    footerShortLinksData,
    footerOtherPageData,
  };
};

export default useData;
