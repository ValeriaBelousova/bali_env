import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  visible: boolean
}

const initialState: ModalState = {
  visible: false,
}

export const modalSlice = createSlice({
  name: 'setModalVisible',
  initialState,
  reducers: {
    setModalVisible: (state) => {
      state.visible = !state.visible
    },
  },
})

export const { setModalVisible } = modalSlice.actions

export default modalSlice.reducer