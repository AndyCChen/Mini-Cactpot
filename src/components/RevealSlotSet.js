import { BsArrowRight } from "react-icons/bs";
import PropTypes from 'prop-types';

const RevealSlotSet = ({ nameOfClass, icon, lineValues, slotsLeftToBeRevealed, getSum, uncoverAllSlots }) => {

   //******************************************************* */
   // FUNCTION
   // return nothing if user has not selected 3 slots yet
   // else call getSum
   const callGetSum = () => {

      if (slotsLeftToBeRevealed !== 0) {
         return;
      }

      getSum(lineValues);
      uncoverAllSlots();
   }

   return (
      <button className={`button-RevealSlotSet${nameOfClass}`} onClick={callGetSum}>
         {icon}
      </button>
   )
}

RevealSlotSet.defaultProps = {
   nameOfClass: "",
   icon: <BsArrowRight size={20}/>,
}

RevealSlotSet.propTypes = {
   nameofClass: PropTypes.string,
   lineValues: PropTypes.array.isRequired,
   slotsLeftToBeRevealed: PropTypes.number,
   getSum: PropTypes.func.isRequired,
   uncoverAllSlots: PropTypes.func.isRequired,
}

export default RevealSlotSet