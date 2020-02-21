import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';
import { render } from 'react-dom';

export default class ChartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      parsedData : []
     
    }
  }
  async componentDidMount() {
		let data = await axios.get('http://18.216.242.3/hctestr')
      .then(res => res.data)
      .catch(err => {
        return err;
    })

    let parsedData = []
    data.forEach(element => {
    parsedData.push({
    name: element._index,
    y: element.proba_1_long
      });
    });

    console.log(parsedData)
    this.setState({ parsedData })
    console.log(this.state.parsedData)
		
  }

render() {

  const options = {
    title: {
      text: 'My stock chart'
    },
    series: [{
      data: this.state.parsedData
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



