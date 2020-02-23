import React, {Component} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import axios from 'axios';

class Mytable extends Component {

    constructor() {
        super();
        this.state={
            tableInformations :[]
        }
    }
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response=>{
                this.setState({tableInformations:response.data})
            })
            .catch(error=>{
                alert("something went wrong");
            })
    }

    render() {
        // const tableData = [  {name: "rupo", age:"29"},{name: "sunny", age:"29"},{name: "ertert", age:"29"}];
        // const col  = [ {  Header:'Name', accessor: "name" }, {  Header:'Age', accessor: "age" ];

        const tableData = this.state.tableInformations;
        const col  = [
                        {  Header:'Country Name', accessor: "name" },
                        {  Header:'Capital', accessor: "capital" },
                        {  Header:'Population', accessor: "population" }
        ];

        return (
            <div>
                <ReactTable
                    data={tableData}
                    columns={col}
                    defaultPageSize={10}
                    pageSizeOptions={[10, 20, 30, 50]}
                />
            </div>
        );
    }
}

export default Mytable;