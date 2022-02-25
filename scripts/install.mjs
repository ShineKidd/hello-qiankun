import { $ } from 'zx'

await $`cd react-app && yarn`
await $`cd vue-app && yarn`
await $`cd vite-app && pnpm install`