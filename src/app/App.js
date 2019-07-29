import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            description: ''
        };
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){
        console.log(this.state);
        e.preventDefault();
    }
    handleChange(e){

    }

    render(){
        return(
            <div>
                {/* navigation*/}
                <nav className="light-blue darken-4">
                    <div className="container">
                    <a className="brand-logo">MERN TASK</a>

                    </div>
                </nav>

                <div className ="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className = "row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Título"></input>
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder = "Descripción" className="materialize-textarea"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Enviar
                                        </button>
                                    </form> 
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;