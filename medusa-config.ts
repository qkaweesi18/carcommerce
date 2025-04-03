import { loadEnv, defineConfig } from '@medusajs/medusa/dist/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    workerMode: "shared",
    http: {
      storeCors: "*",
      adminCors: "*",
      authCors: "*",
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET
    }
  },
  modules: [
    {
      resolve: "@medusajs/admin",
      options: {
        autoRebuild: true
      }
    }
  ]
})