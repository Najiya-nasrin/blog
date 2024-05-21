import { useState } from 'react'
import Button from '@mui/material/Button';
import { BlogPosts } from './Blogposts'

import Box from '@mui/material/Box';
import { AppBar, Container, CssBaseline, Toolbar } from '@mui/material';
import { BlogPost } from './Interface.ts';
import AddUpdatePost from './Addupdatepost.tsx';
import { allPosts } from './JSONMock.ts';


const defaultPost = {
  id: 0,
  title: '',
  body: ''
} as BlogPost;

export default function App() {
  const [posts, setPosts] = useState<BlogPost[]>(allPosts);

  const [open, setOpen] = useState(false);

  const [initialData, setInitialData] = useState<BlogPost | null>();

  const handleOpen = () => {
    setInitialData(defaultPost);
    setOpen(true);
  };

  const handleClose = () => {
    setInitialData(null);
    setOpen(false);
  };


  const deletePost = (id: number): void => {

    setPosts(currentPosts => {
      return currentPosts.filter(post => post.id !== id)
    })
  }

  const updatePost = (data: BlogPost): void => {
    setInitialData({ ...data });
    setOpen(true);
  }


  const onSubmit = (data: BlogPost) => {
    const isUpdate = posts.find(x => data.id === x.id);

    if (isUpdate) {
      setPosts(posts.map(post => {
        if (post.id === data.id) {
          return { ...post, ...data }
        }
        return post;
      }));
    } else {
      setPosts([{ ...data }, ...posts]);
    }
  };

  return (
    <>
      <Box component="section" sx={{ p: 2 }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <h2>BLOG</h2>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Button variant="contained" onClick={handleOpen} color="inherit" > create </Button>
          {initialData && <AddUpdatePost initialData={initialData} open={open} handleClose={handleClose} onSubmit={onSubmit} />}
          <BlogPosts posts={posts} deletePost={deletePost} updatePost={updatePost} />
        </Container>
      </Box>
    </>
  )
}



