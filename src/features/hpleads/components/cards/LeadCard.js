import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import styles from "./LeadCard.module.scss";
import {LeadCardRow} from "./LeadCardRow";
import {IconInitial} from "../IconInitial";
import {ButtonStrip} from "../ButtonStrip";
import {updateLeadWithIdAsync} from "../../leadsSlice";
import {formatPrice, formatDateTime} from "../../../../helpers";
import {LEAD_ACCEPTED, LEAD_INVITED} from "../../../../constants";

export const LeadCard = ({className, lead}) => {

    const dispatch = useDispatch();

    const updateLead = useCallback((status) => {
        dispatch(updateLeadWithIdAsync({id: lead.id, status}));
    }, [dispatch, lead.id]);

    return (
        <div className={`${styles.leadCardContainer} ${className}`}>
            <div className="card">
                <div className="card-body p-0">
                    <LeadCardRow>
                        <div className={styles.header}>
                            <IconInitial firstName={lead.customer.first_name}/>
                            <div>
                                <div className="font-weight-bold text-dark">
                                    {lead.customer.first_name} {lead.status === LEAD_ACCEPTED && lead.customer.last_name}
                                </div>
                                <div>{formatDateTime(lead.updated_at !== null ? lead.updated_at : lead.created_at)}</div>
                            </div>
                        </div>
                    </LeadCardRow>

                    <LeadCardRow>
                        <div className={styles.summary}>
                            <span>
                                <i className="fa fa-map-marker-alt"/> {lead.suburb}
                            </span>
                            <span>
                                <i className="fa fa-briefcase"/> {lead.category}
                            </span>
                            <span>
                                Job ID: {lead.id}
                            </span>
                            {lead.status === LEAD_ACCEPTED && (
                                <span>
                                    <span>{formatPrice(lead.price)}</span> Lead Invitation
                                </span>
                            )}
                        </div>
                    </LeadCardRow>

                    <LeadCardRow>
                        {lead.status === LEAD_ACCEPTED && (
                            <div className={styles.customerContact}>
                                <span>
                                    <i className="fa fa-phone-alt"/> <a href={`tel:${lead.customer.phone}`} className="text-orange font-weight-bold">{lead.customer.phone}</a>
                                </span>
                                <span>
                                    <i className="fa fa-envelope"/> <a href={`mailto:${lead.customer.email}`} className="text-orange font-weight-bold">{lead.customer.email}</a>
                                </span>
                            </div>
                        )}
                        {lead.description}
                    </LeadCardRow>

                    {lead.status === LEAD_INVITED && (
                        <LeadCardRow className="d-md-none">
                            <strong>{formatPrice(lead.price)}</strong> Lead Invitation
                        </LeadCardRow>
                    )}

                    {lead.status === LEAD_INVITED && (
                        <LeadCardRow>
                            <div className={`d-flex align-items-center cta ${styles.cta}`}>
                                <ButtonStrip label="Accept" className={styles.accept} onClick={() => updateLead(LEAD_ACCEPTED)}/>
                                <ButtonStrip label="Decline" className={styles.decline} onClick={() => updateLead("Declined")}/>
                                <span className="d-none d-md-inline">
                                    <strong>{formatPrice(lead.price)}</strong> Lead Invitation
                                </span>
                            </div>
                        </LeadCardRow>
                    )}
                </div>
            </div>
        </div>
    );
};
