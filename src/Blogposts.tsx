import {  Grid, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { BlogPost, BlogPostProps } from "./Interface";
import { Post } from "./Post";
import { EditOutlined } from "@mui/icons-material";


export function BlogPosts(props: BlogPostProps) {

    return <>
        <Grid container rowSpacing={3} >
            {props.posts.map((post: BlogPost) =>
                <Grid item xs={6} key={post.id}>
                    <Post title={post.title} body={post.body} id={post.id} ></Post>
                    <IconButton onClick={() => props.deletePost(post.id)} color="error">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => props.updatePost(post)} >
                        <EditOutlined />
                    </IconButton>
                </Grid>
            )}
        </Grid>
    </>
}