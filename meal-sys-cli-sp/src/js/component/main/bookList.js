'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { setPath, showLoading } from '../../actions';

class BookList extends React.Component {
    componentWillMount() {
        this.props.dispatch(setPath(this.props.location.pathname));
        this.props.dispatch(showLoading());

        ws.send(JSON.stringify({
            method: 'getBookList'
        }));
    }

    handleClick(id) {
        this.props.history.pushState(null, '/staple', {
            id: id
        });
    }

    render() {
        let _this = this,
            html = null;

        if (_this.props.bookList && _this.props.bookList.length == 0) {
            html =
            <div className="cm-no-data">
                <i className="face"></i>
                <p className="text">还没有发起任何点餐</p>
            </div>;
        } else {
            html =
            <ul className="shop-list">
                {
                    _this.props.bookList && _this.props.bookList.map(function (item, i) {
                        return <li className="item">
                            <div className="img-wrap">
                                <img src={item.bigImgUrl}/>
                            </div>
                            <div className="cont-wrap">
                                <p className="title">{item.name}</p>
                                <p className="des">点餐发起人：<em className="cm-text-red">{item.launcher}</em></p>
                                <button className="btn" onClick={(e) => _this.handleClick(item.id)}>我 要<br/>点 餐</button>
                            </div>
                        </li>;
                    })
                }
            </ul>;
        }

        return (
            <div>
                <h2 className="mod-title green">我要点餐</h2>
                {html}
            </div>
        );
    }
};

BookList = connect((state) => {
    return {
        bookList: state.bookList
    }
})(BookList);

module.exports = BookList;
