import React from 'react'
import { useState } from 'react'
import { Button,Dicebox, DiceImg,Rules } from '../components'
import MsgBox from '../components/MsgBox'
const Gameplay = () => {
  const [totalScore,setTotalScore] = useState(0)
  const [Img,setImg] =useState("/images/two.png")
  const [isSelected,setIsSelected] = useState(null)
  const [imgValue, setImgValue] = useState(0);
  const [showRules, setShowRules] = useState(false);




  let imgPath = [{path:'/images/one.png',value:1},
                {path:'/images/three.png',value:3},
                {path:'/images/two.png',value:2},
                {path:'/images/four.png',value:4},
                {path:'/images/five.png',value:5},
                {path:'/images/six.png',value:2}]
  let DiceNum = [1,2,3,4,5,6]

  function imgUpdate() {
    const randomIndex = Math.floor(Math.random() * imgPath.length);
    const { path, value } = imgPath[randomIndex];
    setImg(path)
    setImgValue(value)
  }
  
  return (
    <div>
      <div 
    className='max-h-[100px] min-w-[1080p] flex justify-between items-center m-[10px] '>
     <div className='text-[30px] font-bold self-center'>
       <h1 className='text-[40px]'>{totalScore}</h1>
      <p>Total Score</p>
     </div>
    <div>
       <div className='max-h-[60px] flex gap-[20px]'>
      {/* <Dicebox Text='1'/> */}
      {DiceNum.map((value, i) => (
        <Dicebox onClick={() => {setIsSelected(value);
         }} key={i} Text={value} />
      ))}
     </div>
     <div
     className='max-h-[60px] flex justify-end items-center'>
     <MsgBox msg={`${isSelected !== null ? `You Have Selected ${isSelected} `: 'Please select a number'}`} />

     </div>
    </div>
    </div>
    <div 
    className='flex justify-center items-center mt-[100px] gap-[30px]'>
      <DiceImg  url={Img}/>
    <div
    className='m-[30px]'>
      <Button 
  onclick={() => {
    if(isSelected !== null){
      const randomIndex = Math.floor(Math.random() * imgPath.length);
      const { path, value } = imgPath[randomIndex];
      setImg(path);
      if(value === isSelected) {
        setTotalScore((prev) => prev + value); 
      }
      setIsSelected(null);
    } else {
      alert("Please select a number");
    }
  }}
  content='Roll The Dice'  />
      <Button
      onclick={() => setTotalScore(0)} content='Restart'  />
      <Button 
      onclick={() => setShowRules(!showRules)}
      content='Show Rules'/>
    </div>
    
    </div>
    <div>
      {showRules?<Rules />:''}
    </div>
    </div>
  )
}

export default Gameplay
