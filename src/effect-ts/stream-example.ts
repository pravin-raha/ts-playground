import { Effect, pipe, Stream } from '@effect-ts/core'

function main() {
  pipe(
    Stream.succeed(3),
    Stream.forEach(a => Effect.succeedWith(() => console.log(a))),
    Effect.runPromise,
  )

}

main()
