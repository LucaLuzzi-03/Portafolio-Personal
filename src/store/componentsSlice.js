import { createSlice } from '@reduxjs/toolkit';

export const componentsSlice = createSlice({
    name: 'components',
    initialState: {
        menu: true
    },
    reducers: {
        openMenu: (state, { payload } ) => {
            state.menu = payload;
        },        
        closeMenu: (state, { payload } ) => {
            state.menu = payload;
        },
    }
});


export const { openMenu, closeMenu } = componentsSlice.actions;