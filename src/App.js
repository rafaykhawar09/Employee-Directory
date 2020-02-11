import React, { Component } from "react";
import API from "../src/utils/API";
import Table from "../src/components/Table"
import Search from "../src/components/Search"

function compare(a, b) {
     const employeeA = a.name.first.toUpperCase();
     const employeeB = b.name.first.toUpperCase();

     let comparison = 0;
     if (employeeA > employeeB)
          comparison = 1;

     else if (employeeA < employeeB)
          comparison = -1;

     return comparison;
}

function filterEmployees(search) {

     return function (elem) {
          return elem.name.toLowerCase().includes(search.toLowerCase()) || !search;
     }
}

class App extends Component {

     state = {
          search: "",
          result: [],
          filteredEmp: []
     };

     componentDidMount() {
          API.getEmployees()
               .then(res => {
                    let employees = res.data.results.sort(compare);
                    let myEmployees = employees.map((elem, index) => ({
                         key: index,
                         picture: elem.picture.thumbnail,
                         name: (elem.name.first + " " + elem.name.last),
                         gender: elem.gender,
                         email: elem.email,
                         cell: elem.cell
                    }))

                    return this.setState({
                         result: [...myEmployees],
                         filteredEmp: [...myEmployees]
                    })
               })
               .catch(err => console.log(err));
     }

handleInputChange = (event) => {
     const value = event.target.value;
     
     this.setState({
          search:value,
          filteredEmp: this.state.result.filter(filterEmployees(value))
     });
}

render() {
     return (
          <div className="myTable">

               <div className="title">
                    <h1>Employee Directory</h1>
               </div>

               <Search
                    result={this.state.filteredEmp}
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
               />

               <Table result={this.state.filteredEmp} />
          </div>
     )
}
};

export default App;