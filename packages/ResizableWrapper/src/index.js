import { StyledResizableWrapper } from "./styles";
import React from 'react';
import classNames from 'classnames';
import {ResizeIcon} from "@invent/icons";


export class ResizableWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false,
      panelWidth: props.children.props.width,
      delta: 0
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.resizePanel)
    window.addEventListener('mouseup', this.stopResize)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.resizePanel)
    window.removeEventListener('mouseup', this.stopResize)
  }

  startResize = (event) => {
    this.setState({
      isDragging: true,
      initialPos: event.clientX
    })
  }

  limitWithin(val, min, max) {
    return val < min ? min : (val > max ? max : val);
  }

  stopResize = () => {
    const { isDragging, panelWidth, delta } = this.state;
    if (this.state.isDragging) {
      const { children } = this.props;
      const { minWidth, maxWidth } = children.props;
      const panelWidthCalculated = this.limitWithin(panelWidth + delta, minWidth, maxWidth);
      this.setState(({ panelWidth, delta }) => ({
        isDragging: false,
        panelWidth: panelWidthCalculated,
        delta: 0
      }), () => {
        // if(this.props.onResizeEnd) {
        //        this.props.onResizeEnd(panelWidthCalculated);
        //       }
      })
  }
}

  resizePanel = (event) => {
    if (this.state.isDragging) {
      const { children } = this.props;
      const { minWidth, maxWidth, resizeDir } = children.props;
      const delta = (resizeDir === "right") ? event.clientX - this.state.initialPos : this.state.initialPos - event.clientX;
      const panelWidth = this.limitWithin(this.state.panelWidth + this.state.delta, minWidth, maxWidth)
      this.setState(() => ({
                delta: delta,
            }), () => {
              // if(this.props.onResizeEnd) {
              //  this.props.onResizeEnd(panelWidth);
              // }
              if(this.props.onResizeProgress) {
                this.props.onResizeProgress(panelWidth);
              }
          }
      );   
    }
  }

  render() {
    let { panelWidth, delta, isDragging } = this.state;
    const { children, className } = this.props;
    const { minWidth, maxWidth, resizeDir, isPanelOpen } = children.props;
    panelWidth = this.limitWithin(panelWidth + delta, minWidth, maxWidth);
    const panel = React.cloneElement(this.props.children, { width: isPanelOpen ? panelWidth: 0 });
    return (
      <StyledResizableWrapper resizeDir={resizeDir} width={isPanelOpen ? panelWidth: 0} isDragging={isDragging} className={classNames('invent-resizable-wrapper', className)}>
        {panel}
        <ResizeIcon 
          onMouseDown={(e) => this.startResize(e)}
          align={resizeDir}
        >
        </ResizeIcon>
      </StyledResizableWrapper>
    )
  }
}