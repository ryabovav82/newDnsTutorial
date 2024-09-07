import {createSlice} from "@reduxjs/toolkit";

const initialState = {
users: [
    {
        id: 1,
        name: 'Andrey',
        role: 'admin',
        nikName: 'RAV'
    },
    {
        id: 2,
        name: 'Alena',
        role: 'user',
        nikName: 'wife'
    },
    {
        id: 3,
        name: 'Arseniy',
        role: 'user',
        nikName: 'son'
    },
    {
        id: 4,
        name: 'Vladimir',
        role: 'user',
        nikName: 'son2'
    },
]
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: () => {

        }
    }
});

export const { add } = usersSlice.actions;
export default usersSlice.reducer;