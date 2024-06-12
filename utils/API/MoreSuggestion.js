// userUtils.js

export const loadMoreUsers = (startIndex, usersdata, setStartIndex, setVisibleUsers, setIsLoading) => {
    setIsLoading(true);
    setTimeout(() => {
        const newStartIndex = startIndex + 3;
        if (newStartIndex >= usersdata.length) {
            setStartIndex(0);
            const newVisibleUsers = usersdata.slice(0, 3);
            setVisibleUsers(newVisibleUsers);
        } else {
            setStartIndex(newStartIndex);
            const newVisibleUsers = usersdata.slice(newStartIndex, newStartIndex + 3);
            setVisibleUsers(newVisibleUsers);
        }
        setIsLoading(false);
    }, 1000);
};

export const fetchAllUsersdata = (users, setUsers, setVisibleUsers) => {
    // Your API call to fetch all users
    const allUsers = []; // Replace this with the actual data from the API
    setUsers(users);
    const initialVisibleUsers = users.slice(0, 3);
    setVisibleUsers(initialVisibleUsers);
};
