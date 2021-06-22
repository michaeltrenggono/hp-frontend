import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchLeadsAsync, selectAllLeads, selectStatus,
} from "./leadsSlice";
import styles from "./Leads.module.scss";
import {LeadsList} from "./components/LeadsList";
import {LeadsSearch} from "./components/LeadsSearch";

export const Leads = ({leadStatus}) => {
    const leads = useSelector(selectAllLeads);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    const fetchLatestLeads = useCallback((status) => {
        dispatch(fetchLeadsAsync(status));
    }, [dispatch]);

    useEffect(() => {
        fetchLatestLeads(leadStatus);
    }, [fetchLatestLeads, leadStatus]);

    return (
        <div className={styles.leads}>
            <div className="container">
                <div className="col-12">
                    <LeadsSearch/>
                </div>

                {(Array.isArray(leads) && leads.length > 0 && status !== "loading") && (
                    <LeadsList leads={leads} leadStatus={leadStatus}/>
                )}
            </div>
        </div>
    );
};
