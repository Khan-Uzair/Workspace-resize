import styled from 'styled-components';
import { primaryTescoBlue, backgroundColor, white } from '../../../constants';

export const StyledTableContainer = styled.div`
	position: relative;
`;

export const StyledTableWrapper = styled.div`
  font-family: ${props => props.theme.fontFamily.text};
  height: 80vh;
  margin: 0 auto;
  overflow-y: auto;
  &.set-custom-rc-wrapper{
    height: auto;
  }  
  .responsive-table td, table td * {
    vertical-align: top;
  }
  .responsive-table {
    width: auto;
    border: 1;
    table-layout: fixed;
    margin: 0 auto;
    padding: 0;
    border-collapse: seperate;
    border-spacing: 0;
    box-shadow: -1px 1px 3px 4px rgba(221,221,221,0.66);    
    &.sticky-first-col {
      tr {
        td:first-child {
          position:sticky;
          left: -1px;
          z-index: 1;
        }
        th:first-child {
          position:sticky;
          left: -1px;
          top: -1;
          z-index: 3;
        }
        &:first-child{
          th{
            z-index: 2;
            &:first-child{
              z-index: 4 !important;
            }
          }
        }
      }      
      .checkbox div:first-child:after {
        content: '';
        display: inline-block;
        position: absolute;
        height: 40px;
        width: 1px;
        background: #ddd;
        top: 0;
        right: -1px;
      }      
      @media screen and (max-width: 600px) {
        tr {
          td:first-child {    
            z-index: 0;
          }
          td:nth-child(2) {
            z-index: 0 !important;
          }
        }
      }
    }    
    tr, td, th {
      box-sizing: border-box;
    }
    thead {
      visibility: hidden;
      background: #ffffff;
    }
    tr {
      border: 1px solid #ddd;
      border-bottom: 2px solid #ddd;
      padding: 5px;
      margin-bottom: 10px;
      display: block;
    }
    th, td {
      padding: 10px;
      text-align: left;
      background: #ffffff;
      border: 1px solid #ddd;
    }
    th {
      font-size: 14px;
    }    
    td {
      display: block;
      text-align: right;
      font-size: 12px;
      border: 1px solid #ddd;
      color: #666666;
      font-family: "TESCO Modern",Arial,sans-serif;    
      &:last-child {
        border-bottom: none;
      }
      &.open-action-menu {
        z-index: 2 !important;
      }
      .col-data-full {
        .actions-menu {
          display: inline-block;
          float: right;
        }
      }
    }
    tr {
      &:nth-child(1) {
        .header-style {
          border-bottom: 1px solid #fff;
          padding: 0 10px;
          background: #fff;
          height: 40px;
          position: relative;
          &.sticky-header {
            position: sticky;
          }
        }
      }
      &:nth-child(2), &:nth-child(3) {
        .header-style{
          padding: 2px 10px;
          border-top: 1px solid #fff;
          line-height: 0;          
        }
      }
    }
    tfoot, tfoot th, tfoot td {
      position: -webkit-sticky;
      position: sticky;
      bottom: 0;
    }
    .sticky-header {
      position: sticky;
      top: -1px;
    }
    .header-style {
      font-size: 14px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      color: #333333;
      border: 1px solid #dddddd;
      background-color: #ffffff;
      height: 52px;
    }
    .sticky-subheader-top {
      top: 39px;
    }
    .subheader {
      background-color: #ffffff;
      height: 40px;
      font-size: 12px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      border: 1px solid #dddddd;
      z-index: 1;
      color: #333333;
    }
    .sticky-col:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 0;
      background: #ddd;
      right: -3px;
      border-right: 3px solid #ddd;
      top: 0;
    }
    .sticky-border:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 0;
      background: #ddd;
      right: -3px;
      border-right: 3px solid #ddd;
      top: 0;
    }
    .no-right-border {
      border-right: none;
    }
    .no-left-border {
      border-left: none;
    }
    .tpnb-description-column{
      display: flex;
    }
    .tpnb-column{
      width: 65px;
      color: #666666;
      font-weight: normal;
      margin-right: 10px;
    }
    .tpnb-wrapper {
      display: flex;
      width: 95%;
      text-align: left;
    }
    .checkbox {
      width: 42px;      
      position: sticky;
      left: 0;
      background-color: #ffffff;
      z-index: 2;
    }
    @media screen and (min-width: 600px) {
      thead {
        visibility: visible;        
      }
      tr {
        display: table-row;        
        margin-bottom: 0;
      }
      td {
        display: table-cell;
        text-align: left;
        font-size: 12px;
        border-bottom: none;
      }
      &:before {
        content: "";
        display: none;
      }
      .non-sticky-col {        
        z-index: 2;        
      }
    }
    @media screen and (max-width: 600px) {
      width: calc(100% - 24px);
      border: none;
      box-shadow: none;
      margin: 15px auto;
      min-width: auto !important;
      thead {
        display: none;        
      }
      .tpnb-description-column{
        text-align: left;
        flex-direction: column;
      }
      .tpnb-column{
        margin-right: '0px';
        text-align: left;
      }
      .range-val {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          text-align: left;
        }
        &.with-data {
          margin-top: 7px;
          display: inline-block;
          width: 30%;
          text-align: right;
          div {
            flex-flow: row-reverse;
          }
        }
        .actions-menu {
          margin-top: auto;
        }
      }
      .col-data-resp {
        text-align: left;
        padding: 0px 12px;
        .sub-col-hdr-val{
          margin-top: 0px;
        }
        .resp-hdr {
          text-align: left;
          &.sub-col-hdr{
            width: calc(100% - 30%);
            float: left;
          }
          &.with-checkbox {
            padding-left: 32px;
            &.sub-col-hdr {
              margin-top: 3px;
              display: inline-block;
              width: 70%;
              box-sizing: border-box;
            }
          }
          &.main-col-hdr {
            margin-top: 7px;
            font-weight: bold;
            &.main-sub-hdr {
              display: inline-block;
              width: 70%;
            }
            &.with-checkbox {
              /* width: calc(100% - 150px); */
              box-sizing: border-box;
            }
          }
        }
      }
      tbody tr{
        padding: 0 0 16px 0;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
        background: ${white};
        td {
          padding: 0;
          width: 100% !important;
          border: none;
          &.checkbox-td {
            width: 44px !important;
            border: none !important;
            border-bottom: 1px solid #ddd !important;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 56px;
            padding: 0;
          }
          &.first-data-col {
            border: none !important;
            border-bottom: 1px solid #ddd !important;
            padding: 0 !important;
            display: inline-flex;
            height: 56px;
  
            width: 100%;
            align-items: center;
  
            .col-data-resp {
              width: 100%;
              padding: 0 0 0 15px;
            }
          }
  
          &.with-checkbox-first-col {
            align-items: center;
            justify-content: center;
            .col-data-resp {
              padding: 0 !important;
            }
          }
          &:before{
            display: none;
          }
        }
      }
      tfoot {
        display: none;
      }
      .tpnb-wrapper {
        flex-direction: column;
      }
    }
    @media screen and (max-width: 600px) {
      background: ${backgroundColor};
    }
  }
  .footer {
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    border: 1px solid #dddddd;
    color: #333333;
    &:before {
    content: '';
    position: absolute;
    top: -1px;
    height: 1px;
    background: #ddd;
    width: 100%;
    left: 0;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 37px;
    height: 1px;
    background: #ddd;
    width: 100%;
    left: 0;
  }  
`;

export const temp = 'temp';

export const StyledDerangeAction = styled.div`
  position: fixed;
  bottom: 25px;
  width: 290px;
  z-index: 2;
  .selected-checkbox-chip {
    background: ${primaryTescoBlue};
    color: #fff;
    height: 32px;
    display: inline-flex;
    align-items: center;
    border-radius: 25px;
    padding: 0 5px;
    margin: 0 15%;
    font-size: 12px;
    .remove-selected {
      cursor: pointer;
      display: flex;
    }
    .label, .remove-selected  {
      padding-left: 5px;
    }
    .action-btn {
      border: 1px solid #ccc;
      border-radius: 50%;
      display: flex;
      margin-left: 5px;
      button {
        transform: none;
      }
      ul {
        top: -75px;
      }
    }
  }
`;

export const StyledCheckboxWrapper = styled.div`
  margin-right: 20px;
  position: relative;
  display: inline-block;
  float: left;
  &:after{
    content: '';
    position: absolute;
    right: -10px;
    height: calc(100% + 20px);
    background: #ddd;
    width: 1px;
    top: -10px;
  }
  @media screen and (max-width: 600px){
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    margin-right: 12px;
    &:after{
      background: transparent;
    }
  }
`;

export const StyledEllipsis = styled.div`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;