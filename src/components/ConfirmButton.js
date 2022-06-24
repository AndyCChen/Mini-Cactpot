import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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
			<button className="button-Confirm" onClick={onClickFunction}>
				Confirm
			</button>
			<Popup open={open} closeOnDocumentClick={true} onClose={closeModal}>
				<div className="modal">
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