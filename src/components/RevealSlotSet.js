import { BsArrowRight } from "react-icons/bs";
import PropTypes from 'prop-types';

const RevealSlotSet = ({ id, nameOfClass, icon, lineValues, slotsLeftToBeRevealed, getSum, setShowConfirm, isHighlighted, setIsHighlighted, slotIndices }) => {

   //******************************************************* */
   // FUNCTION
   // return nothing if user has not selected 3 slots yet
   const onClick = () => {

      if (slotsLeftToBeRevealed !== 0) {
         return;
      }

      // sum up lineValues
      getSum(lineValues);

      // show the confirm button
      setShowConfirm(true);

      // highlight the line selected
      setIsHighlighted(id, slotIndices[0], slotIndices[1], slotIndices[2]);
   }

   return (
      <button className={`button-RevealSlotSet${nameOfClass}`} onClick={onClick} style={{ border: isHighlighted && 'solid red'}}>
         {icon}
      </button>
   )
}

RevealSlotSet.defaultProps = {
   nameOfClass: "",
   icon: <BsArrowRight size={20}/>,
}

RevealSlotSet.propTypes = {
   id: PropTypes.number.isRequired,
   nameofClass: PropTypes.string,
   lineValues: PropTypes.array.isRequired,
   slotsLeftToBeRevealed: PropTypes.number.isRequired,
   getSum: PropTypes.func.isRequired,
   setShowConfirm: PropTypes.func.isRequired,
   isHighlighted: PropTypes.bool.isRequired,
   setIsHighlighted: PropTypes.func.isRequired,
}

export default RevealSlotSet