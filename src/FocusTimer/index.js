import * as events from './events.js'
import state from "./state.js"
import * as timer from './timer.js'

export function start(minuts, seconds) {
  state.minutes = minuts
  state.seconds = seconds

  timer.updateDisplay()

  events.registerControls()
  events.setMinutes()
}