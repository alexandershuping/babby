import React from 'react'

function Name({femasc, name, callback, id}) {

	return(
		<li className={femasc} onClick={() => callback(id)}>{name}</li>
	);

}

export default Name
