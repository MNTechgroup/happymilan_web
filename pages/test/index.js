// Create the chat content object
const chatContent = {
    from: CurrentUser,
    to: userData.id,
    ...(message && { message }), // Conditionally add the message key only if message exists
    fileName: imagesdata.key,
    type: "image" // Type of content being sent
};

// Emit the uploadContent event with the chatContent object
socket.emit("uploadContent", chatContent);

// Listen for the message event from the socket
socket.on('message', (data) => {
    const CurrentUser = getCookie("userid");
    if (data.data.message !== "messages received") { // Check if the message is not "messages received"
        // Fetch the image data as a blob
        fetch(imagesdata.data)
            .then(response => response.blob())
            .then(blob => {
                const axios = require('axios');
                let config = {
                    method: 'put',
                    maxBodyLength: Infinity,
                    url: data.data?.result.url,
                    headers: {
                        'Content-Type': 'image/jpeg', // Content type for the image
                        'x-amz-acl': 'public-read', // Set the ACL for the uploaded image
                    },
                    data: blob // Blob data for the PUT request
                };

                // Make the PUT request to upload the image
                axios.request(config)
                    .then((response) => {
                        // Create the chat content object for the sendMessage event
                        const chatContent2 = {
                            from: CurrentUser,
                            to: userData.id,
                            ...(message && { message }),
                            fileName: imagesdata.key,
                            type: "image" // Type of content being sent
                        };

                        // Emit the sendMessage event with the chatContent2 object
                        socket.emit("sendMessage", chatContent2);

                        // Update the form data and reset the message
                        updateFormData({
                            ...formData,
                            uploadChatImage: {
                                imagesdata: "",
                                bufferdata: "",
                                CaptionText: ""
                            }
                        });

                        setMessage('');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.error('Error fetching blob:', error);
            });
    }
});
