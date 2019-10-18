import React from 'react'
import Name from './Name'

function Shortlist({data, shortlist, unfavorite}){

	if(shortlist.length > 0){

		const shortlist_obj = data
		.filter(name => {
			return shortlist.includes(name.id)
		})
		.map(name => {
			return(
				<Name key={name.id} name={name.name} femasc={name.femasc} callback={unfavorite} id={name.id} />
			)
		})

		return(
			<div className="favourites">
				<h4>Shortlist:</h4>
				<ul>
					{shortlist_obj}
				</ul>
			</div>
		)

	}else{

		return(
			<div className="favourites">
				<h4>Click on a name to add to shortlist...</h4>
			</div>
		)

	}
}

export default Shortlist
