import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState ={
    capsules:[],
    isLoading:false,
    isError:false,
}

// export const fetchCapsules = createAsyncThunk('fetchCapsules',async ()=>{
//     const response=await fetch(`https://api.spacexdata.com/v3/capsules`);
//     return response.json()
// })

export const fetchCapsules = createAsyncThunk('fetchCapsules',async (values)=>{

  if(values){
  const response=await fetch(`https://api.spacexdata.com/v3/capsules?${values.option}=${values.searchValue}`);
  return response.json()
  }else{
    const response=await fetch(`https://api.spacexdata.com/v3/capsules`);
   return response.json()
  }
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  extraReducers : (builder) => {
    builder.addCase(fetchCapsules.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchCapsules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.capsules = action.payload;
      });
      builder.addCase(fetchCapsules.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
  reducers: {
    updateData: (state,action) => {
        state.capsules.push((action.payload))
        return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateData } = counterSlice.actions

export default counterSlice.reducer