import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import FixedTabs from './../../Components/FixedTabs/FixedTabs';
import Peer from 'peerjs';
import { Link } from 'react-router-dom';

const PORT = process.env.PORT || 9000;

export default class HomePage extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
        this.peer = new Peer('eugiuesgyfiueghiuesdhgoiursgrtgRTDS',{
            host: 'localhost',
            port:PORT,
            path: '/peerjs/myapp'
          }); 
        const peer = this.peer;
        var conn = this.peer.connect('sdyfugaiufgybiuegfsdg');
        console.log(conn, this.peer.id)
        
        // on open will be launch when you successfully connect to PeerServer
        conn.on('open', function(){
            console.log("SFFFSS")
        // here you have conn.id
        conn.send('hi!');
         window.navigator.getUserMedia({video: true, audio: true}, function(stream) {
        var call = peer.call('sdyfugaiufgybiuegfsdg', stream);
        call.on('stream', function(remoteStream) {
            console.log(stream)
            // Show stream in some video/canvas element.
        });
        }, function(err) {
        console.log('Failed to get local stream' ,err);
        });
        });

        
    }
    render(){
        return <div>
            <Navbar></Navbar>
            <FixedTabs />
            Home Page
        </div>
    }
}