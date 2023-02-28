import React from 'react'
import "../rightSidebar/rightSidebar.css"


// importing icons
import InfoIcon from '@material-ui/icons/Info';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


function RightSidebar() {
  return (
    <div className='right__sidebar_container'>
        <div className='sidebar__header'>
            <h4>Linkedin News</h4>
            <InfoIcon/>
        </div>
        <div className="sidebar__body">
            <ul>
                

                <li className='list__item' >
                    <div className='list__heading'>
                        <h4>Wipro pay row: Experts Weigh in</h4>
                    </div>
                    <div className='list__body'>    
                        <p> 
                        <span>1 Day ago</span>
                        
                        <span>1458 readers</span>
                        </p>
                    </div>
                </li>

                <li className='list__item'>
                    <div className='list__heading'>
                        <h4>Making internship count</h4>
                    </div>
                    <div className='list__body'>    
                        <p> 
                        <span>1 Day ago</span>
                        <span>606    readers</span>
                        </p>
                    </div>
                </li>
                <li className='list__item'>
                    <div className='list__heading'>
                        <h4>Assets abroad attract indians</h4>
                    </div>
                    <div className='list__body'>    
                        <p> 
                        <span>2 Day ago</span>
                        <span>850 readers</span>
                        </p>
                    </div>
                </li>
                
                <li className='list__item'>
                    <div className='list__heading'>
                        <h4>Air india to hire thousands</h4>
                    </div>
                    <div className='list__body'>    
                        <p> 
                        <span>19 hours ago</span>
                        <span>6380 readers</span>
                        </p>
                    </div>
                </li>
                <li className='list__item'>
                    <div className='list__heading'>
                        <h4>Funding and founding India's Unicorn </h4>
                    </div>
                    <div className='list__body'>    
                        <p> 
                        <span>19 hours ago</span>
                        <span>768 readers</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="sidebar__footer">
            <div className='sidebar__footer__content'>
                <p>Show more</p>
                <ArrowDropDownIcon/>
            </div>
        </div>
    </div>
  )
}

export default RightSidebar