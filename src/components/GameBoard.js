import './../components/Slots';
import Slots from './../components/Slots';
import RevealSlotSet from './RevealSlotSet';
import { BsArrowDownRight, BsArrowDownLeft } from "react-icons/bs";

// generate random slot values 1-9 for each slot button
const generateRandomSlotValues = () => {
   // populate array with slot values 1-9
   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

   // use random() to shuffle the array
   let n = 0;
   while (n < array.length) {
      // pick random index to swap
      let indexToSwap = Math.floor(Math.random() * 9);

      let temp = array[indexToSwap];

      array[indexToSwap] = array[n];
      array[n] = temp;
      console.log(array[n]);
      n++;
   }

   return array;
}

const slotValuesArray = generateRandomSlotValues();

const GameBoard = () => {

   return (
      <div className="GameBoard">
         <div>
            <RevealSlotSet nameOfClass='-start' icon={<BsArrowDownRight size={20}/>}/>
            <RevealSlotSet />
            <RevealSlotSet />
            <RevealSlotSet />
            <RevealSlotSet nameOfClass='-end' icon={<BsArrowDownLeft size={20}/>}/>
         </div>

         <div>
            <RevealSlotSet nameOfClass='-start'/>
            <Slots slotValue={slotValuesArray[0]}/>
            <Slots slotValue={slotValuesArray[1]}/>
            <Slots slotValue={slotValuesArray[2]}/>
         </div>

         <div>
            <RevealSlotSet nameOfClass='-start'/>
            <Slots slotValue={slotValuesArray[3]}/>
            <Slots slotValue={slotValuesArray[4]}/>
            <Slots slotValue={slotValuesArray[5]}/>
         </div>

         <div>
            <RevealSlotSet nameOfClass='-start'/>
            <Slots slotValue={slotValuesArray[6]}/>
            <Slots slotValue={slotValuesArray[7]}/>
            <Slots slotValue={slotValuesArray[8]}/>
         </div>
      </div>
   )
}

export default GameBoard