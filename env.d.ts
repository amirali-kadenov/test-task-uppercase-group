declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv {
      OMDB_API_URL: string
      OMDB_API_KEY: string
    }
  }
}

export {}
