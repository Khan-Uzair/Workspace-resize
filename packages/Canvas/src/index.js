import * as React from "react";
import classNames from 'classnames';
import { StyledCanvas } from "./styled";



function Canvas({children, className, ...props}) {

    return (
        <StyledCanvas className={classNames('invent-canvas', className)} {...props}>
          {children}
        </StyledCanvas>
      );
}

export default Canvas;
