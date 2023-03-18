import httpService from "./httpService";


class PostsService {

  constructor() {
    this.axios = httpService.axiosInstance;
  }

  getAll = async () => {
    try {
      return this.posts = await this.axios.get("/posts");
    } catch (error) {
      throw new Error(error);
    }

  };


  async get(postId) {
    try {
      const { data } = await this.axios.get(`/posts/${postId}?filter={"include":["comments"]}`);
      return data;
    } catch (error) {
      console.log(error);
    }

  }

  async add(newPost) {
    try {
      const { data } = await this.axios.post('posts', newPost);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async edit(id, newPost) {
    try {
      const { data } = await this.axios.put(`posts/${id}`, newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(postId) {
    try {
      const { data } = await this.axios.delete(`posts/${postId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async addComment(newComment, postId) {
    try {
      const { data } = await this.axios.post(`/posts/${postId}/comments`, newComment);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  getComments = async (id) => {
    try {
      return this.comments = await this.axios.get(`/posts/${id}/comments`);
    } catch (error) {
      throw new Error(error);
    }

  };

}

export const postsService = new PostsService();