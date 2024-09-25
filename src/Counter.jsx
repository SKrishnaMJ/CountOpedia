import React from "react";
import attack from "./images/attack.png"
import defend from "./images/defend.png"

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.defendAttack = this.defendAttack.bind(this);
        this.handleRandomPlay = this.handleRandomPlay.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0,
            gameStatus:"",
            lastPlay:"",
        }
    }

    handleAttack(){
        // alert("Attacked")
        this.setState((previousState) =>{
            let newCount = previousState.count + Math.round(Math.random()*20)
            return{
                count: newCount,
                lastPlay: "Attack",
                gameStatus: newCount>20? "Victory!":previousState.gameStatus,
            };

        });
    }
    defendAttack(){
        // alert("Defended")

        this.setState((previousState) => {
            let newCount = previousState.count - Math.round(Math.random()*20)
            return {
                count: newCount,
                lastPlay: "Defend",
                gameStatus: newCount<-20? "Defeat!":previousState.gameStatus,
            }
        }

        )
    }

    handleRandomPlay(){
        let playMode = Math.round(Math.random())
        if (playMode==0) {
            this.handleAttack();
        } else {
            this.defendAttack();
        }
        }
    

    handleReset(){
        this.setState(() => {
            return {
                count: 0,
                lastPlay: "",
                gameStatus: "",
            }
        })
    }


    render(){
     
        return(
            <div className="row text-white text-center">
                <h1>Game Score: {this.state.count}</h1>
                <p>You win at +20 points and lose at -20 points!</p>
                <p>Last Play: {this.state.lastPlay}</p>
                <h3>Game Status: {this.state.gameStatus}</h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img style={{width:"100%", cursor:"pointer", border:"1px solid green"}} className="p-4 rounded" src={attack} onClick={this.handleAttack}></img>
                </div>
                <div className="col-6 col-md-3">
                    <img style={{width:"100%", cursor:"pointer", border:"1px solid red"}} className="p-4 rounded" src={defend} onClick={this.defendAttack}></img>
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button>
                    <br/>
                    <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}