import React from "react"


const Table=(props)=>{

    const getKeys = () => {
        return Object.keys(props.data[0]);
      }
    
      const getHeader = () => {
        let keys = getKeys();
        return keys.map((key, index) => {
          return <th key={key}>{key.replace(/[^a-zA-Z ]/g, "")}</th>
        })
      }
      const RenderRow = (props) => {
        return props.keys.map((key, index) => {
          return <td key={props.data[key]}>{props.data[key]}</td>
        })
      }
      const getRowsData = function () {
        var items =props.data;
        var keys = getKeys();
        return items.map((row, index) => {
          return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
    
        })
      }

 return(
            <table class="table">
            <thead>
                <tr>
               {getHeader()}
              
                </tr>
            </thead>
            <tbody>
               
               {getRowsData()}
            </tbody>
            </table>

    )
}

export default Table;