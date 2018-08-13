var groceryList = ['chicken skewers', 'macadamian nuts', 'jerky'];

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList todos={groceryList}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <GroceryListItem  todo={todo} />
    )}
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      done: false
    };
  }
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? '700' : '400'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)}>{this.props.todo}</li>
    );
  }
}




// var GroceryList = () => (
//   <ul> 
//     <ChickenSkewers />
//     <MacadamianNuts />
//   </ul>
// );

// var ChickenSkewers = () => (
//   <li> Chicken Skewers  </li>
// );
// var MacadamianNuts = () => (
//   <li>Macadamian Nuts </li>
// );





ReactDOM.render(<App />, document.getElementById('app'));

