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
   // return number between 0 - 8
   const chooseRandomSlot = () => {
      return Math.floor(Math.random() * 9);
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
   // returns the mgp won based on the respective sum of lineValues chosen by user
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
   // resets gameboard
   const resetGameBoard = () => {
      // remove highlight from revealSlot and slot buttons
      setIsRevealSlotHighlighted(initIsVisibility(8, false));
      setIsSlotHighlighted(initIsVisibility(9));

      // reset isVisible array to be all false with one random element set as true
      setIsVisible(initIsVisibility(9, true));

      // reset slotsToBeRevealed back to inital value of 3
      setSlotsReveals(3);

      // set a new array of shuffled slot values
      setSlotValuesArray(generateRandomSlotValues());

      // hide confirm button
      setShowConfirm(false);
   }

   //******************************************************* */
   // FUNCTION
   // creates array of all false values
   const initIsVisibility = (length, isRandom) => {
      let array = Array.apply(null, Array(length)).map( (x) => { return false });

      if (isRandom) {
         // choose one randome slot to be set to true
         array[chooseRandomSlot()] = true;
      }

      return array;
   }

   //******************************************************* */
   // FUNCTION
   // set visibility of a slot button that has been clicked
   const setVisibility = (slotValue) => {
      let array = [...isVisible];

      // choose which array element is selected based on slot value
      for (let i = 0; i < array.length; i++) {
         if (slotValue ===  slotValuesArray[i]) {
            array[i] = true;
         }
      }

      setIsVisible(array);
   }

   //******************************************************* */
   // FUNCTION
   // update state of isVisible array with new array of booleans that are all true
   const revealSlots = () => {
      let array = Array.apply(null, Array(9)).map( (x) => { return true });

      setIsVisible(array);
   }

   //******************************************************* */
   // FUNCTION
   // highlight line that has been selected to be added up
   // deselected previous line that was selected if any
   const selectLine = (revealSlotButtonID, slotIndexOne, slotIndexTwo, slotIndexThree) => {
      let revealArray = [...isRevealSlotHighlighted];
      let slotArray = [...isSlotHighlighted];

      revealArray.fill(false);
      slotArray.fill(false);

      revealArray[revealSlotButtonID] = true;
      slotArray[slotIndexOne] = true;
      slotArray[slotIndexTwo] = true;
      slotArray[slotIndexThree] = true;

      setIsSlotHighlighted(slotArray);
      setIsRevealSlotHighlighted(revealArray);
   }

   // array of bool for each slot button that controls the visibilty of the slot value
   const [isVisible, setIsVisible] = useState(initIsVisibility(9, true));

   // array of bool for each revealSlotButton for if it is highlighted or not
   const [isRevealSlotHighlighted, setIsRevealSlotHighlighted] = useState(initIsVisibility(8, false))

   // array of bool to highlight line of slots chosen by user to be added up
   const [isSlotHighlighted, setIsSlotHighlighted] = useState(initIsVisibility(9, false));

   // initialize number of slots allowed to be revealed by user to be 3
   const [slotsToBeRevealed, setSlotsReveals] = useState(3);

   // array of random slot values 1-9 to be assigned to each slot
   const [slotValuesArray, setSlotValuesArray] = useState(generateRandomSlotValues());

   // sum of the line chosen by user
   const [mgpSum, setSum] = useState(0);

   // bool for controlling if confirm button is to be shown or not
   const [showConfirm, setShowConfirm] = useState(false);

   return (
      <div className="GameBoard">
         <div>
            <RevealSlotSet
               id={0}
               nameOfClass='-start'
               icon={<BsArrowDownRight size={20}/>}
               lineValues={ [slotValuesArray[0], slotValuesArray[4], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowConfirm}
               isHighlighted={isRevealSlotHighlighted[0]}
               setIsHighlighted={selectLine}
               slotIndices= { [0, 4, 8]}
            />
            <RevealSlotSet
               id={1}
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[0], slotValuesArray[3], slotValuesArray[6]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowConfirm}
               isHighlighted={isRevealSlotHighlighted[1]}
               setIsHighlighted={selectLine}
               slotIndices= { [0, 3, 6]}
            />
            <RevealSlotSet
               id={2}
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[1], slotValuesArray[4], slotValuesArray[7]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowConfirm}
               isHighlighted={isRevealSlotHighlighted[2]}
               setIsHighlighted={selectLine}
               slotIndices= { [1, 4, 7]}
            />
            <RevealSlotSet
               id={3}
               icon={<BsArrowDown size={20}/>}
               lineValues={ [slotValuesArray[2], slotValuesArray[5], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowConfirm}
               isHighlighted={isRevealSlotHighlighted[3]}
               setIsHighlighted={selectLine}
               slotIndices= { [2, 5, 8]}
            />
            <RevealSlotSet
               id={4}
               nameOfClass='-end'
               icon={<BsArrowDownLeft size={20}/>}
               lineValues={ [slotValuesArray[2], slotValuesArray[4], slotValuesArray[6]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowConfirm}
               isHighlighted={isRevealSlotHighlighted[4]}
               setIsHighlighted={selectLine}
               slotIndices= { [2, 4, 6]}
            />
         </div>
         <div>
            <RevealSlotSet
               id={5}
               nameOfClass='-start'
               lineValues={ [slotValuesArray[0], slotValuesArray[1], slotValuesArray[2]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowConfirm}
               isHighlighted={isRevealSlotHighlighted[5]}
               setIsHighlighted={selectLine}
               slotIndices= { [0, 1, 2]}
            />
            <Slot
               slotValue={slotValuesArray[0]}
               isVisible={isVisible[0]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[0]}
            />
            <Slot
               slotValue={slotValuesArray[1]}
               isVisible={isVisible[1]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[1]}
            />
            <Slot
               slotValue={slotValuesArray[2]}
               isVisible={isVisible[2]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[2]}
            />
         </div>
         <div>
            <RevealSlotSet
               id={6}
               nameOfClass='-start'
               lineValues={ [slotValuesArray[3], slotValuesArray[4], slotValuesArray[5]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowConfirm}
               isHighlighted={isRevealSlotHighlighted[6]}
               setIsHighlighted={selectLine}
               slotIndices= { [3, 4, 5]}
            />
            <Slot
               slotValue={slotValuesArray[3]}
               isVisible={isVisible[3]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[3]}
            />
            <Slot
               slotValue={slotValuesArray[4]}
               isVisible={isVisible[4]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[4]}
            />
            <Slot
               slotValue={slotValuesArray[5]}
               isVisible={isVisible[5]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[5]}
            />
         </div>
         <div>
            <RevealSlotSet
               id={7}
               nameOfClass='-start'
               lineValues={ [slotValuesArray[6], slotValuesArray[7], slotValuesArray[8]] }
               getSum={getSum}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setShowConfirm={setShowConfirm}
               isHighlighted={isRevealSlotHighlighted[7]}
               setIsHighlighted={selectLine}
               slotIndices= { [6, 7, 8]}
            />
            <Slot
               slotValue={slotValuesArray[6]}
               isVisible={isVisible[6]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[6]}
            />
            <Slot
               slotValue={slotValuesArray[7]}
               isVisible={isVisible[7]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[7]}
            />
            <Slot
               slotValue={slotValuesArray[8]}
               isVisible={isVisible[8]}
               updateSlotsRevealed={updateSlotsRevealed}
               slotsLeftToBeRevealed={slotsToBeRevealed}
               setIsVisible={setVisibility}
               isHighlighted={isSlotHighlighted[8]}
            />
         </div>

         <p className='selectSlotText'>{getBottomHelperText(slotsToBeRevealed)}</p>

         {showConfirm && <ConfirmButton sum={mgpSum.toString()} resetGameBoard={resetGameBoard} revealAllSlots={revealSlots}/>}
      </div>
   )
}

export default GameBoard