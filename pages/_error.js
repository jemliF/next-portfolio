import Layout from '../components/Layout';

export default ({statusCode}) => {
    return (
        <Layout title="Error!">
            {statusCode ? `Couldn't load your data, status code: ${statusCode}` : `Couldn't get this page !`}
        </Layout>
    )
};