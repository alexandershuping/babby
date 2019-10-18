import React from 'react'

class Search extends React.Component{
	
	filter_update() {
		//const val = this.user_filter.value
		this.props.filter_update(this.user_filter.value)
	}

	render(){
		return(
			<div>
				<h4>Filter by name</h4>
				<form>
					<input 
						type="text"
						ref={ (val) => {this.user_filter = val}}
						placeholder="Filter"
						onChange={this.filter_update.bind(this)}
					/>
				</form>
			</div>
		)
	}
}

export default Search
