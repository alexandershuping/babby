import React from 'react'
import Name from './Name'

function NameList({data, shortlist, filter, gender_filter, favorite}) {

	const namesList = data
	.filter(name => {
		return !shortlist.includes(name.id)
			&& gender_filter[name.femasc]
			&& name.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
	})
	.map(name => {
		return(
			<Name key={name.id} name={name.name} femasc={name.femasc} callback={favorite} id={name.id} />
		)
	})

	return(
		<ul>
			{namesList}
		</ul>
	)

}

export default NameList
