import Layout from "../components/Layout";
import {withRouter} from "next/router";

const Post = ({router}) => (
    <Layout title={router.query.title}>
        <p style={{width: '80vw'}}>Cum clinias credere, omnes specieses consumere placidus, secundus nutrixes.
        When one realizes silence and sorrow, one is able to reject sex.
        Coffee soup is just not the same without chocolate and al dente salted ramens.</p>
    </Layout>
);

export default withRouter(Post);