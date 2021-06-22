import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchLeads, updateLeadStatusWithId} from './leadsAPI';

const initialState = {
    initialLeads: [],
    leads: [],
    status: 'idle',
};

export const fetchLeadsAsync = createAsyncThunk(
    'leads/fetchLeads',
    async (status) => {
        return fetchLeads(status);
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
        filterLeadsByName: (state, action) => {
            state.leads = state.leads.filter(lead => (`${lead.customer.first_name} ${lead.customer.last_name}`).toLowerCase().includes(action.payload.toLowerCase()));
        },
        filterClear: (state) => {
            state.leads = state.initialLeads;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchLeadsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLeadsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.initialLeads = action.payload;
                state.leads = action.payload;
            })
            .addCase(updateLeadWithIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateLeadWithIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.initialLeads = action.payload;
                state.leads = state.leads.filter(lead => lead.id !== action.payload);
            })
        ;
    },
});

// Selectors
export const selectAllLeads = state => state.leads.leads;

export const selectStatus = state => state.leads.status;

export const {filterLeadsByName, filterClear} = leadsSlice.actions;

export default leadsSlice.reducer;
