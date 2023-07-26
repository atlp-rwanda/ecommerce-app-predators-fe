import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { OrdersAction,getByIdOrdersAction } from '../action/OrdersAction';
 
const OrdersSlice = createSlice({
  name: 'orders',   
  initialState: {
    data: [],
    status: '',
    loading: false,
    error: ''
  },

    reducers: {},    
      extraReducers: (builder) => {
    builder
      .addCase(OrdersAction.pending, (state) => {
        state.loading = true;
        state.status = 'loading';  
      })
      .addCase(OrdersAction.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false; 
        state.data = action.payload;  
        state.status = 'success'; 
      }) 
      .addCase(OrdersAction.rejected, (state,action) => {
        state.loading = true;
        toast.error('Error');
        state.status = 'error';
        state.error =action.payload as string;
      })
 
      .addCase(getByIdOrdersAction.pending, (state) => {
        state.loading = true;
        state.status = 'loading'; 
      })
      .addCase(getByIdOrdersAction.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false; 
        state.data = action.payload;  
      }) 
      .addCase(getByIdOrdersAction.rejected, (state,action) => {
        state.loading = true;
        toast.error('Error');
        state.status = 'error';
        state.error =action.payload as string;
      });

      

    }
})




export default OrdersSlice.reducer;
