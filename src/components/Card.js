import React from 'react';
import 'tachyons';

// class Card extends Component {
//     render() {
//         let { id, name, email } = this.props;
//         return (
//             <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//                 <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
//                 <div>
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//             </div>
//         );
//     }
// }

// const Card = (props) => {
//     let { id, name, email } = props;
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// }

const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;