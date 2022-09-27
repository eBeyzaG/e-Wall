import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

const timersSlice = createSlice({
    name: "timers",
    initialState,
    reducers: {
        timerSet: {
            reducer(state, action) {
                state.hours = action.payload.hours
                state.minutes = action.payload.minutes
                state.seconds = action.payload.seconds
            },
            prepare(hours, minutes, seconds) {
                hours = Number(hours)
                minutes = Number(minutes)
                seconds = Number(seconds)
                console.log(hours)
                return {
                    payload: {
                        hours,
                        minutes,
                        seconds
                    }
                }
            }
        }
    }
})

export const selectTimer = (state) => state.timers

export const { timerSet } = timersSlice.actions

export default timersSlice.reducer;