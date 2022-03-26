export default {
  pushToState (state, payload) {
    // TODO Append progress and progress details
    let last = state.terminalOutput.output[state.terminalOutput.output.length - 1]
    if (payload.stream && last !== payload.stream) {
      state.terminalOutput.output.push(payload.stream)
    } else if (payload.status && last !== payload.status) {
      state.terminalOutput.output.push(payload.status)
    }
  },
  setEnd (state, payload) {
    state.terminalOutput.isEnd = payload;
  }
};
