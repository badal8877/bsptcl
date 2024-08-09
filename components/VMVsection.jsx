import React, { useState } from 'react';
import '../components/css/VMVsection.css';
import visionImage from '../public/images/VMVsection/minion.jpg';
import missionImage from '../public/images/VMVsection/mission.jpg'
import valueImage from '../public/images/VMVsection/value.jpg'

function VMVsection() {

  //Vission
  const beforeVision = (<div className='beforHover' style={{ backgroundImage: `url(${visionImage})` }}>
  </div>);
  const afterVision = (<><div className='afterHover'></div>
    <div className='hoverText'>
      <h4>Vission</h4>
      Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quae omnis maiores harum earum sunt nisi quia, deserunt perferendis vel corporis asperiores eum quam doloremque voluptatibus sapiente numquam rerum libero</div>
  </>
  );

  const beforeMission = (<div className='beforHover' style={{ backgroundImage: `url(${missionImage})` }}>
  </div>);
// Mission
  const afterMission = (<><div className='afterHover'></div>
    <div className='hoverText'>
      <h4>Mission</h4>
      Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quae omnis maiores harum earum sunt nisi quia, deserunt perferendis vel corporis asperiores eum quam doloremque voluptatibus sapiente numquam rerum libero</div>
  </>
  );

  const beforeValue = (<div className='beforHover' style={{ backgroundImage: `url(${valueImage})` }}>
  </div>);
// value 
  const afterValue = (<><div className='afterHover'></div>
    <div className='hoverText'>
      <h4>Value</h4>
      Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quae omnis maiores harum earum sunt nisi quia, deserunt perferendis vel corporis asperiores eum quam doloremque voluptatibus sapiente numquam rerum libero</div>
  </>
  );

  const [vision, setVision] = useState(beforeVision);
  const [mission, setMission] = useState(beforeMission);
  const [value, setValue] = useState(beforeValue)



  return (
    <div className='VMV'>
      <div className='vision' onMouseOver={() => { setVision(afterVision) }} onMouseOut={() => { setVision(beforeVision) }}>
        {vision}
      </div>

      <div className='mission' onMouseOver={() => { setMission(afterMission) }} onMouseOut={() => { setMission(beforeMission) }}>
        {mission}
      </div>

      <div className='value' onMouseOver={() => { setValue(afterValue) }} onMouseOut={() => { setValue(beforeValue) }}>
        {value}
      </div>
    </div>
  );
}

export default VMVsection;
