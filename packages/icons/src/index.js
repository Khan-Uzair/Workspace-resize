import React from "react";
import { StyledResizeIcon, StyledMenuIcon, StyledCloseIcon, StyledAnalysisIcon } from "./styles";
export const ResizeIcon = ({
  fill = "#FFF",
  viewBox = "0 0 20 20",
  onMouseDown,
  align
}) => (
  <StyledResizeIcon
    xmlns="http://www.w3.org/2000/svg"
    onMouseDown={onMouseDown}
    align={align}
    viewBox={viewBox}
  >
    <g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 20 0)">
      <circle cx="10" cy="10" r="10" fill="#007EB3" />
      <path fill={fill} d="M15 10l-3 3V7zM5 10l3 3V7z" />
    </g>
  </StyledResizeIcon>
);

export const SettingsIcon = props => {
  return (
    <StyledMenuIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="1.2">
          <path d="M14.5 11a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
          <path d="M8.875 20.5a3.577 3.577 0 0 0-3.582-3.252c-.516 0-1.025.11-1.493.32l-2.111-3.641A3.61 3.61 0 0 0 3.198 11a3.569 3.569 0 0 0-1.521-2.918l2.128-3.664c.475.216.989.33 1.513.33a3.578 3.578 0 0 0 3.557-3.244l4.25-.004a3.575 3.575 0 0 0 1.777 2.772 3.631 3.631 0 0 0 3.298.16l2.111 3.641a3.613 3.613 0 0 0-1.509 2.928 3.569 3.569 0 0 0 1.52 2.917l-2.127 3.664a3.65 3.65 0 0 0-1.513-.33 3.576 3.576 0 0 0-3.556 3.244l-4.251.004z" />
        </g>
      </svg>
    </StyledMenuIcon>
  );
};

export const CloseIcon = props => {
  return (
    <StyledCloseIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="1.2">
          <path d="M1 1l14 14M15 1L1 15" />
        </g>
      </svg>
    </StyledCloseIcon>
  );
};

export const FiltersIcon = props => {
  return (
    <StyledMenuIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="19"
        viewBox="0 0 16 19"
        
      >
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M4.5 0a2.5 2.5 0 012.45 2H16v1H6.95a2.5 2.5 0 01-4.9 0H0V2h2.05A2.5 2.5 0 014.5 0zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11.5 7a2.5 2.5 0 012.45 2H16v1h-2.05a2.5 2.5 0 01-4.9 0H0V9h9.05a2.5 2.5 0 012.45-2zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7.5 14a2.5 2.5 0 012.45 2H16v1H9.95a2.5 2.5 0 01-4.9 0H0v-1h5.05a2.5 2.5 0 012.45-2zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </g>
      </svg>
    </StyledMenuIcon>
  );
};

export const StarIcon = props => {
  return (
    <StyledMenuIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="23"
        viewBox="0 0 24 23"
      >
        <path
          fill="none"
          fill-rule="evenodd"
          stroke="#FFF"
          stroke-linejoin="round"
          d="M12 16.67L4.947 21.708 7.559 13.443 0.587 8.292 9.255 8.222 12 0 14.745 8.222 23.413 8.292 16.441 13.443 19.053 21.708z"
        />
      </svg>
    </StyledMenuIcon>
  );
};

export const AddIcon = props => {
  return (
    <StyledMenuIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="1.2">
          <path d="M0 9L18 9M9 0L9 18" />
        </g>
      </svg>
    </StyledMenuIcon>
  );
};

export const AnalysisIcon = props => {
  return (
    <StyledAnalysisIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="15"
        viewBox="0 0 17 15"
      >
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M0 11H1.5V15H0zM5 0H6.5V15H5zM10 5H11.5V15H10zM15 9H16.5V15H15z" />
        </g>
      </svg>
    </StyledAnalysisIcon>
  );
};
