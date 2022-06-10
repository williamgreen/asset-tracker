export const mockData = [
  {
    icon: "monzo.svg",
    name: "Monzo",
    delta: "+5%",
    description: "MZ",
    type: "Private Equity",
    // Generate on request
    holdings: 303.5,
    // Generate on request
    holdingsValue: {
      value: 16457.5,
      currency: "USD",
    },
    transactions: [
      {
        value: 84,
        currency: "USD",
        holdings: 12,
        timestamp: "2020-01-01T00:00:00.000Z",
      },
      {
        value: 53,
        currency: "USD",
        holdings: 291.5,
        timestamp: "2020-01-04T00:00:00.000Z",
      },
    ],
  },
  {
    icon: "facebook.svg",
    name: "Facebook",
    delta: "-90%",
    description: "FB",
    type: "Shares",
    holdings: 15,
    holdingsValue: {
      value: 2530,
      currency: "GBP",
    },
    transactions: [
      {
        value: 50,
        currency: "GBP",
        holdings: 6.1,
        timestamp: "2020-01-01T00:00:00.000Z",
      },
      {
        value: 250,
        currency: "GBP",
        holdings: 8.9,
        timestamp: "2020-01-04T00:00:00.000Z",
      },
    ],
  },
];
