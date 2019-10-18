import React from 'react'

function Gender({gender_filter, gender_update}){
	return(
		<div className="gender">
		<h4>Filter by gender</h4>
		<ul>
			<li className={"fem" + (gender_filter.fem ? "" : " inactive")} onClick={() => {
				gender_update({fem: !gender_filter.fem, neut: gender_filter.neut, masc: gender_filter.masc})
			}}>Feminine</li>
			<li className={"neut" + (gender_filter.neut ? "" : " inactive")} onClick={() => {
				gender_update({fem: gender_filter.fem, neut: !gender_filter.neut, masc: gender_filter.masc})
			}}>Neutral</li>
			<li className={"masc" + (gender_filter.masc ? "" : " inactive")} onClick={() => {
				gender_update({fem: gender_filter.fem, neut: gender_filter.neut, masc: !gender_filter.masc})
			}}>Masculine</li>
		</ul>
		</div>
	)
}

export default Gender
