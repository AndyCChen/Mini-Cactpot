import PropTypes from 'prop-types';
import { useState } from 'react';

const Slot = ({ slotValue, isVisible, setSelector, updateSlotsRevealed, slotsLeftToBeRevealed, toggleSlot }) => {

   //******************************************************* */
   // FUNCTION
   // if number of slots left to reveal is 0 or isSlotRevealed is true return nothing
   // else uncover the slot and updateSlotsRevealed()
   const revealSlot = () => {

      if (slotsLeftToBeRevealed === 0 || isVisible) {
         return;
      }

      setSelector(slotValue);
      updateSlotsRevealed();
   }

   return (
      <button className='button-slot' onClick={revealSlot} style={{ color: isVisible || toggleSlot ? 'black' : '#FFDC5F'}}>
         {slotValue}
      </button>
   )
}

Slot.propTypes = {
   slotValue: PropTypes.number.isRequired,
   isVisible: PropTypes.bool.isRequired,
   updateSlotsRevealed: PropTypes.func.isRequired,
   slotsLeftToBeRevealed: PropTypes.number.isRequired,
}

export default Slot