import React, {Component} from 'react';
import axios from 'axios';
import Earth from './multi-component/Earth';
import Gio from 'react-giojs';

class App extends Component {

    constructor() {
        super();

        this.state = {
            data: [
                {
                    "e": "CN",
                    "i": "US",
                    "v": 3300000
                }
            ],
            width: 1000,
            height: 1000,
            surfaceColor: 0xFF0000,
            selectedColor: null,
            halo: true,
            setAutoRotation: true
        };

        /**

        setTimeout(() => {
            this.setState({
                data: [
                    {
                        "e": "CN",
                        "i": "US",
                        "v": 3300000
                    }
                ]
            });
        }, 3000);

        setTimeout(() => {
            this.setState({forceSwitchCountry: "US"});
        }, 5000);

        setTimeout(() => {
            this.setState({
                surfaceColor: 0x00FF00,
                selectedColor: 0x0000FF
            });
        }, 5000);

        setTimeout(() => {
            this.setState({
                halo: false
            });
        }, 7000);
         */
    }

    componentDidMount() {
        // fails
        /**
        axios.get(`http://127.0.0.1:10000/var/www/manager_project/frontend-react/src/data/countryData.json`)
            .then(response => this.setState({data: response.data}))
         */
    }

    render() {
        const config = {
            control: {
                halo: this.state.halo
            },
            color: {
                surface: this.state.surfaceColor,
                selected: this.state.selectedColor
            }
        };

        console.log(this._controller);
        console.log(Gio);

        return (
            <Gio width={this.state.width}
                 height={this.state.height}
                 data={this.state.data}
                 forceSwitchCountry={this.state.forceSwitchCountry}
                 setAutoRotation={this.state.setAutoRotation}
                 configs={config}
            />
        )
    }
}

export default App;