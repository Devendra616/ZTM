import React from 'react';

const Card = (props) =>{
    const {name,email,id} = props; //destructuring 
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
            <img src={`http://www.robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>    
    );
}

export default Card;