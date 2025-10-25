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

const useData = () => {
  return { menu, paymentData, partnerImages };
};

export default useData;
