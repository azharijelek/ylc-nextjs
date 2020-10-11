import Api from './API'

export default {
	login(params) {
		return Api().post('/jwt-auth/v1/token', params);
	},
}