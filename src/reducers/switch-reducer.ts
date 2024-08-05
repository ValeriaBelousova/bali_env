import { createSlice } from '@reduxjs/toolkit'

export interface SwitchState {
  visible_flows: boolean,
  visible_hex: boolean,
}

const initialState: SwitchState = {
    visible_flows: false,
    visible_hex: true,
}

export const switchSlice = createSlice({
  name: 'setFlowsVisible',
  initialState,
  reducers: {
    setFlowsVisible: (state) => {
      state.visible_flows = !state.visible_flows
    },
    setHexVisible: (state) => {
        state.visible_hex = !state.visible_hex
    }
  },
})

export const { setFlowsVisible,  setHexVisible } = switchSlice.actions

export default switchSlice.reducer