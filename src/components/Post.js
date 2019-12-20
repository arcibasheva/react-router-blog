import React from "react";
import NotFound from "./NotFound";

export default function Post({post}) {
    // console.log(post)
    return (
        <div>
            {post ? <pre>
               {JSON.stringify(post, null, 2)}
             </pre> : <NotFound />}
        </div>
    );
}