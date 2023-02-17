
import {getDataById} from '../../blog_util'
import DetailPage from "../../components/Blog/blogDetail/DetailPage";
import Container from "../../components/Home/Home";
const BlogDetailPage = (props) => {
    return(

        <Container>
            <DetailPage vlogs={props.detailVlogs}/>
        </Container>
    )
}


export const getStaticProps =   ({params}) => {
    const detailId =params.id;
    console.log(params.id);
    const data = getDataById(detailId);
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