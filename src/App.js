import React from 'react';
import './App.css';
import data from './data/data'
import NameList from './components/NameList'
import Credit from './components/Credit'
import Search from './components/Search'
import Shortlist from './components/Shortlist'
import Gender from './components/Gender'

class App extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			user_filter: '',
			gender_filter: {
				masc: true,
				fem: true,
				neut: true
			},
			shortlist: []
		}
	}

	filter_update(new_filter){
		this.setState({
			user_filter: new_filter,
		})
	}

	gender_update(new_filter){
		this.setState({
			gender_filter: new_filter
		})
	}

	favorite(id){
		this.setState({
			shortlist: this.state.shortlist.concat(id)
		})
	}

	unfavorite(id){
		var index = this.state.shortlist.indexOf(id)

		if(index !== -1){
			var tmp_arr = this.state.shortlist
			tmp_arr.splice(index, 1);
			this.setState({
				shortlist: tmp_arr
			})
		}
	}

	render(){
	  return (
			<div className="App">
			<header className="filters">
				<Search 
					filter_update={this.filter_update.bind(this)} 
				/>
				<Gender 
					gender_filter={this.state.gender_filter}
					gender_update={this.gender_update.bind(this)}
				/>
				</header>
				<main>
					<Shortlist 
						data={data} 
						shortlist={this.state.shortlist} 
						unfavorite={this.unfavorite.bind(this)} 
					/>
					<hr />
					<NameList 
						data={data} 
						shortlist={this.state.shortlist} 
						filter={this.state.user_filter} 
						gender_filter={this.state.gender_filter} 
						favorite={this.favorite.bind(this)} 
					/>
					<Credit />
				</main>
 	   </div>
		)
	}

}

export default App;
