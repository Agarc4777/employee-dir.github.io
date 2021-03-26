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
          <th>Phone Number</th>
          {/* <th></th> */}
        </tr></thead>
        <tbody>
          {props.users.map((user) => (<tr>
            <td>
              <h4 class="ui image header">
                <img src={user.picture.thumbnail} class="ui mini rounded image"/>
                <div class="content">
                </div>
            </h4></td>
            <td>
              {user.name.first}
            </td>
             <td>
              {user.name.last}
            </td>
            <td>
              {user.email}
            </td>
             <td>
              {user.phone}
            </td>
          </tr>))};
        </tbody>
      </table>
     )
 }

export default Results;