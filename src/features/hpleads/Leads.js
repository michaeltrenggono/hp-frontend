import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchLeadsAsync, selectAllLeads, selectStatus,
} from "./leadsSlice";
import styles from "./Leads.module.scss";
import {LeadsList} from "./components/LeadsList";

export const Leads = ({leadStatus}) => {
    const leads = useSelector(selectAllLeads);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    const fetchLatestLeads = useCallback(() => {
        dispatch(fetchLeadsAsync());
    }, [dispatch]);

    useEffect(() => {
        fetchLatestLeads();
    }, [fetchLatestLeads]);

    const render = () => {
        return (
            <div className={styles.leads}>
                <div className="container">
                    {(leads.length > 0 && status !== "loading") && (
                        <LeadsList leads={leads} leadStatus={leadStatus}/>
                    )}
                </div>
            </div>
        );
    };

    return render();
};
