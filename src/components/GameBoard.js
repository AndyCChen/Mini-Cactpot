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

   //******************************************************* */
   // FUNCTION
   // decrement slotsToBeRevealed each time a slot is clicked, function
   // is passed into Slot component as prop
   const updateSlotsRevealed = () => {
      setSlotsReveals(slotsToBeRevealed - 1);
   }

   //******************************************************* */
   // FUNCTION
   // returns a string based on how many remaining slots are allowed to be uncovered
   const getBottomHelperText = (slotsRevealedCount) => {
      if (slotsRevealedCount === 3) {
         return 'Select three slots to uncover.';
      } else if (slotsRevealedCount === 2) {
         return 'Select two slots to uncover.';
      } else if (slotsRevealedCount === 1){
         return 'Select one slots to uncover.';
      } else {
         return 'Select a line to add up.';
      }
   }

   //******************************************************* */
   // FUNCTION
   // returns the sum of lineValues
   const getSum = (lineValues) => {
      let sum = 0;

      lineValues.forEach(
         (slotValue) => {sum += slotValue}
      )

      console.log(sum);
   }

   // randomSlot decides which slot is initally revealed and start of the game
   const [randomSlot, getRandomSlot] = useState(chooseRandomSlot());

   // initialize number of slots allowed to be revealed by user to be 3
   const [slotsToBeRevealed, setSlotsReveals] = useState(3);

   // array of random slot values 1-9 to be assigned to each slot
   const [slotValuesArray, setSlotValuesArray] = useState(generateRandomSlotValues());

   return (
      <div className="GameBoard">
         <div>
            <RevealSlotSet 
               nameOfClass='-start' 
               icon={<BsArrowDownRight size={20}/>} 
               lineValues={ [slotValuesArray[0], slotValuesArray[4], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <RevealSlotSet
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[0], slotValuesArray[3], slotValuesArray[6]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <RevealSlotSet 
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[1], slotValuesArray[4], slotValuesArray[7]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <RevealSlotSet 
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[2], slotValuesArray[5], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <RevealSlotSet
               nameOfClass='-end' 
               icon={<BsArrowDownLeft size={20}/>} 
               lineValues={ [slotValuesArray[2], slotValuesArray[4], slotValuesArray[6]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
         </div>

         <div>
            <RevealSlotSet 
            nameOfClass='-start' 
            lineValues={ [slotValuesArray[0], slotValuesArray[1], slotValuesArray[2]] }
            getSum={getSum}
            slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[0]} 
               isInitiallyRevealed={1 === randomSlot ? true : false} 
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[1]} 
               isInitiallyRevealed={2 === randomSlot ? true : false} 
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[2]} 
               isInitiallyRevealed={3 === randomSlot ? true : false} 
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
         </div>

         <div>
            <RevealSlotSet 
            nameOfClass='-start' 
            lineValues={ [slotValuesArray[3], slotValuesArray[4], slotValuesArray[5]] }
            getSum={getSum}
            slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[3]} 
               isInitiallyRevealed={4 === randomSlot ? true : false} 
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[4]} 
               isInitiallyRevealed={5 === randomSlot ? true : false}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[5]} 
               isInitiallyRevealed={6 === randomSlot ? true : false}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
         </div>

         <div>
            <RevealSlotSet
               nameOfClass='-start' 
               lineValues={ [slotValuesArray[6], slotValuesArray[7], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[6]}
               isInitiallyRevealed={7 === randomSlot ? true : false}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[7]}
               isInitiallyRevealed={8 === randomSlot ? true : false} 
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
            <Slot 
               slotValue={slotValuesArray[8]}
               isInitiallyRevealed={9 === randomSlot ? true : false} 
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
            />
         </div>

         <p className='selectSlotText'>{getBottomHelperText(slotsToBeRevealed)}</p>
      </div>
   )
}

export default GameBoard