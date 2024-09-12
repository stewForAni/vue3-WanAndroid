//https://ypeditor-test.fozmoly.com/api/artwork-item/preview?count=999&page=1&collId=38925
import axios from './index.js'

export function getArtData() {
  return axios.get('/api/artwork-item/preview', { count: 999, page: 1, collId: 38925 })
}
