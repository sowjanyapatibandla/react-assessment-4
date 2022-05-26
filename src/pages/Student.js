import React from "react";
import './student.css'
function Student(){
    return(
        <>
        <h1>Student's Record</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Roll no</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>sowjanya</td>
                <td>01</td>
                <td>react developer</td>
            </tr>
            <tr>
                <td>satwika</td>
                <td>02</td>
                <td>frontend web developer</td>
            </tr>
            <tr>
                <td>deccika</td>
                <td>03</td>
                <td>full stack developer</td>
            </tr>
            <tr>
                <td>navya</td>
                <td>04</td>
                <td>full stack developer</td>
            </tr>
        </table>
        </>
    );
}
export default Student;
