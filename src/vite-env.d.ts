interface ImportMetaEnv {
  readonly VITE_KAKAO_API: string;
  readonly VITE_KAKAO_REST_API : string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}