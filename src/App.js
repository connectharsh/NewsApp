import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News';
import Navbar from './components/Navabar';
export default class App extends Component {
  state = {
    progress: 10,
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <Navbar />
              <News setProgress={this.setProgress} key="general" category='general' countryName='in' pageSize={9} />
            </>} >
            </Route>

            <Route exact path="/general" element={<>
              <Navbar />
              <News  key="general" category='general' countryName='in' pageSize={9} />
            </>} >
            </Route>

            <Route exact path="/sports" element={<>
              <Navbar />
              <News  key="sports" category='sports' countryName='in' pageSize={9} />
            </>} >
            </Route>

            <Route exact path="/science" element={<>
              <Navbar />
              <News  key="science" category='science' countryName='in' pageSize={9} />
            </>} >
            </Route>

            <Route exact path="/technology" element={<>
              <Navbar />
              <News setProgress={this.setProgress} key="technology" category='technology' countryName='in' pageSize={9} />
            </>} >
            </Route>

            <Route exact path="/entertainment" element={<>
              <Navbar />
              <News  key="entertainment" category='entertainment' countryName='in' pageSize={9} />
            </>} >
            </Route>

            <Route exact path="/health" element={<>
              <Navbar />
              <News  key="health" category='health' countryName='in' pageSize={9} />
            </>} >
            </Route>

            <Route exact path="/business" element={<>
              <Navbar />
              <News  key="business" category='business' countryName='in' pageSize={9} />
            </>} >
            </Route>

          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}
