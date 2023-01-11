// export const BACKEND_URL = "https://web-production-f947.up.railway.app";
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const TRANSACTION_CATEGORIES = [
    "clothing",
    "food",
    "entertainment",
    "travel",
    "none",
];

export const TRANSACTION_TYPES = [
    "split equally",
    "treat",
    "custom split",
    "one-time",
    "none",
];
