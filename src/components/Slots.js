import PropTypes from 'prop-types';
import { useState } from 'react';

const Slots = ({ slotValue }) => {

   const [isSlotRevealed, setSlotStatus] = useState(false);

   // set slotIsRevealed
   const setIsSlotRevealed = () => {
      setSlotStatus(!isSlotRevealed);
   }

   return (
      <button className='button-slot' onClick={setIsSlotRevealed} style={{ color: isSlotRevealed ? 'black' : '#FFDC5F'}}>
         {slotValue}
      </button>
   )
}

Slots.defaultProps = {
   slotValue: 404
}

Slots.propTypes = {
   slotValue: PropTypes.number,
}

export default Slots