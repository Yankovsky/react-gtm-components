export default (params = {}) => Object.keys(params).reduce((memo, k) => memo + `&${k}=${params[k]}`, '')
