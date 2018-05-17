#### how to install

```
npm i react-smart-post
```

#### function api
```
  smartPost.push(component);
  smartPost.post(messageState,componentName);
```
#### how to use

the first way : copy code to your project ;

other way:
``` javascript
import smartPost from 'smartPost'
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

