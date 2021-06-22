import axios from "axios";
import {ENDPOINT_ROOT, HP_PERFORMANCE_MODE, HP_PERFORMANCE_STORAGE_TIME} from "../../constants";
import {getCurrentTime} from "../../helpers";

export const fetchLeads = (status= 'Invited', countryCode = 'au') => {
    const fetchUrl = `${ENDPOINT_ROOT}leads`;

    if (HP_PERFORMANCE_MODE) {
        let leads = localStorage.getItem(countryCode);

        if (leads) {
            leads = JSON.parse(leads);
            if ((getCurrentTime() - leads.lastFetch) < (HP_PERFORMANCE_STORAGE_TIME * 60000)) {
                return leads;
            }
        }
    }

    return axios.post(fetchUrl, {
        status
    })
        .then(function (response) {
            if (HP_PERFORMANCE_MODE) {
                localStorage.setItem(countryCode, JSON.stringify({...response.data, lastFetch: getCurrentTime()}));
            }
            return response.data;
        })
        .catch(function (error) {
            if (HP_PERFORMANCE_MODE) {
                const leads = localStorage.getItem(countryCode);

                if (leads) {
                    return JSON.parse(leads);
                }
            }
        });
};

export const updateLeadStatusWithId = (id, status = "Accepted") => {
    let targetUrl = `${ENDPOINT_ROOT}leads/update/${id}`;

    return axios.post(targetUrl, {
        status,
    })
        .then(function (response) {
            return response.data.id;
        })
        .catch(function (error) {
            alert(`Error updating lead: ${id}`)
        });
};
