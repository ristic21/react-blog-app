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
}

export const postsService = new PostsService();