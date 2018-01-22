import React, { Component } from 'react'

import { getUpdates } from '../../api/updates'
import { getMushers } from '../../api/mushers'

import DashboardLineChart from '../Charts/DashboardLineChart'
import { MushersContainer } from '../MushersContainer/index'
import ProgressBarChart from '../Charts/ProgressBarChart'
import { TableContainer } from '../TableContainer/index'
import TimerContainer from '../TimerContainer/index'

export default class CurrentRacePage extends Component {    
    state = {
        tableData: null,
        mushers: null
    }

    headings = [ 
        'Status', 
        'Name', 
        'Bib', 
        'Start', 
        'Fortymile In', 
        'Fortymile Out', 
        'Eagle In', 
        'Eagle Out', 
        'Fortymile In', 
        'Fortymile Out', 
        'Finish', 
        'Total Run Time' 
    ]
  
    componentDidMount = () => {
        getUpdates().then((res) => {
            this.setState({ tableData: res })
        })
        getMushers().then((res) => {
            this.setState({ mushers: res })
        })
    }

    render = () => {
        return (
            <main className="dashboard">
                <TimerContainer />

                <ProgressBarChart title="Progress Bar Chart" />
                
                <div class="outer-wrapper">
                    {!!this.state.mushers && <MushersContainer mushers={this.state.mushers} year={'2017'} race={'Percy' }/>}
                </div>

                <DashboardLineChart title="Race Progress Chart" />

                <div class="outer-wrapper">
                    {!!this.state.tableData && <TableContainer tableClass={'live-data'} tableData={this.state.tableData} year={'2017'} race={'Percy'} /> }
                </div>
            </main>
        )
    }
}


