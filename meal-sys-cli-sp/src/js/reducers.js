import { combineReducers } from 'redux';
import { SET_TIPS, SET_PATH, SHOW_LOADING, HIDE_LOADING, SET_USERNAME, SET_BOOKLIST, SET_SHOPLIST, SET_MENULIST, SET_CHECKEDLIST, SET_STAPLELIST } from './actions';

function tips(state = '', action) {
    switch (action.type) {
        case SET_TIPS:
            return action.text;
        default:
            return state;
    }
}

function path(state = '', action) {
    switch (action.type) {
        case SET_PATH:
            return action.path;
        default:
            return state;
    }
}

function loading(state = false, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return true;
        case HIDE_LOADING:
            return false;
        default:
            return state;
    }
}

function userName(state = '', action) {
    switch (action.type) {
        case SET_USERNAME:
            return action.userName;
        default:
            return state;
    }
}

function bookList(state = [], action) {
    switch (action.type) {
        case SET_BOOKLIST:
            return action.list;
        default:
            return state;
    }
}

function shopList(state = [], action) {
    switch (action.type) {
        case SET_SHOPLIST:
            return action.list;
        default:
            return state;
    }
}

function menuList(state = [], action) {
    switch (action.type) {
        case SET_MENULIST:
            return action.list;
        default:
            return state;
    }
}

function checkedList(state = [], action) {
    switch (action.type) {
        case SET_CHECKEDLIST:
            return action.list;
        default:
            return state;
    }
}

function stapleList(state = [], action) {
    switch (action.type) {
        case SET_STAPLELIST:
            return action.list;
        default:
            return state;
    }
}

const reducers = combineReducers({
    tips,
    path,
    loading,
    userName,
    bookList,
    shopList,
    menuList,
    checkedList,
    stapleList
});

export default reducers;
