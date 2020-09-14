import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Instructions.scss"

import a from '../../../../../img/instruction/1.png';
import b from '../../../../../img/instruction/2.png';
import c from '../../../../../img/instruction/3.png';
import d from '../../../../../img/instruction/4.png';
import e from '../../../../../img/instruction/5.png';
import f from '../../../../../img/instruction/6.png';
import g from '../../../../../img/instruction/7.png';
import h from '../../../../../img/instruction/8.png';
import i from '../../../../../img/instruction/9.png';
import j from '../../../../../img/instruction/10.png';

export default class Instructions extends Component {
    render() {
        return (
            <div className="instructionContainer">
                 <div id="goBackBtnId" >
                    <button className="goBackBtn" type="button" >
                        <Link to="/test" ><i class="fas fa-times"></i> </Link></button>
                </div>
                <div className="insttructionContent">
                    <img className='img-a img' src={a} alt="image" />
                    <img className='img-b img' src={b} />
                    <img className='img-c img' src={c} />
                    <img className='img-d img' src={d} />
                    <img className='img-e img' src={e} />
                    <img className='img-f img' src={f} />
                    <img className='img-g img' src={g} />
                    <img className='img-h img' src={h} />
                    <img className='img-i img' src={i} />
                    <img className='img-j img' src={j} />
                </div>
                {/* <Link to="/test" > test </Link> */}
            </div>
        )
    }
}
