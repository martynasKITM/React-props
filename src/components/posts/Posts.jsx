import Post from "../post/Post";
import PostsData from "../../data/PostsData";
const Posts = ()=>{
    return(
        <section className="pt-4">
            <div className="container px-lg-5">
                {/*-- Page Features-- */}
                <div className="row gx-lg-5">
                    {PostsData.map((post)=>
                        <Post
                            key={post.id}
                            title ={post.title}
                            content={post.content}
                    />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Posts