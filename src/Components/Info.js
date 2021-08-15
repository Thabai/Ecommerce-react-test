import React from 'react'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import styled from 'styled-components';

const Info = () => {

    return (
      <div>
        <h2 className="font">Aldridge School Girls Blazer</h2>
        <Price>
          <P className="fontL">£29.99</P>
          <a>
            <InsertChartOutlinedIcon className="fontL" />
            Compare Prices
          </a>
        </Price>
      </div>
    );
};

export default Info;

const Price = styled.div`
display: flex;
padding-bottom: 20px;
`

const P = styled.p`
padding-right: 10px;
`