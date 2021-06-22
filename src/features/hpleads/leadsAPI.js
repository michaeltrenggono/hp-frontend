import axios from "axios";
import {ENDPOINT_ROOT} from "../../constants";

export const fetchLeads = (status= 'Invited') => {
    const fetchUrl = `${ENDPOINT_ROOT}leads`;

    return axios.post(fetchUrl, {
        status
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            alert(`Error fetching leads: ${error}`);
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
            alert(`Error updating lead ${id}: ${error}`);
        });
};
