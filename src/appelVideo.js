import React, { useRef, useState } from 'react';
import Peer from 'peerjs';

const VideoCallComponent = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const peer = useRef(null);

//   const startCall = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//     setLocalStream(stream);

//     peer.current = new Peer();
//     peer.current.on('open', (id) => {
//       console.log('My peer ID is: ' + id);
//     });

//     peer.current.on('call', (call) => {
//       call.answer(stream); 
//       call.on('stream', (remoteStream) => {
//         setRemoteStream(remoteStream);
//       });
//     });
//   };

//   const callPeer = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//     setLocalStream(stream);

//     const call = peer.current.call('remotePeerId', stream); // Replace 'remotePeerId' with actual peer ID
//     call.on('stream', (remoteStream) => {
//       setRemoteStream(remoteStream);
//     });
//   };

  return (
    <div>
      {/* <button onClick={startCall}>Start Call</button>
      <button onClick={callPeer}>Call Peer</button>
      <div>
        {localStream && <video srcObject={localStream} autoPlay muted />}
      </div>
      <div>
        {remoteStream && <video srcObject={remoteStream} autoPlay />}
      </div> */}
    </div>
  );
};

export default VideoCallComponent;
