import PropTypes from 'prop-types';
import { useState } from 'react';

const Slot = ({ slotValue, isInitiallyRevealed, updateSlotsRevealed }) => {

   //******************************************************* */
   // FUNCTION
   // set slotIsRevealed
   const setIsSlotRevealed = () => {
      setSlotStatus(!isSlotRevealed);
      updateSlotsRevealed();
   }

   const [isSlotRevealed, setSlotStatus] = useState(isInitiallyRevealed);

   return (
      <button className='button-slot' onClick={setIsSlotRevealed} style={{ color: isSlotRevealed ? 'black' : '#FFDC5F'}}>
         {slotValue}
      </button>
   )
}

Slot.defaultProps = {
   slotValue: 0,
   isInitiallyRevealed: false,
}

Slot.propTypes = {
   slotValue: PropTypes.number,
   isInitiallyRevealed: PropTypes.bool,
   updateSlotsRevealed: PropTypes.func,
}

export default Slot