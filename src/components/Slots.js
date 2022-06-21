import PropTypes from 'prop-types';
import { useState } from 'react';

const Slots = ({ slotValue, isInitiallyRevealed }) => {

   const [isSlotRevealed, setSlotStatus] = useState(isInitiallyRevealed);

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
   slotValue: 0,
   isInitiallyRevealed: false,
}

Slots.propTypes = {
   slotValue: PropTypes.number,
   isInitiallyRevealed: PropTypes.bool,
}

export default Slots