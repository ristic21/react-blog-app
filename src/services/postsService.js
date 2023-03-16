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


  async get(id) {
    try {
      const { data } = await this.axios.get(`posts/${id}`);
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

}

export const postsService = new PostsService();