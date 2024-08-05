import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { hex } from "../hex";

export interface HexState {
    hex_data: any
}

const initialState: HexState = {
  hex_data: hex,
}

export const hexSlice = createSlice({
  name: 'setHexData',
  initialState,
  reducers: {
    setHexData: (state, action: PayloadAction<number>) => {
      state.hex_data = action.payload
    },
  },
})

export const { setHexData } = hexSlice.actions

export default hexSlice.reducer