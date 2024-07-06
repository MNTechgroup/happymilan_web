import moment from "moment";

const getMessageTime = (sendAt) => {
    const timeDifference = Date.now() - sendAt;
    if (timeDifference < 3600000) {
        return moment(sendAt).fromNow(); // Format time as "X minutes ago"
    } else {
        return moment(sendAt).format('LT'); // Format time as "HH:mm"
    }
};

export default getMessageTime;