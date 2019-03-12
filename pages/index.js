/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const getPosts = () => {
  return [
    { id: "page-1", title: "Page 1" },
    { id: "page-2", title: "Page 2" },
    { id: "page-3", title: "Page 3" }
  ];
};

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

// const Index = (props) => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {props.shows.map(({ show }) => (
//                 <li key={show.id}>
//                     <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// );

// Index.getInitialProps = async function () {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//     console.log(`Show data fetched.  Count: ${data.length}`);
//     return {
//         shows: data
//     };
// };

export default () => (
  <Layout>
    <h1>Pet Tracker</h1>
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx>
      {" "}
      {`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </Layout>
);
