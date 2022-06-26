import PropTypes from 'prop-types';

const Slot = ({ slotValue, isVisible, setIsVisible, updateSlotsRevealed, slotsLeftToBeRevealed, isHighlighted }) => {

   //******************************************************* */
   // FUNCTION
   // if number of slots left to reveal is 0 or slot has already been clicked do nothing
   // else set slot to be visible and call updateSlotsRevealed()
   const revealSlot = () => {

      if (slotsLeftToBeRevealed === 0 || isVisible) {
         return;
      }

      setIsVisible(slotValue);
      updateSlotsRevealed();
   }

   return (
      <button 
         className='button-slot' 
         onClick={revealSlot} 
         style={{ color: isVisible ? 'black' : '#FFDC5F', border: isHighlighted && 'solid red'}}
      >
         {slotValue}
      </button>
   )
}

Slot.propTypes = {
   slotValue: PropTypes.number.isRequired,
   isVisible: PropTypes.bool.isRequired,
   setIsVisible: PropTypes.func.isRequired,
   updateSlotsRevealed: PropTypes.func.isRequired,
   slotsLeftToBeRevealed: PropTypes.number.isRequired,
}

export default Slot