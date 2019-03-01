import React from 'react';

const Listing = ({arrObj}) => {

    const renderArray = () => {
        const {type, location, title} = arrObj[0];
        return (
            <div>
            <p>Title: {title}</p>
            <p>Type: {type}</p>
            <p>
            Location: {location.city},
            {location.state},
            {location.country}
            </p>
            </div>
        )
    }

    return (
        <>
        {renderArray()}
        </>

    );
}

export default Listing;
