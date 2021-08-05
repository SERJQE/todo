import React from 'react';
import "./styles/App.css"

class App extends React.Component {
    render() {
        return (
            <div className={"container"}>

                <span1>4 Tasks<span>4 Remain</span></span1>
                <p><input type="checkbox" name="a" value="Something here"/> Something here<a class="DB" href="#">Delete</a></p>
                <p><input type="checkbox" name="a" value="CSS"/> CSS<a className="DB" href="#">Delete</a></p>
                <p><input type="checkbox" name="a" value="HTML"/> HTML<a className="DB" href="#">Delete</a></p>
                <p><input type="checkbox" name="a" value="Vue"/> Vue<a className="DB" href="#">Delete</a></p>
                <input id="name" placeholder="Add todo"/><a className="DB" href="#">ADD</a>



            </div>
        )
    }
}

export default App;