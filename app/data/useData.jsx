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
    color: "#FEEDED",
    blurColor: "#FC4343",
    title: "Fraud detection and alerts",
    desc: "Fraud detection safeguards your money, sending instant alerts for any activity.",
  },
  {
    id: 3,
    color: "#E5FCF2",
    blurColor: "#08A965",
    title: "Transaction notifications",
    desc: "Instant notifications for transaction keep you informed to manage your finances.",
  },
  {
    id: 4,
    color: "#E1F1F9",
    blurColor: "#3B7793",
    title: "Biometric access",
    desc: "Easily and securely log in with biometric features, and facial recognition.",
  },
  {
    id: 5,
    color: "#FAEEE2",
    blurColor: "#D77E1B",
    title: "End-to-end encryption",
    desc: "By encryption, protecting your data from unauthorized access.",
  },
  {
    id: 5,
    color: "#F4EDFC",
    blurColor: "#932EFA",
    title: "24/7 Protection support",
    desc: "Our dedicated team is available around the clock to help you.",
  },
];

const useData = () => {
  return { menu, paymentData, partnerImages, paymentwayData, securityBoxData };
};

export default useData;
