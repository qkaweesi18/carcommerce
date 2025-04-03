import { ConfigModule } from '@medusajs/medusa/dist/types/global'

const config: ConfigModule = {
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
}

export default config