import Popup from 'reactjs-popup';
import PropTypes from 'prop-types'
import { useState } from 'react';

const ConfirmButton = ({ setToggleSlots, sum, resetGameBoard }) => {
 	const closeModal = () => {
		setIsReset(true);
		setOpen(false)
	};

	const onClickFunction = () => {
		setToggleSlots(true);
		setOpen(!open);
	}

	const replay = () => {
		resetGameBoard();
		setIsReset(false);
	}

	// bool for if popup is open or closed
	const [open, setOpen] = useState(false);

	// bool for controlling if confirm button state is changed to replay button
   const [isReset, setIsReset] = useState(false);

	return (
		<div style={{ textAlign: 'center'}}>
			<button className='button-Confirm' onClick={isReset ? replay : onClickFunction } >
				{isReset ? 'Replay' : 'Confirm'}
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
	setToggleSlots: PropTypes.func.isRequired,
	sum: PropTypes.string,
}

export default ConfirmButton