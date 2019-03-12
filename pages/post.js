import Layout from '../components/MyLayout';
import {withRouter} from 'next/router';
import Markdown from 'react-markdown';
// import fetch from 'isomorphic-unfetch';


// const Post = (props) => (
//     <Layout>
//         <h1>{props.show.name}</h1>
//         <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//         <img src={props.show.image.medium}></img>
//     </Layout>
// );

// Post.getInitialProps = async function(context) {
//     const { id } = context.query;
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();

//     console.log(`Fetched show: ${show.name}`);
//     return {show};
// };

// const Content = withRouter((props) => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <p>Content Goes Here.</p>
//     </div>
// ));

// const Page = (props) => (
//     <Layout>
//         <Content />
//     </Layout>
// );

// export default Post;

export default withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <div className="markdown">
            <Markdown source={`
            This is some body of example markdown

            ### This is a title

            and here's some more content.
            `} />
        </div>
        <style jsx global>{`
            .markdown {
                font-family: 'Arial';
            }

            .mdarkdown a {
                text-decoration: none;
                color: blue;
            }

            .markdown a:hover {
                opacity: 0.6;
            }

            .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
            }
        `}</style>
    </Layout>
))