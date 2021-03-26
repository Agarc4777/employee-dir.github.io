// import react
import React from "react";
const styles = {
    table:{width:'100%',}
} 

function Results(props) {
     return(
        <table class="ui very basic collapsing celled table" style={styles.table}>
        <thead>
          <tr><th>Employee</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          {/* <th></th> */}
        </tr></thead>
        <tbody>
          {<tr>
            <td>
              <h4 class="ui image header">
                <img src="/images/avatar2/small/lena.png" class="ui mini rounded image"/>
                <div class="content">
                  Lena
                </div>
            </h4></td>
            <td>
              info goes here
            </td>
             <td>
              info goes here
            </td>
            <td>
              info goes here
            </td>
             <td>
              info goes here
            </td>
          </tr>}
        </tbody>
      </table>
     )
 }

export default Results;