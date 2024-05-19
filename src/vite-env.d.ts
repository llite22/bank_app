declare const __IS_DEV__: boolean

interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL: string
    readonly VITE_APP_ACCEPT: string
    readonly VITE_APP_CONTENT_TYPE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
