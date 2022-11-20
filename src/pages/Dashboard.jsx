import React, { useState} from 'react';
import Notfound from '../components/notfound';
import Navbar from '../components/Navbar/Navbar';
import Letter from '../components/letters';
import '../styles/dashboard.css'
import listactive from '../assets/listactive.png'
import message from '../assets/messages.png'
import gridactive from '../assets/gridactive.png'
import lists from '../assets/list.png'
import grid from '../assets/grid.png'
import {useAuthContext} from '../hooks/useAuthContext'


function Dashboard() {
  const [letters] = useState([
    {text:'Love notes curated for your loved one, and  scheduled to be sent out in the morning', id:1, completed:true},
    {text:'Love notes curated for your loved one, and  scheduled to be sent out in the morning', id:5, completed:true},
    {text:'Love notes curated for your loved one, and  scheduled to be sent out in the morning', id:7, completed:true},
    {text:'Love notes curated for your loved one, and  scheduled to be sent out in the morning', id:2, completed:true},
    {text:'Love notes curated for your loved one, and  scheduled to be sent out in the morning', id:3, completed:true},
    {text:'Love notes curated for your loved one, and  scheduled to be sent out in the morning', id:4, completed:true}
  ]);
  const [list, setList] = useState(true);
  const [completed, setCompleted] = useState(true);

  console.log(letters)


  //A function to handle list and grid alignment
  const handleListClicked = ()=> {
    setList(true)
  } 

  //A function to handle list and grid alignment
  const handleGridClicked = ()=> {
    setList(false)
  }
 
  //Toggles the open state of the mobile navigation
 

  //shows completed letters
  const handleCompletedClick = () => {
    setCompleted(true)
  }

  //shows scheduled letters
  const handlescheduledClick = () => {
    setCompleted(false)
  }
  const {user} = useAuthContext()
  

  return (
       <div className='dashboard'>
          <Navbar/>

          <main className='main'>
            <div className='main-top'>
              <h2>Hello {user}</h2>
              <p>Letters that has made your loved ones smile</p>
            </div>

            <section className='bottomsec'>
              <div className='bottomsec-top'>
                <div className={completed ? 'bottomsec-topleft': 'bottomsec-topleftunactive'} onClick={handleCompletedClick}>
                  <p>Completed <span className={completed ? 'spanred': 'spangrey'}></span></p>
                </div>
                <div className={completed ? 'bottomsec-topleftunactive': 'bottomsec-topleft'} onClick={handlescheduledClick}>
                  <p>Scheduled <span  className={ completed ? 'spangrey': 'spanred'}></span></p>
                </div>
                 
              </div>

             { letters ? <div className={ list ? 'bottomsec-btm': 'bottomsec-btm-grid'}>
                 <div className={list ? 'btmsecbtm-top' : 'btmsecbtm-top-grid'}>
                    <h2>Sent Letters</h2>
                    <div className='list'>
                      <div className='listview' onClick={handleListClicked}>
                        <img src = {list ? listactive: lists} alt='list view icon'/>
                      </div>

                      <div className='gridview' onClick={handleGridClicked}>
                        <img src = {list ? grid: gridactive} alt='grid view icon'/>
                      </div>


                    </div>
                 </div>

                 <div className={list ? 'letterslist' : 'lettersgrid'}>
                    {letters.map(letter => <Letter key={letter.id} text={letter.text}/>)}
                 </div>

              </div> : <Notfound/> }

              

            </section>

           { letters ? <div className='pagin-mssg'>
              <div className='pagin'>
                <p>1</p>
                <p className='active'>2</p>
                <p>3</p>
                <p>4</p>
              </div>

              <div className='sendmssg'>
                <img src={message} alt='message icon'/>

              </div>

            </div> : ''}
          </main>

         
       </div>
  )
}

export default Dashboard
