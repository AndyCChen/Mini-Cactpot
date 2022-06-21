import { BsArrowRight } from "react-icons/bs";
import PropTypes from 'prop-types';

const RevealSlotSet = ({ nameOfClass, icon }) => {
   return (
      <button className={`button-RevealSlotSet${nameOfClass}`}>
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
}

export default RevealSlotSet