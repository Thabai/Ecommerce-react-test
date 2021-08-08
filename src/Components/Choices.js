import React, {useState} from 'react'
import { withStyles } from "@material-ui/core/styles";
import {  blue, grey, red } from "@material-ui/core/colors";
import styled from 'styled-components';
import Radio from "@material-ui/core/Radio";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import StraightenOutlinedIcon from "@material-ui/icons/StraightenOutlined";
import '../App.css';

const Choice = () => {
  const [value, setValue] = useState("Black");
  const [size, setSize] = useState('28');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

   const handleSize = (event, newSize) => {
    setSize(newSize);
  };


  return (
    <div>
      <div>
        <Name>
          <H3>Colour </H3>
          <h4> -{value}</h4>
        </Name>
        <BlackRadio
          checked={value === "Black"}
          onChange={handleChange}
          value="Black"
        />
        <BlueRadio
          checked={value === "Blue"}
          onChange={handleChange}
          value="Blue"
        />
        <RedRadio
          checked={value === "Red"}
          onChange={handleChange}
          value="Red"
        />
      </div>
      <div>
        <H3>Size </H3>
        <ToggleButtonGroup value={size} exclusive onChange={handleSize}>
          <ToggleButtons value="28">28</ToggleButtons>
          <ToggleButtons value="29">29 </ToggleButtons>
          <ToggleButtons value="30">30</ToggleButtons>
          <ToggleButtons value="31" disabled>
            31
          </ToggleButtons>
          <ToggleButtons value="32" disabled>
            32
          </ToggleButtons>
          <ToggleButtons value="33">33</ToggleButtons>
          <ToggleButtons value="34">34</ToggleButtons>
          <ToggleButtons value="35" disabled color="text.disabled">
            35
          </ToggleButtons>
        </ToggleButtonGroup>
        <a>
          <StraightenOutlinedIcon className="fontL" /> Size Guide
        </a>
      </div>
    </div>
  );
};


export default Choice;

const BlackRadio = withStyles({
  root: {
    color: grey[800],
    background: grey[800],
    "&$checked": {
      color: grey[50],
      background: grey[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BlueRadio = withStyles({
  root: {
    color: blue[800],
    background: blue[800],
    "&$checked": {
      color: blue[50],
      background: blue[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
  root: {
    color: red[800],
    background: red[800],
    "&$checked": {
      color: red[50],
      background: red[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const ToggleButtons = withStyles({
  root: {
    color: blue[800],
  },
  value: {},
})((props) => <ToggleButton {...props} />);

const Name = styled.div`
display: flex;
`
const H3 = styled.h3`
  text-transform: uppercase;
  padding-right: 5px;
  color: #264f9d;
`;

