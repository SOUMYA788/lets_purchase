export const ENV_CONFIG = {
    APP_API_KEY: String(import.meta.env.VITE_APP_API_KEY),
    AUTH_DOMAIN: String(import.meta.env.VITE_AUTH_DOMAIN),
    DATABASE_URL: String(import.meta.env.VITE_DATABASE_URL),
    PROJECT_ID: String(import.meta.env.VITE_PROJECT_ID),
    STORAGE_BUCKET: String(import.meta.env.VITE_STORAGE_BUCKET),
    MESSAGING_SENDER_ID: String(import.meta.env.VITE_MESSAGING_SENDER_ID),
    APP_ID: String(import.meta.env.VITE_APP_ID),
}