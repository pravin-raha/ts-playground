import { FSM, Tuple } from './fsm'

export type ChangeToRed = {
  state: 'red'
}

export type ChangeToGreen = {
  state: 'green'
}

export type ChangeToYellow = {
  state: 'yellow'
}

export type SwitchCommand = ChangeToRed | ChangeToGreen | ChangeToYellow


export type RedEvent = {
  state: 'red'
}

export type GreenEvent = {
  state: 'green'
}

export type YellowEvent = {
  state: 'yellow'
}

export type SwitchEvent = YellowEvent | GreenEvent | RedEvent

export class SwitchState {
  private constructor(readonly state: SwitchEvent) {
  }

  static of(state: SwitchEvent) {
    return new SwitchState(state)
  }
}

type Unit = 1

export class TrafficEngine {
  static fsm = FSM.of<SwitchState, SwitchCommand, Unit>(
    (state: SwitchState, input: SwitchCommand) => {
      switch (input.state) {
        case 'yellow':
          if (state.state.state !== 'green') {
            return Tuple.of(state, 1)
          }
          return Tuple.of(SwitchState.of({ state: 'yellow' }), 1)
        case 'red':
          if (state.state.state !== 'yellow') {
            return Tuple.of(state, 1)
          }
          return Tuple.of(SwitchState.of({ state: 'red' }), 1)
        case 'green':
          if (state.state.state !== 'green') {
            return Tuple.of(state, 1)
          }
          return Tuple.of(SwitchState.of({ state: 'green' }), 1)
      }
    }
  )
}
