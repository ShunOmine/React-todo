import React, { Component } from 'react';

import Form from "./Form"
import List from "./List"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  //データ保存
  handleAdd(e){
      e.preventDefault();  //これを書かないとリダイレクトされてしまう
      this.state.todo.push({title: e.target.title.value}); //まだ保存されてない
      // setStateを使ってstateを上書き
      this.setState({todo: this.state.todo}); // 保存完了
      // input のvalueを空に
      e.target.title.value = "";
  };
  //データ削除
  handleRemove(i){
      // todo配列からi番目から１つ目のデータを除外
      this.state.todo.splice(i, 1);
      // setStateでtodo配列を上書き
      this.setState({todo: this.state.todo});
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

