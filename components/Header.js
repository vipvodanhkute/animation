import React, { Component } from 'react';
import Head from 'next/head'
class Header extends Component {
    render() {
        return (
            <Head>
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
                <script src="static/js/jquery.js"></script>
            </Head>
        );
    }
}
export default Header;