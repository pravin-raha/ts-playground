import { SwitchState, TrafficEngine } from '../../src/trafic-engine'
import { Tuple } from '../../src/fsm'
import { pipe, Stream } from '@effect-ts/core'

it('Traffic engine commands fsm', async () => {
  const res = TrafficEngine.fsm.run(SwitchState.of(null), { state: 'red' })

  expect(res).toStrictEqual(Tuple.of(SwitchState.of({ state: 'red' }), 1))

  return Promise.resolve(1)
})

it('Traffic engine commands fsm', async () => {
  const res = TrafficEngine.fsm.run(SwitchState.of(null), { state: 'red' })


  expect(res).toStrictEqual(Tuple.of(SwitchState.of({ state: 'red' }), 1))

  return Promise.resolve(1)
})
