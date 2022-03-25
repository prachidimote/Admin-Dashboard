import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Charts from '../../components/charts/Charts'
import {userData} from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/All/widgetLg/WidgetLg';

function Home() {
  return (
    <div className='home'>
    <FeaturedInfo/>
    <Charts data = {userData} title='User Analytics' grid dataKey='Active User'/>
    <div className='homeWidgets'>
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
  )
}

export default Home