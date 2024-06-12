import React from 'react'
import { useSocket } from '../../ContextProvider/SocketContext'

function index() {

    const socket = useSocket();

    socket?.on('message', (data) => {
        console.log("🚀 ~ socket?.on ~ data:", data)
        
    })
  return (
    <div>index</div>
  )
}

export default index