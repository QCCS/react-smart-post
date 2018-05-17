### 功能定位
跨组件通信

比react-event功能强大，代码更少

比context更好理解使用简单,不到30行代码

#### 如何安装

```
npm i react-smart-post
```

#### API
```
  smartPost.push(component);
  smartPost.post(messageState,componentName);
```
#### 使用方式

第一种方式 : 直接把此函数拷贝到项目公共函数中，需要使用的时候，就使用一下 ;

另一种方式:
``` javascript
import smartPost from 'react-smart-post'
class Parent extends Component{
  render() {
    return (
      <div>
        <Child_1/>
        <Child_2/>
      </div>
    );
  }
}

class Child_1 extends Component{
  noticeForChild_2 = () => {
      // attention
      let messageState = {message:{key:"from Child_1"}}
      smartPost.post(messageState,"Child_2");
  }
  render() {
      return (
        <div className="App">
          <div onClick={this.noticeForChild_2}>click it</div>
        </div>
      );
  }
}

class Child_2 extends Component{
  state = {
    msg: 'start'
  };
  componentWillMount() {
     // attention
     smartPost.push(this);
  }
  render() {
    return <div>
      <p>child_2 component: {this.state.msg}</p>
       <p>from Child_1: {this.state.message.key}</p>
      <Child_2_1 />
    </div>
  }
}

```

