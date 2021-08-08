import React from "react";
import styled from 'styled-components';

const Titlenav = () => {

    return (
    <Links>
        <a>Home /</a>
        <a> Shop by school /</a>
        <a> Aldridge school</a>
    </Links>
    )
};

export default Titlenav;

const Links = styled.div`
text-transform: uppercase;
`
