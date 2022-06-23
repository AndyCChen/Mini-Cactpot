import React from 'react'
import PropTypes from 'prop-types'

const ConfirmButton = ({ revealAllSlots }) => {
	return (
		<div style={{ textAlign: 'center'}}>
			<button className='button-Confirm' onClick={revealAllSlots}>
				Confirm
			</button>
		</div>
	)
}

ConfirmButton.propTypes = {
	revealAllSlots: PropTypes.func.isRequired,
}

export default ConfirmButton