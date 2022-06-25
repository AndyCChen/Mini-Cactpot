import Slot from './Slot';
import RevealSlotSet from './RevealSlotSet';
import ConfirmButton from './ConfirmButton';
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

      const payout = {
         6: '10,000',
         7: '36',
         8: '720',
         9: '360',
         10: '80',
         11: '252',
         12: '108',
         13: '72',
         14: '54',
         15: '180',
         16: '72',
         17: '180',
         18: '119',
         19: '36',
         20: '306',
         21: '1,080',
         22: '144',
         23: '1,800',
         24: '3,600',
      }

      setSum(payout[sum]);
   }

   //******************************************************* */
   // FUNCTION
   // resets gameboard with new randomized values & all slots covered
   const resetGameBoard = () => {
      // reset toggleSlots state
      setToggleSlots(false);

      // reset selector
      setSelector(0);

      // cover all slots
      setCoverAllSlots(true);

      // set slotsToBeRevealed back to inital value of 3
      setSlotsReveals(3);

      // new array of shuffled slot values
      setSlotValuesArray(generateRandomSlotValues());

      // choose new randomSlot to be initially revealed
      setRandomSlot(chooseRandomSlot());

      // hide confirm button
      setShowReveal(false);
   }

   //******************************************************* */
   // FUNCTION
   // sets the value of selector based on slot button's value
   const setSelectorFunc = (value) => {
      setSelector(value);
   }

   // randomSlot decides which slot is initally revealed and start of the game
   const [randomSlot, setRandomSlot] = useState(chooseRandomSlot());

   // initialize number of slots allowed to be revealed by user to be 3
   const [slotsToBeRevealed, setSlotsReveals] = useState(3);

   // array of random slot values 1-9 to be assigned to each slot
   const [slotValuesArray, setSlotValuesArray] = useState(generateRandomSlotValues());

   // bool that toggles if slot is covered or uncovered
   const [toggleSlotState, setToggleSlots] = useState(false);

   // sum of the line chosen by user
   const [mgpSum, setSum] = useState(0);

   // bool for controlling if confirm button is to be shown or not
   const [showReveal, setShowReveal] = useState(false);

   // bool for covering all slots
   const [coverAllSlots, setCoverAllSlots] = useState(false);

   // int selector for choosing which slot button to update visibility
   const [selector, setSelector] = useState(0);

   return (
      <div className="GameBoard">
         <div>
            <RevealSlotSet
               nameOfClass='-start'
               icon={<BsArrowDownRight size={20}/>}
               lineValues={ [slotValuesArray[0], slotValuesArray[4], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowReveal}
            />
            <RevealSlotSet
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[0], slotValuesArray[3], slotValuesArray[6]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowReveal}
            />
            <RevealSlotSet
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[1], slotValuesArray[4], slotValuesArray[7]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowReveal}
            />
            <RevealSlotSet
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[2], slotValuesArray[5], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowReveal}
            />
            <RevealSlotSet
               nameOfClass='-end'
               icon={<BsArrowDownLeft size={20}/>}
               lineValues={ [slotValuesArray[2], slotValuesArray[4], slotValuesArray[6]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowReveal}
            />
         </div>
         <div>
            <RevealSlotSet
               nameOfClass='-start'
               lineValues={ [slotValuesArray[0], slotValuesArray[1], slotValuesArray[2]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowReveal}
            />
            <Slot
               slotValue={slotValuesArray[0]}
               isVisible={coverAllSlots ? false : (1 === randomSlot ? true : (slotValuesArray[0] === selector ? true : false))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
            <Slot
               slotValue={slotValuesArray[1]}
               isVisible={coverAllSlots ? false : (2 === randomSlot ? true : (slotValuesArray[1] === selector && true))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
            <Slot
               slotValue={slotValuesArray[2]}
               isVisible={coverAllSlots ? false : (3 === randomSlot ? true : (slotValuesArray[2] === selector ? true : false))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
         </div>
         <div>
            <RevealSlotSet
               nameOfClass='-start'
               lineValues={ [slotValuesArray[3], slotValuesArray[4], slotValuesArray[5]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowReveal}
            />
            <Slot
               slotValue={slotValuesArray[3]}
               isVisible={coverAllSlots ? false : (4 === randomSlot ? true : (slotValuesArray[3] === selector ? true : false))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
            <Slot
               slotValue={slotValuesArray[4]}
               isVisible={coverAllSlots ? false : (5 === randomSlot ? true : (slotValuesArray[4] === selector ? true : false))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
            <Slot
               slotValue={slotValuesArray[5]}
               isVisible={coverAllSlots ? false : (6 === randomSlot ? true : (slotValuesArray[5] === selector ? true : false))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
         </div>
         <div>
            <RevealSlotSet
               nameOfClass='-start'
               lineValues={ [slotValuesArray[6], slotValuesArray[7], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowReveal}
            />
            <Slot
               slotValue={slotValuesArray[6]}
               isVisible={coverAllSlots ? false : (7 === randomSlot ? true : (slotValuesArray[6] === selector ? true : false))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
            <Slot
               slotValue={slotValuesArray[7]}
               isVisible={coverAllSlots ? false : (8 === randomSlot ? true : (slotValuesArray[7] === selector ? true : false))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
            <Slot
               slotValue={slotValuesArray[8]}
               isVisible={coverAllSlots ? false : (9 === randomSlot ? true : (slotValuesArray[8] === selector ? true : false))}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               toggleSlot={toggleSlotState}
               setSelector={setSelectorFunc}
            />
         </div>

         <p className='selectSlotText'>{getBottomHelperText(slotsToBeRevealed)}</p>

         {showReveal && 
            <ConfirmButton setToggleSlots={setToggleSlots} sum={mgpSum.toString()} resetGameBoard={resetGameBoard}/>
         }
      </div>
   )
}

export default GameBoard