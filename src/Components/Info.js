import React from 'react'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';

const Info = () => {

    return (
      <div>
        <h2 className="font">Aldridge School Girls Blazer</h2>
        <div>
          <p className="fontL">£29.99</p>
          <a>
            <InsertChartOutlinedIcon className="fontL" />
            Compare Prices
          </a>
        </div>
      </div>
    );
};

export default Info;