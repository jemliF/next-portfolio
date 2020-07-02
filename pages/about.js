import Link from 'next/link';
import {Component} from "react";
import Error from "./_error";

import Layout from "../components/Layout";

export default class About extends Component {

    static async getInitialProps(ctx) {
        const res = await fetch('https://api.github.com/users/jemliF');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();
        return {user: data, statusCode};
    }

    render() {
        const {user, statusCode} = this.props;
        if(statusCode) {
            return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="About">
                {user.name}
                <p>{user.bio}</p>
                <img src={user.avatar_url} alt="JS" height="200px"/>
            </Layout>
        );
    }
}