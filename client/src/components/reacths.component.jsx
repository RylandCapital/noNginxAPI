import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';
import { render } from 'react-dom';

export default class ChartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     data: []
    }
  }
  async componentDidMount() {
		let data = await axios.get('http://18.216.242.3/hctest')
      .then(res => res.data)
      .catch(err => {
        return err;
    }
    )
    
    console.log(data)
    this.setState({ data })
		
	}

render() {

  const options = {
    title: {
      text: 'My stock chart'
    },
    series: [{
      data: [this.state.data]
    }]
  }

  return(
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  ) 
  }
}

render(<ChartComponent />, document.getElementById('root'));



