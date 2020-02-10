import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import axios from 'axios';
import { TypeChooser } from "react-stockcharts/lib/helper";



export default class ChartComponent extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:5000/spxml')
		.then((res) => {
			
			let values = res.data
			let data = values.map((obj) => {
				let date = obj.long__index
				obj.date = new Date(date)
				obj.close = obj.long_short_proba
				obj.open = obj.long_short_proba
				obj.high = obj.long_short_proba
				obj.low = obj.long_short_proba
				obj.volume = 0
				return obj
				
			})
			
			this.setState({ data })
		})
		
	}


	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<div>
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
			
			<h3>Latest Signal</h3>
			<table className="table">
			<thead className="thead-light">
				<tr>
				<th>Date</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
			</table>  	
			</div>
		)
	}
}

render(
	<ChartComponent />,
	document.getElementById('root')
);

        
      
 

