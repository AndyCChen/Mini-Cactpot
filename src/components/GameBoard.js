import './../components/Slots';
import Slots from './../components/Slots';
import RevealSlotSet from './RevealSlotSet';
import { BsArrowDownRight, BsArrowDownLeft, BsArrowDown } from "react-icons/bs";
import { useState } from 'react';

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
      n++;
   }

   return array;
}

const chooseRandomSlot = () => {
   return Math.floor(Math.random() * 9) + 1;
}

const slotValuesArray = generateRandomSlotValues();

const GameBoard = () => {

   const [randomSlot, getRandomSlot] = useState(chooseRandomSlot());
   console.log('randomSlot is ', randomSlot);

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
            <Slots slotValue={slotValuesArray[0]} isInitiallyRevealed={1 === randomSlot ? true : false}/>
            <Slots slotValue={slotValuesArray[1]} isInitiallyRevealed={2 === randomSlot ? true : false}/>
            <Slots slotValue={slotValuesArray[2]} isInitiallyRevealed={3 === randomSlot ? true : false}/>
         </div>

         <div>
            <RevealSlotSet nameOfClass='-start'/>
            <Slots slotValue={slotValuesArray[3]} isInitiallyRevealed={4 === randomSlot ? true : false}/>
            <Slots slotValue={slotValuesArray[4]} isInitiallyRevealed={5 === randomSlot ? true : false}/>
            <Slots slotValue={slotValuesArray[5]} isInitiallyRevealed={6 === randomSlot ? true : false}/>
         </div>

         <div>
            <RevealSlotSet nameOfClass='-start'/>
            <Slots slotValue={slotValuesArray[6]} isInitiallyRevealed={7 === randomSlot ? true : false}/>
            <Slots slotValue={slotValuesArray[7]} isInitiallyRevealed={8 === randomSlot ? true : false}/>
            <Slots slotValue={slotValuesArray[8]} isInitiallyRevealed={9 === randomSlot ? true : false}/>
         </div>
      </div>
   )
}

export default GameBoard