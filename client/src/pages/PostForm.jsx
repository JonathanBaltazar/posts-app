import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePostsContext } from "../context/PostsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PostForm() {
    const [post, setPost] = useState();
    let { createPost, setPosts, posts, getPost } = usePostsContext();

    let { id } = useParams();

    useEffect(() => {
        if (id) {
            getPost(id)
                .then((res) => {
                    setPost(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, []);

    let navigation = useNavigate();

    return (
        <div>
            <Formik
                initialValues={{
                    title: post ? post.title : "",
                    description: post ? post.description : "",
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required("Title is required")
                        .max(30, "Title must be 30 characteres or less"),
                    description: Yup.string().max(
                        100,
                        "Description must be 100 characteres or less"
                    ),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    createPost(values)
                        .then((res) => {
                            if (res.status === 200) {
                                setPosts([...posts, res.data]);
                                navigation("/");
                            }
                        })
                        .catch((err) => console.log(err));
                }}
                enableReinitialize={true}
            >
                <Form>
                    <Field name="title" placeholder="Title" />
                    <ErrorMessage name="title" />
                    <Field name="description" placeholder="Description" />
                    <ErrorMessage name="description" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default PostForm;
