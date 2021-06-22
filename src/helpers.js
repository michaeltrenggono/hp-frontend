import moment from "moment";

export const formatPrice = (price) => `$${parseInt(price).toFixed(2)}`;

export const formatDateTime = (dateTime) => {
    const momentObj = moment.parseZone(dateTime);
    return `${momentObj.format("MMMM")} ${momentObj.date()} @ ${momentObj.format("LT").toLowerCase()}`;
};
