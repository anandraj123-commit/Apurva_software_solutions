import { createSlice } from "@reduxjs/toolkit";
import blogsArray from "../data/blogs";
import { uiAction } from './ui-slice';
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  where
} from "firebase/firestore";
import "../assets/scss/common.scss";

// Initial state
const initialBlogState = {      // will store single blog object directly
    latestPosts: [],
    comments:[]   // array of latest posts
};

function formatBlog(blog) {
    if (!blog) return blog;
    return {
        ...blog,
        createdAt: new Date(blog.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    };
}

function formatBlogs(blogs) {
    return blogs.map(blog => formatBlog(blog));
}


const blogSlice = createSlice({
    name: "blog",
    initialState: initialBlogState,
    reducers: {
        filterBlog(state, action) {
            const blog = blogsArray.find(blog => blog.id == action.payload);
            return { ...state, ...formatBlog(blog) };
        },
        latestPosts(state) {
            state.latestPosts = blogsArray.length <= 5
                ? formatBlogs(blogsArray)
                : formatBlogs(blogsArray.slice(-5)); // last 3 blogs
        },
        getcomments(state,action){

            state.comments = action.payload;
        }
    }
});



const getcommentsData = (id) => {
  return (dispatch) => {
    // Show pending notification

    // dispatch(
    //   uiAction.showNotification({
    //     status: "pending",
    //     title: "Fetching...",
    //     message: "Fetching Comment Data",
    //   })
    // );

    try {
      const q = query(
        collection(db, "comments"),
        where("id", "==", id),
        orderBy("timestamp", "desc") // ensure this field exists in Firestore
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          console.log("Snapshot fired. Docs count:", snapshot.docs.length);

          const commentsData = snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              firestoreId: doc.id,
              ...data,
              // Convert Firestore Timestamp to number (milliseconds) for Redux
              timestamp: data.timestamp ? data.timestamp.toMillis() : null,
            };
          });

          dispatch(blogActions.getcomments(commentsData));

        //   dispatch(
        //     uiAction.showNotification({
        //       status: "success",
        //       title: "Success!",
        //       message: "Comments fetched successfully!",
        //     })
        //   );
        },
        (error) => {
          console.error("Error in fetching comments:", error);
          dispatch(
            uiAction.showNotification({
              status: "error",
              title: "Error",
              message: "Fetching comments failed!",
            })
          );
        }
      );

      // Return unsubscribe so the caller can stop listening if needed
      return unsubscribe;
    } catch (err) {
      console.error("Unexpected error:", err);
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching comments failed unexpectedly!",
        })
      );
    }
  };
};


const postingCommentData = (form, formData) => {
    return async (dispatch) => {
      dispatch(
        uiAction.showNotification({
          status: "pending",
          title: "Posting...",
          message: "Posting Comment Data",
        })
      );
  
      try {
        let imageUrl = formData.imageUrl || null;
  
        // Upload to Cloudinary only if 'form' exists (first time user with File)
        if (form) {
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dzdpokvq8/image/upload",
            {
              method: "POST",
              body: form,
            }
          );
  
          if (!response.ok) {
            const errorText = await response.text();
            console.error("Cloudinary upload error:", errorText);
            throw new Error("Image upload failed");
          }
  
          const data = await response.json();
          imageUrl = data.secure_url;
        }
  
        // Save to Firestore (always)
        await addDoc(collection(db, "comments"), {
          id: formData.id,
          name: formData.name,
          email: formData.email,
          comment: formData.comment,
          imageUrl,
          timestamp: serverTimestamp(),
        });
  
        dispatch(
          uiAction.showNotification({
            status: "success",
            title: "Success!",
            message: "Comment posted successfully",
          })
        );
      } catch (error) {
        console.error("Posting comment failed:", error);
        dispatch(
          uiAction.showNotification({
            status: "error",
            title: "Error",
            message: "Posting comment failed!",
          })
        );
      }
    };
  };
  
export { postingCommentData,getcommentsData };


export const blogActions = blogSlice.actions;
export default blogSlice;
