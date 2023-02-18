
import {getDataById} from '../../blog_util'
import DetailPage from "../../components/Blog/blogDetail/DetailPage";
import Container from "../../components/Home/Home";
import Head from 'next/head';
const BlogDetailPage = (props) => {
    return(

        <Container>
                  <Head>
            <title>{props.detailVlogs[0].title}</title>
        <meta name="description" content={props.detailVlogs[0].desc}></meta>
    </Head>
            <DetailPage vlogs={props.detailVlogs}/>
        </Container>
    )
}


export const getStaticProps =   ({params}) => {
    const detailId =params.id;
    // console.log(params.id);
    const data = getDataById(detailId);
    // console.log(data)
    return{
        props:{
            detailVlogs:data
        },
    }
}

export const getStaticPaths = () => {
    return{
        paths :[],
        fallback:'blocking',
    }
}


export default BlogDetailPage;