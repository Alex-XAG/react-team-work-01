import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://64674adeba7110b663b466b2.mockapi.io/";

export const commentApi = createApi({  
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),  
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getAllComments: builder.query({      
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),    
    addComment: builder.mutation({
      query: (comment) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
    deleteComment: builder.mutation({
      query: (commentId) => ({
        url: `${API_ENDPOINT}/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comments"],
    }),
    updateComment: builder.mutation({
      query: ({ commentId, updatedComment }) => ({
        url: `${API_ENDPOINT}/${commentId}`,
        method: "PUT",
        body: updatedComment,
      }),
      invalidatesTags: ["Comments"],      
    }),    
  }),
});

export const {  
  useGetAllCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,  
} = commentApi;

// export const {
//   selectAll: selectAllComments,
//   selectById: selectCommentById,
//   selectIds: selectCommentIds,
// } = commentAdapter.getSelectors((state) => state.comments);

