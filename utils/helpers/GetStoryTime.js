const moment = require('moment');

function getStatusTime(res) {
    // Parse the input date
    const postTime = moment(res, moment.ISO_8601, true); // Using strict parsing with ISO 8601 format

    // Check if the date is valid
    if (!postTime.isValid()) {
        return 'Invalid date';
    }

    const now = moment();
    const duration = moment.duration(now.diff(postTime));
    const seconds = duration.asSeconds();
    const minutes = duration.asMinutes();
    const hours = duration.asHours();

    if (seconds < 60) {
        return 'Just now';
    } else if (minutes < 60) {
        return `${Math.floor(minutes)} min ago`;
    } else if (hours < 24 && now.isSame(postTime, 'day')) {
        return `Today ${postTime.format('h:mm a')}`;
    } else if (now.subtract(1, 'day').isSame(postTime, 'day')) {
        return `Yesterday ${postTime.format('h:mm a')}`;
    } else {
        return postTime.format('MMM D, YYYY h:mm a');
    }
}

export default getStatusTime;
