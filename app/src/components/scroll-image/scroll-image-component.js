import React from 'react';

const ScrollImageComponent = ({ data }) => {

    console.log(data);
    return (
        <div className="border-red flex-column">
            {
                data.map(element => {
                    return (<div key={element._id} className="flex-center"><img className="half" src={element.images.medium} srcSet={`${element.images.small} 400w, ${element.images.medium} 700w, ${element.images.large} 1000w`} alt={element.title} sizes="50vw"/></div>)
                })
            }
        </div>
    );
};

export default ScrollImageComponent;