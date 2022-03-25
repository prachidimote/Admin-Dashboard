import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className='widgetSmList'>
          <li className='widgetSmListItem'>
            <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className='widgetSmImg'/>
            <div className='widgetSmUser'>
              <span className="widgetSmUsername">Austin Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <VisibilityIcon className='widgetSmIcon'/>
              Display
            </button>
            </li>
            
            <li className='widgetSmListItem'>
            <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className='widgetSmImg'/>
            <div className='widgetSmUser'>
              <span className="widgetSmUsername">Austin Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <VisibilityIcon className='widgetSmIcon'/>
              Display
            </button>
            </li>

            <li className='widgetSmListItem'>
            <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className='widgetSmImg'/>
            <div className='widgetSmUser'>
              <span className="widgetSmUsername">Austin Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <VisibilityIcon className='widgetSmIcon'/>
              Display
            </button>
            </li>

            <li className='widgetSmListItem'>
            <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className='widgetSmImg'/>
            <div className='widgetSmUser'>
              <span className="widgetSmUsername">Austin Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <VisibilityIcon className='widgetSmIcon'/>
              Display
            </button>
            </li>



          
        </ul>
    </div>
  )
}

export default WidgetSm