import Vue from 'vue'
import * as config from './constants'
import api from '../api'
// import axios from 'axios'

// 定义POST请求方法response.json()
// function post (action, params = {}) {
//   params.token = config.TOKEN || ''
//   // axios.defaults.headers['token'] = config.TOKEN || ''
//   return axios.post(action, params).then((response) => {
//     return response.data
//   }, (error) => {
//     console.log(error)
//     return error
//   })
// }
// 定义POST请求方法
function post (action, params = {}) {
  params.token = config.TOKEN || ''
  // Vue.http.headers.post['token'] = config.TOKEN || ''
  if (api[action] === undefined) {
    console.error(`非法的url: ${action},请在api中配置后使用`)
  }
  let url = api[action].url
  return new Promise((resolve, reject) => {
    Vue.http.post(url, params).then((response) => {
      let resp = response.body
      if (resp.status === config.SUCCESS) {
        resolve(resp)
        // return response.json()
      } else {
        let msg = resp.message
        let msgArr = []
        try {
          let m = JSON.parse(msg)
          for (let k in m) {
            msgArr.push(m[k])
          }
        } catch (e) {
          msgArr = [msg]
        }
        Vue.prototype.$message(msgArr.join(' '))
        reject(resp)
      }
    }, (error) => {
      console.log(error)
      Vue.prototype.$message('请求失败，请稍后重试')
      reject(error)
    })
  })
}

function formatDate (date) {
  if (!date) { return '' }
  let dateStr = date.toLocaleDateString()
  let reg = new RegExp('/', 'g')
  return dateStr.replace(reg, '-')
}

function formatFileSize (fileSize) {
  let fs = ''
  if (fileSize < 1024) {
    fs = fileSize + 'Byte'
  } else if (fileSize < 1024 * 1024 && fileSize >= 1024) {
    fs = Math.ceil(fileSize / 1024) + 'KB'
  } else {
    fs = Math.ceil(fileSize / (1024 * 1024)) + 'M'
  }
  return fs
}

function ssetItem (obj, aKey = null) {
  let key = new Date().getTime()
  if (aKey) { key = aKey }
  window.sessionStorage.setItem(key, JSON.stringify(obj))
  return key
}

function sgetItem (key) {
  let result = window.sessionStorage.getItem(key)
  if (result !== undefined) {
    return JSON.parse(result)
  }
  return
}

function lsetItem (obj, aKey = null) {
  let key = new Date().getTime()
  if (aKey) { key = aKey }
  window.localStorage.setItem(key, JSON.stringify(obj))
  return key
}

function lgetItem (key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function srmItem (key) {
  return window.sessionStorage.removeItem(key)
}

function lrmItem (key) {
  return window.localStorage.removeItem(key)
}

function redirect (path) {
  window.location.href = path
}

function redirectHome () {
  window.location.href = '/'
}

function fileType (extension) {
  if (!extension) {
    return 'other'
  }
  let type = 'other'
  switch (extension.toString().toLowerCase()) {
    case 'pdf':
      type = 'pdf'
      break
    case 'doc':
    case 'docx':
      type = 'doc'
      break
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
      type = 'img'
      break
    case 'mp3':
    case 'wav':
      type = 'audio'
      break
    case 'ppt':
    case 'pptx':
      type = 'ppt'
      break
    case 'mp4':
    case 'rmvb':
    case 'rm':
    case 'avi':
    case 'mpeg4':
    case 'wmv':
    case 'mov':
      type = 'video'
      break
    case 'xls':
    case 'xlsx':
      type = 'xls'
      break
    default:
      break
  }
  return type
}

export {
  post, formatDate, formatFileSize, ssetItem, sgetItem, lsetItem, lgetItem, srmItem, lrmItem, redirectHome, fileType, redirect
}
