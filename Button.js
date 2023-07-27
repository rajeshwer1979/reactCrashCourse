import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    // const onClick = (e) => {
    //     console.log(e);
    // }

    return <button  
    onClick={onClick}
    style={{backgroundColor: color, float:'right', borderRadius:4, border:0, color:'#ffffff', marginLeft:10}}>{text}</button>

}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button