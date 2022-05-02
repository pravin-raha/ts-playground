import { SwitchState, TrafficEngine } from '../../src/traffic-engine'
import { Tuple } from '../../src/fsm'

it('Traffic engine commands fsm', async () => {
  const res = TrafficEngine.fsm.run(SwitchState.of({ state: 'yellow' }), { state: 'red' })

  expect(res).toStrictEqual(Tuple.of(SwitchState.of({ state: 'red' }), 1))

})


it('Traffic engine commands fsm', async () => {
  const res = TrafficEngine.fsm.runS(SwitchState.of({ state: 'yellow' }), { state: 'red' })

  expect(res).toStrictEqual(SwitchState.of({ state: 'red' }))

})
