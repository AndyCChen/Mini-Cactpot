import PropTypes from 'prop-types';
import { useState } from 'react';

const Slot = ({ slotValue, isInitiallyRevealed, updateSlotsRevealed, slotsLeftToBeRevealed, toggleSlot}) => {

   //******************************************************* */
   // FUNCTION
   // if number of slots left to reveal is 0 or isSlotRevealed is true return nothing
   // else uncover the slot and updateSlotsRevealed()
   const setIsSlotRevealed = () => {

      if (slotsLeftToBeRevealed === 0 || isSlotRevealed) {
         return;
      }

      setSlotStatus(!isSlotRevealed);
      updateSlotsRevealed();
   }

   const [isSlotRevealed, setSlotStatus] = useState(isInitiallyRevealed);

   return (
      <button className='button-slot' onClick={setIsSlotRevealed} style={{ color: isSlotRevealed || toggleSlot ? 'black' : '#FFDC5F'}}>
         {slotValue}
      </button>
   )
}

Slot.propTypes = {
   slotValue: PropTypes.number.isRequired,
   isInitiallyRevealed: PropTypes.bool.isRequired,
   updateSlotsRevealed: PropTypes.func.isRequired,
   slotsLeftToBeRevealed: PropTypes.number.isRequired,
}

export default Slot