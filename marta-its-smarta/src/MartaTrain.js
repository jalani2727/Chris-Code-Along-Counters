import React from 'react';


class MartaTrain extends React.Component{
    render() {
        return(
        <div className="train">
            <h1>
                <ul>
                    <li>{this.props.train.DESTINATION}</li>
                    <li>{this.props.train.LINE}</li>
                    <li>{this.props.train.DIRECTION}</li>
                    <li>{this.props.train.WAITING_TIME}</li>
                </ul>
            </h1>
        </div>

        )}
}



export default MartaTrain;