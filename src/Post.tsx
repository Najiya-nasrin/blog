import { Typography } from "@mui/material";
import { BlogPost } from "./Interface";

export const Post = ({ title, body }: BlogPost) => {
    return <>
        <h2>{title}</h2>
        <Typography variant="body2">
            {body}
        </Typography>
    </>
}