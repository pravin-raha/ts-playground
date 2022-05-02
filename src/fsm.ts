export class Tuple<K, V> {
  private constructor(readonly k: K, readonly v: V) {
  }

  static of<K, V>(k: K, v: V) {
    return new Tuple(k, v)
  }
}

export class FSM<S, I, O> {

  private constructor(readonly run: (state: S, input: I) => Tuple<S, O>) {
  }

  static of<S, I, O>(run: (stage: S, input: I) => Tuple<S, O>): FSM<S, I, O> {
    return new FSM(run)
  }

  runS(state: S, input: I): S {
    return this.run(state, input).k
  }

}
