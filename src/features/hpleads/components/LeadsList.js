import React from "react";
import styles from "./LeadsList.module.scss";
import {LeadCard} from "./cards/LeadCard";

export const LeadsList = React.memo(({leads, leadStatus}) => (
    <div className={styles.leadsContainer}>
        {leads.map((lead, index) => (lead.status === leadStatus) && (
            <LeadCard className="col-12" lead={lead} key={`lead-${index}`}/>
        ))}
    </div>
));
