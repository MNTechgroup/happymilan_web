// hooks/useUserActivity.js
import { useEffect } from 'react';
import { useSocket } from '../../ContextProvider/UserActivityContext';
// import { useSocket } from '../contexts/SocketContext';

const useUserActivity = () => {
  const { socket, isUserActive } = useSocket();

  useEffect(() => {
    if (socket) {
      if (isUserActive) {
        socket.emit('userActive');
        console.log("==> from fun active")
      } else {
        socket.emit('userInActive');
        console.log("==> from fun Inactive")

      }
    }
  }, [socket, isUserActive]);
};

export default useUserActivity;
