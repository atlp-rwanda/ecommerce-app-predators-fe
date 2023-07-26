import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Message } from '../../utils/chatDefinitions';
import { RootState } from '../store/Store';

interface ChatState {
  publicMessages: Message[];
  csMessages: Message[];
}

const initialState: ChatState = {
  publicMessages: [],
  csMessages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addPublicMessage: {
      reducer: (state, action: PayloadAction<Message>) => {
        state.publicMessages.push(action.payload);
      },
      prepare: (message: Message) => {
        return { payload: message };
      },
    },
    addCSMessage: {
      reducer: (state, action: PayloadAction<Message>) => {
        state.csMessages.push(action.payload);
      },
      prepare: (message: Message) => {
        return { payload: message };
      },
    },
  },
});

export const { addPublicMessage, addCSMessage } = chatSlice.actions;

export const selectPublicMessages = (state: RootState) =>
  state.chat.publicMessages;
export const selectCsMessages = (state: RootState) => state.chat.csMessages;

export default chatSlice.reducer;
