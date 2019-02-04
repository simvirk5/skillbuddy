import axios from 'axios';

const useAxios = url => {
  const fixedUrl = (data, method, config) => axios({ url, data, method, config });
  return {
    deleteWithAxios: (data, config) => fixedUrl(data, 'delete'),
    putWithAxios: (data, config) => fixedUrl(data, 'put'),
    getWithAxios: config => fixedUrl(null, 'get', config),
    postWithAxios: (data, config) => fixedUrl(data, 'post', config),
  }
}

export default useAxios;
