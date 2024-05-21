import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { DialogProps } from "./Interface";
import { useState } from "react";


export default function AddUpdatePost({ initialData, open, handleClose, onSubmit }: DialogProps) {
    const [title, setTitle] = useState(initialData?.title);
    const [body, setBody] = useState(initialData?.body);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const data = {
                            id: initialData?.id || Math.random(),
                            title: formJson.title as string,
                            body: formJson.body as string
                        }
                        onSubmit(data);
                        setTitle('');
                        setBody('');
                        handleClose();
                    },
                }}
            >
                <DialogTitle>{initialData?.id ? 'Update' : 'Add a new post'} </DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Title"
                        multiline
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Description"
                        name="body"
                        multiline
                        rows={8}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}

                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="error" onClick={handleClose}> Cancel </Button>
                    <Button variant="contained" type="submit"  > {initialData?.id ? 'Update' : 'Add'} </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}