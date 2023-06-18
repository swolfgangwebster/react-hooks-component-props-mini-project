import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const art = posts.map((a) => {
        return <Article key={a.id} title={a.title} date={a.date} preview={a.preview} />
    })
    return (
        <main>{art}</main>
    );
}

export default ArticleList;