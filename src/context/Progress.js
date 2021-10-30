import React from 'react'

export default React.createContext({
    currentId: 0,
    videoDuration: 0,
    bufferAction: false,
    pause: false,
    next: () => { }
})