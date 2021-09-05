import classNames from "classnames";
import PropTypes from "prop-types";

function Button ({className,outline,children,onClick}) {
    return(
        <button
            onClick={onClick}
        className={classNames('button',className,{
            'button-outline':outline,
        })}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick:PropTypes.func
}

export default Button