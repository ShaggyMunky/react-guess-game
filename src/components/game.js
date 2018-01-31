import React, {Component} from "react";

class Game extends Component{
    constructor(props){
        super(props);
        this.state ={
         randomNumber: 0
        };
        this.resetGame = this.resetGame.bind(this)
    }

    componentDidMount(){
        this.generateRandomNumber();
    }
    generateRandomNumber(){
        const randNum = (Math.random() * 10 >> 0) + 1;

        this.setState({
            randomNumber: randNum
        });
    }
    resetGame(){
        this.generateRandomNumber();
    }
    render(){
        console.log("State: ", this.state);
        return(
            <div>
                <p>Random Number: {this.state.randomNumber}</p>
                <button onClick={this.resetGame} className="btn red darken-2">Reset</button>
            </div>
        )
    }
}

export default Game;