import React, {Component} from "react";

class Game extends Component{
    constructor(props){
        super(props);
        this.state ={
            randomNumber: 0,
            userNumber: ""
        };
        this.resetGame = this.resetGame.bind(this);
        this.makeGuess = this.makeGuess.bind(this);
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
    makeGuess(event){
        event.preventDefault();
        console.log("User Guess", this.state.userNumber)
    }
    resetGame(){
        this.generateRandomNumber();
    }
    render(){
        console.log(this.state);
        const btnStyle = {
            margin: "10px 5px"
        };
        const{randomNumber, userNumber} = this.state;
        return(
            <div>
                <p>Random Number: {randomNumber}</p>
                <div className="row">
                    <form onSubmit={this.makeGuess}className="col s6 offset-s3">
                        <div className="row">
                            <div className="input-field">
                                <input onChange={(event) => {this.setState({userNumber: event.target.value})}} value={userNumber} type="number" placeholder="Enter a number" className="center-align"/>
                            </div>
                        </div>
                        <div className="row center-align">
                            <button style={btnStyle} className="btn green darken-2">Guess</button>
                            <button style={btnStyle} type="button" onClick={this.resetGame} className="btn red darken-2">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Game;