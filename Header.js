import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from "./Button";



const Header = ({title, onAdd, showAdd}) => {

    const location = useLocation()

// const onClick = (e) => {
//     console.log(e);
// }

return (
        <header className="header">
             {/* <h1>This is header</h1> */}
             {/* <h1>{props.titile}</h1> */}
            <h1 style={headingStyle}> {title}  
            {location.pathname === '/' && (
             <Button color='blue' text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> 
               
             )}
              </h1>     
        </header>
    )
}



Header.defaultProps = {
    title: 'Task Tracker'
}

Header.protoTypes = {
title: PropTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
    color:'white', 
    backgroundColor: 'gray',
    fontSize: 18,
    padding: 5,
    lineHeight:2,
}

export default Header