import React from 'react';

export default (props) => {
    // console.log(props.info);
    const {info} = props;
    return (

        <div className='col col-4 align-top d-inline-block'>
            <img src={info['im:image'][2].label}/>
            <h3>{info['im:name'].label}</h3>
            <p>{info.summary.label}</p>
        </div>
    )
}