import Slot from './Slot';
import RevealSlotSet from './RevealSlotSet';
import { BsArrowDownRight, BsArrowDownLeft, BsArrowDown } from "react-icons/bs";
import { useState } from 'react';

const GameBoard = () => {

   //******************************************************* */
   // FUNCTION
   // generate array of random slot values and returns array
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
         n++;
      }

      return array;
   }

   //******************************************************* */
   // FUNCTION
   // pick one random slot to be revealed at the start of the game
   const chooseRandomSlot = () => {
      return Math.floor(Math.random() * 9) + 1;
   }

   // randomSlot decides which slot is initally revealed and start of the game
   const [randomSlot, getRandomSlot] = useState(chooseRandomSlot());

   // initialize number of slotsRevealed by user to be 0
   const [slotsRevealed, setSlotsReveals] = useState(0);

   //******************************************************* */
   // FUNCTION
   // increment slotsRevealed each time a slot is clicked, function
   // is passed into Slot component as prop
   const updateSlotsRevealed = () => {
      setSlotsReveals(slotsRevealed + 1);
   }

   // array of random slot values 1-9 to be assigned to each slot
   const [slotValuesArray, setSlotValuesArray] = useState(generateRandomSlotValues());

   return (
      <div className="GameBoard">
         <div>
            <RevealSlotSet nameOfClass='-start' icon={<BsArrowDownRight size={20}/>}/>
            <RevealSlotSet icon={<BsArrowDown size={20}/>}/>
            <RevealSlotSet icon={<BsArrowDown size={20}/>}/>
            <RevealSlotSet icon={<BsArrowDown size={20}/>}/>
            <RevealSlotSet nameOfClass='-end' icon={<BsArrowDownLeft size={20}/>}/>
         </div>

         <div>
            <RevealSlotSet nameOfClass='-start'/>
            <Slot slotValue={slotValuesArray[0]} isInitiallyRevealed={1 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
            <Slot slotValue={slotValuesArray[1]} isInitiallyRevealed={2 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
            <Slot slotValue={slotValuesArray[2]} isInitiallyRevealed={3 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
         </div>

         <div>
            <RevealSlotSet nameOfClass='-start'/>
            <Slot slotValue={slotValuesArray[3]} isInitiallyRevealed={4 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
            <Slot slotValue={slotValuesArray[4]} isInitiallyRevealed={5 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
            <Slot slotValue={slotValuesArray[5]} isInitiallyRevealed={6 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
         </div>

         <div>
            <RevealSlotSet nameOfClass='-start'/>
            <Slot slotValue={slotValuesArray[6]} isInitiallyRevealed={7 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
            <Slot slotValue={slotValuesArray[7]} isInitiallyRevealed={8 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
            <Slot slotValue={slotValuesArray[8]} isInitiallyRevealed={9 === randomSlot ? true : false} updateSlotsRevealed={updateSlotsRevealed}/>
         </div>

         <p className='selectSlotText'>{slotsRevealed}</p>
      </div>
   )
}

export default GameBoard