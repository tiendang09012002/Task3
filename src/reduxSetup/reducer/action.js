// actions.js
import { getPosts, createPost } from "../../services/Api";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
} from "../../shared/constants/action-type";

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    try {
      const response = await getPosts();
      console.log(response);
            
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const addPost = (post) => async (dispatch) => {
  dispatch({ type: ADD_POST_REQUEST });
  try {
    const response = await createPost(post);
    dispatch({ type: ADD_POST_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: ADD_POST_FAILURE, payload: error.message });
  }
};
