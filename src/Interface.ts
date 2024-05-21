export interface BlogPost {
    id: number;
    title: string;
    body: string;
}

export interface DialogProps {
    initialData?: BlogPost;
    open: boolean;
    handleClose: () => void;
    onSubmit: (data: BlogPost) => void
}

export interface BlogPostProps { 
    posts: BlogPost[]; 
    deletePost: (id: number) => void; 
    updatePost: (post: BlogPost) => void; 
}