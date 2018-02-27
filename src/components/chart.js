import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return(
    <div>
      <Sparklines svgHeight={120} svgWidth={280} data={props.data}>
        <SparklinesLine color={props.color}></SparklinesLine>
            <SparklinesReferenceLine type="avg"/>
            <div>
              {average(props.data)} {props.units}
            </div>
        </Sparklines>
    </div>
  );
}
