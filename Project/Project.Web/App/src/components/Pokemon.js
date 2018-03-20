import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pokemon: null,
            second: ""
        };
    }

    componentDidMount =() =>{
        var id = this.getRandomInt(802);
        axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
            .then(resp =>{
                let pokemon = resp.data;
                console.log(pokemon);
                let name = pokemon.name.toUpperCase();
                this.setState({
                    pokemon: pokemon,
                    name: name,
                    id: pokemon.id,
                    sprite: pokemon.sprites.front_default,
                    speed: pokemon.stats[0].base_stat,
                    spdef: pokemon.stats[1].base_stat,
                    spatk: pokemon.stats[2].base_stat,
                    def: pokemon.stats[3].base_stat,
                    atk: pokemon.stats[4].base_stat,
                    hp: pokemon.stats[5].base_stat
                });
            })
    }

    getRandomInt = (MAX) =>{
        return Math.floor(Math.random() * Math.floor(MAX))
    }
      

    render(){
        if(this.state.pokemon==null){
            return <p>Loading...</p>
        }

        return(
            <div> 
                <form className="pokemonForm">
                    <strong>{this.state.name} #{this.state.id}</strong>
                    <div className="row">
                        <div className="form-group">
                            <img src={this.state.sprite} alt="pokemon"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <strong>HP: {this.state.hp}</strong>
                            </div>
                            <div className="form-group">
                                <strong>DEF: {this.state.def}</strong>
                            </div>
                            <div className="form-group">
                                <strong>SPDEF: {this.state.spdef}</strong>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <strong>ATK: {this.state.atk}</strong>
                            </div>
                            <div className="form-group">
                                <strong>SPATK: {this.state.spatk}</strong>
                            </div>
                            <div className="form-group">
                                <strong>SPEED: {this.state.speed}</strong>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Pokemon;