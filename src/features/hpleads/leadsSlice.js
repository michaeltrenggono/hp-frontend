import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchLeads, updateLeadStatusWithId} from './leadsAPI';

const initialState = {
    leads: [],
    status: 'idle',
};

export const fetchLeadsAsync = createAsyncThunk(
    'leads/fetchLeads',
    async () => {
        return fetchLeads();
    }
);

export const updateLeadWithIdAsync = createAsyncThunk(
    'leads/saveLeadWithId',
    async ({id, status}) => {
        return await updateLeadStatusWithId(id, status);
    }
);

export const leadsSlice = createSlice({
    name: 'leads',
    initialState,

    reducers: {
        filterLeads: (state, action) => {
            state.leads = state.leads.filter(lead => lead.id.includes(action.payload));
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchLeadsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLeadsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.leads = action.payload;
            })
            .addCase(updateLeadWithIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateLeadWithIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.leads = state.leads.filter(lead => lead.id !== action.payload);
            })
        ;
    },
});

// Selectors
export const selectAllLeads = state => state.leads.leads;

export const selectStatus = state => state.leads.status;

export const {filterLeads} = leadsSlice.actions;

export default leadsSlice.reducer;
