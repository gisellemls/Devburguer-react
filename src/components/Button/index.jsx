import PropTypes from "prop-types"


import { ButtonComponets } from "./styles"


export function Button({ children, ...props }) {

    return (


        <ButtonComponets ButtonComponets {...props}> {children}</ButtonComponets >
    )


}

Button.PropTypes = {

    children: PropTypes.string.isRequired

}