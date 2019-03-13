import React, { Component } from 'react';

import Layout from '../views/layouts/mainLayout';
import Link from 'next/link';

function getPosts() {
    return [
        { id: 'page-1', title: 'Page 1' },
        { id: 'page-2', title: 'Page 2' },
        { id: 'page-3', title: 'Page 3' },
    ]
}

class App extends Component {
    render() {
        return (
            <Layout>
                <h1>Pet Tracker</h1>
                <ul>
                    {getPosts().map((post) => (
                        <li key={post.id}>
                            <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <style jsx>{`
              h1, a {
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
            `}</style>
            </Layout>
        );
    }
}

// export default App;