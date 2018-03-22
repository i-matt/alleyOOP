import React from 'react';
import axios from 'axios';

class Sports extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opponent: "",
            score:""
        };
    }

    componentDidMount = () => {
        this.handleWebscrape();
    }

    handleWebscrape = () => {
        axios.get("api/espn")
            .then(resp =>{
                let opponent = resp.data.Item.Opponent;
                let score = resp.data.Item.Score;
                score[0] = "TBD";

                // let newOpp = opponent.map();
                let newOpp = opponent.map((opp,index) =>
                    <p key={index}>{opp}</p>
                );
                let newScore = score.map((scr,index) =>
                    <p key={index}>{scr}</p>
                );
                this.setState({
                    opponent: newOpp,
                    score: newScore
                })
            })
    }

    render(){
        if(this.state.opponent==""){
            return <p>Loading...</p>
        }

        return(
            <div className= "container-fluid">
                <row>
                    <h1>
                        Schedule
                    </h1>
                    <hr/>
                </row>
                <row>
                    <div className="col-md-6 noPadding">
                        <strong>{this.state.opponent}</strong>
                    </div>
                    <div className="col-md-6 noPadding">
                        {this.state.score}
                    </div>
                </row>
            </div>
        )
    }
}

export default Sports;