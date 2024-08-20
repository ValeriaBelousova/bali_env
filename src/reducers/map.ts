import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MapState {
    basemap: string,
}

const initialState: MapState = {
    basemap: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
}

export const mapSlice = createSlice({
  name: 'setBasemap',
  initialState,
  reducers: {
    setBasemap: (state, action: PayloadAction<string>) => {
      state.basemap = action.payload
    },
  },
})

export const { setBasemap } = mapSlice.actions

export default mapSlice.reducer