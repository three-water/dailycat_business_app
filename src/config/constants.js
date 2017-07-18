import * as functions from './functions'

const HOST_SITE = 'http://threewater.s1.natapp.cc/'
process.env.NODE_ENV === 'production' ? 'https://api.yirimao.com/' : 'http://threewater.s1.natapp.cc/'
// 定义状态码
const SUCCESS = 2000

// 定义每一页数据
const PAGE_ROWS = 20

const OFFICE_WEB_ID = 11181

const OFFICE_WEB_URL = 'http://ow365.cn/?i=' + OFFICE_WEB_ID + '&furl='

// 用户信息
const TOKEN_KEY = 'com.nutrition.backend.dsfsdfldsfdskfdsfldsfk'
const USER_INFO_KEY = 'com.nutrition.backend.sdfwekldsfkwfkdsfjlwefkds'
// const TOKEN = '18-WQMJgq2NVoxle912'
// const TOKEN = '1oNg-cGzbd5B6Xhng12'
const TOKEN = functions.lgetItem(TOKEN_KEY)
const USER_INFO = functions.lgetItem(USER_INFO_KEY)

// 富文本上传路径
const EDITOR_UPLOAD_PATH = HOST_SITE + '/file/h5-upload'

// 文件上传路径
const FILE_UPLOAD_PATH = HOST_SITE + '/file/upload'
const FILE_UPLOAD_PATH_EX = HOST_SITE + '/file/upload-file'
const UPLOAD_HEADER = { token: TOKEN }

const USERNAME_KEY = 'com.jingbao.frontend.dsfsdffdsklffdsnf2334sd'
const PASSWORD_KEY = 'com.jingbao.frontend.32dsk23dfjksdnfsdf23dfsf'

export {
  HOST_SITE, SUCCESS, PAGE_ROWS, EDITOR_UPLOAD_PATH, FILE_UPLOAD_PATH, TOKEN_KEY, TOKEN, USER_INFO_KEY, USER_INFO, UPLOAD_HEADER, FILE_UPLOAD_PATH_EX, OFFICE_WEB_ID, OFFICE_WEB_URL, USERNAME_KEY, PASSWORD_KEY
}
