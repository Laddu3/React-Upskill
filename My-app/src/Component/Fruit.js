import { Component } from "react";

class Fruit extends Component{
    render(){
        const fruits = ['Apple', 'Banana', 'Orange','Watermelon'];
return (
<div>
    <h2>List of fruits</h2>
    <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
</div>
)
    }

}
export default Fruit;