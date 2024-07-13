import { sleep } from './utils'

async function main(args: string[]) {
  console.info('Hello, world!', args)
  await sleep(1000)
}

main(process.argv.slice(2)).catch(err => {
  console.error(err)
  process.exit(1)
})
