import moment from 'moment';

const dateTimeFormat = (dateTime) => {
    return moment(new Date(dateTime)).format("YYYY-MM-DD HH:mm:ss");
}

export {
    dateTimeFormat
}