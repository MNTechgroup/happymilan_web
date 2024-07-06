const moment = require('moment');

function getStatusTime(res) {
   
    const now = moment();
    const postTime = moment(res);

    const duration = moment.duration(now.diff(postTime));
    const seconds = duration.asSeconds();
    const minutes = duration.asMinutes();
    const hours = duration.asHours();

    if (seconds < 60) {
        return 'Just now';
    } else if (minutes < 60) {
        return `${Math.floor(minutes)} min ago`;
    } else if (hours < 24) {
        return `today ${postTime.format('h:mm a')}`;
    } else {
        return `${postTime.format('MMM D, YYYY h:mm a')}`;
    }
}

export default getStatusTime;