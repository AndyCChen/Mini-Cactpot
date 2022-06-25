import { BsArrowRight } from "react-icons/bs";
import PropTypes from 'prop-types';

const RevealSlotSet = ({ nameOfClass, icon, lineValues, slotsLeftToBeRevealed, getSum, setShowConfirm }) => {

   //******************************************************* */
   // FUNCTION
   // return nothing if user has not selected 3 slots yet
   // else call getSum and setShowConfirm to show confirm button
   const callGetSum = () => {

      if (slotsLeftToBeRevealed !== 0) {
         return;
      }

      getSum(lineValues);
      setShowConfirm(true);
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
   slotsLeftToBeRevealed: PropTypes.number.isRequired,
   getSum: PropTypes.func.isRequired,
   setShowConfirm: PropTypes.func.isRequired,
}

export default RevealSlotSet