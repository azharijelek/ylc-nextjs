import Api from './API'

export default {
  popularPosts(per_page, paged) {
    return Api().get(`/ylc/v1/popularposts?per_page=${per_page}&page=${paged}`)
  },
  recentPosts(params) {
    return Api().get(`/ylc/v1/posts?${params}`)
  },
  postDetail(path) {
    return Api().get(`/ylc/v1/post?slug=${path}`)
  },
  getForums() {
    return Api().get(`/ylc/v1/forums/`)
  },
  getTopics(slug) {
    return Api().get(`/ylc/v1/forums/topics?slug=${slug}`)
  },
  getTrendingThreads() {
    return Api().get(
      `/ylc/v1/forums/threads?perpage=3&order=DESC&orderby=meta_value_num&meta_key=_bbp_reply_count`
    )
  }
}
