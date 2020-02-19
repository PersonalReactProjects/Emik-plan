import React, { Component } from 'react'

export default class FallbackSuspense extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ff4242', height: '100vh', paddingTop: 150 }}>
                <div id="preloader"></div>
            </div>
        )
    }
}
