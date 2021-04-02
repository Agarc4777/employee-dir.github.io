// import react
import React from "react";
const styles = {
    table:{width:'100%',}
} 

function Results(props) {
  const i = (props.sortedUsers.length);
  const sortEmps = () => {
    const sortedResults =
        props.sortedUsers.sort(function (a, b) {
            if (a.name.first < b.name.first) { return -1; }
            if (a.name.first > b.name.first) { return 1; }
            return 0;
        });
    console.log(sortedResults);
    props.setsortedUsers(sortedResults);
  };
     return(
        <table class="ui very basic collapsing celled table" style={styles.table}>
        <thead>
          <tr>
            <th>Employee</th>
            <button onClick={sortEmps}><th>First Name</th></button>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {props.sortedUsers.map((user) => (<tr>
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