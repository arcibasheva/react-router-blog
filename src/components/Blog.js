import React from "react";

export default function Blog({posts}) {
    // console.log(posts)
    return (
        <div>
            {posts.map(post =>
                <pre key={post.url}>
               {JSON.stringify(post, null, 2)}
             </pre>
            )}
        </div>
    );
}