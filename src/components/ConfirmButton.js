import Popup from 'reactjs-popup';
import PropTypes from 'prop-types'
import { useState } from 'react';

const ConfirmButton = ({ revealAllSlots, sum }) => {

	const [open, setOpen] = useState(false);
 	const closeModal = () => setOpen(false);

	const onClickFunction = () => {
		revealAllSlots();
		setOpen(!open);
	}

	return (
		<div style={{ textAlign: 'center'}}>
			<button className='button-Confirm' onClick={onClickFunction} >
				Confirm
			</button>

			<Popup open={open} onClose={closeModal} >
				<button className='popup-close-button' onClick={closeModal}>
					&times;
				</button>
				<div className='popup-header'>
					MGP Payout
				</div>
				<div style={{ textAlign: 'center'}}>
					{sum}
				</div>
			</Popup>
		</div>
	)
}

ConfirmButton.propTypes = {
	revealAllSlots: PropTypes.func.isRequired,
	sum: PropTypes.string,
}

export default ConfirmButton