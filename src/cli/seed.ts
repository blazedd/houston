/**
 * houston/src/cli/seed.ts
 * Runs database seed scripts
 */

// Command line files are allowed to have console log statements
// tslint:disable no-console

import { Database } from '../lib/database/database'
import { getConfig } from './cli'

export const command = 'seed'
export const describe = 'Seeds the database tables with fake data'

export async function handler (argv) {
  const config = getConfig(argv)
  const database = new Database(config)

  console.log(`Seeding database tables`)

  try {
    await database.knex.seed.run()
  } catch (e) {
    console.error('Error seeding database tables')
    console.error(e.message)
    process.exit(1)
  }

  console.log('Seeded database tables')
  process.exit(0)
}
