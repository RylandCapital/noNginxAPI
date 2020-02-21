import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

let data = await axios.get('http://18.216.242.3/hctestr')
  .then(res => res.data)
  .catch(err => {
    return err;
})
let parsedData = []
data.forEach(element => {
  parsedData.push({
    name: element.yearmonth,
    y: element.sales
  });
});

console.log(data)
this.setState({ data })




