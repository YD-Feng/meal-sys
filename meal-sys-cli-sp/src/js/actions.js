/*
 * action 类型
 */
export const SET_TIPS = 'SET_TIPS';
export const SET_PATH = 'SET_PATH';
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_BOOKLIST = 'SET_BOOKLIST';
export const SET_SHOPLIST = 'SET_SHOPLIST';
export const SET_MENULIST = 'SET_MENULIST';
export const SET_CHECKEDLIST = 'SET_CHECKEDLIST';
export const SET_STAPLELIST = 'SET_STAPLELIST';

/*
 * action 创建函数
 */
export function setTips(text) {
    return { type: SET_TIPS, text }
}

export function setPath(path) {
    return { type: SET_PATH, path }
}

export function showLoading() {
    return { type: SHOW_LOADING }
}

export function hideLoading() {
    return { type: HIDE_LOADING }
}

export function setUserName(userName) {
    return { type: SET_USERNAME, userName }
}

export function setBookList(list) {
    return { type: SET_BOOKLIST, list }
}

export function setShopList(list) {
    return { type: SET_SHOPLIST, list }
}

export function setMenuList(list) {
    return { type: SET_MENULIST, list }
}

export function setCheckedList(list) {
    return { type: SET_CHECKEDLIST, list }
}

export function setStapleList(list) {
    return { type: SET_STAPLELIST, list }
}

