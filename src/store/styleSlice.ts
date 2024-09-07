import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    style: {
        backGroundColor: 'gray',
        color: 'black'
    }
}

const styleSlice = createSlice({
    name: 'styles',
    initialState,
    reducers: {
        setLightTheme: (state) => {
            state.style = {
                backGroundColor: '#d7d4d4',
                color: '#212020'
            }
        },
        setBlackTheme: (state) => {
            state.style = {
                backGroundColor: '#212020',
                color: '#d7d4d4'
            }
        }
    }
});

export const {setLightTheme, setBlackTheme} = styleSlice.actions;
export default styleSlice.reducer;