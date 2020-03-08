import React ,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css'

class TodoList  extends Component {
  constructor(props){
      super(props)
      this.state = {
          inputValue : '',
          list: ['吃饭'],

      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      this.handleItemDelete = this.handleItemDelete.bind(this);
    }
  render(){
    
    return (
        <Fragment>
            <div>
                <label htmlFor="insertArea">输入内容</label>
                <input type="text" 
                id="insertArea"
                value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>  
            </div> 
            <ul>
               {
                  this.getToDoItem()
               }
            </ul>
        </Fragment>
    )
  }
  //获取单项
  getToDoItem(){
      return this.state.list.map((item,index)=>{
          return (
              <TodoItem key={index} index={index} item={item}
                handleItemDelete={this.handleItemDelete}
              />
          )
      })
  }
  //输入
  handleInputChange(e){
      console.log(e.target.value)
      this.setState({
          inputValue : e.target.value
      })
  } 
   //点击提交
   handleBtnClick(){
        this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue: ''
        })
   }
    //删除项目
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
    
        this.setState(()=>({
            list: list
        }))
    }
}

export default TodoList;
