import Api from './API'

export default {
  popularPosts(per_page, paged) {
    return Api().get(`/ylc/v1/popularposts?per_page=${per_page}&page=${paged}`)
  },
  recentPosts(params) {
    return Api().get(`/ylc/v1/posts?${params}`)
  }
}
