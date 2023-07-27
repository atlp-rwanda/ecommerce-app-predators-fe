import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const imageSlice = createSlice({
    name: 'images',
    initialState: {images: []} as {images: string[]},
    reducers: {
        setImages :(state, action: PayloadAction<string[]>) => {
            state.images = action.payload;
        }
    },
})

export const { setImages} = imageSlice.actions
export default imageSlice.reducer;
