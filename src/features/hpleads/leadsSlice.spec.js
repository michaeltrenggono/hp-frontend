import leadsReducer, {
    fetchLeadsAsync,
} from "./leadsSlice"

describe('Should fetch leads asynchronously', function () {
    const initialState = {
        initialLeads: [],
        leads: [],
        status: 'idle',
    };

    it('should handle initial state', () => {
        expect(leadsReducer(undefined, { type: 'unknown' })).toEqual({
            initialLeads: [],
            leads: [],
            status: 'idle',
        });
    });

    it('set loading to true while fetching', () => {
        const action = {type: fetchLeadsAsync.pending.type};
        const state = leadsReducer(initialState, action);
        expect(state.status).toBe("loading");
    });

    it('should have leads when finished', () => {
        const action = {type: fetchLeadsAsync.fulfilled.type, payload: [2, 3]};
        const state = leadsReducer(initialState, action);
        expect(state).toEqual({initialLeads: [2, 3], leads: [2, 3], status: 'idle' });
    });
});
