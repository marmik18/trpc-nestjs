import * as trcp from '@trpc/server'

type Context = {
  any: string
}

export const trpcRouter = () => {
  return trcp.router<Context>()
}
