import React, {Component} from 'react'
import axios from 'axios'
import Gio from 'react-giojs'

export default class Earth extends Gio {
    constructor(props) {
        super(props);

        this.state = {
            data: [
            ],
            width: 1000,
            height: 1000,
            surfaceColor: 0x436FB0,
            selectedColor: 0x78A6E2,
            haloColor: 0xC9E8FF,
            backgroundColor: 0x000000,
            initCountry: "JP",
            lightMentioned: true,
            disableUnmentioned: false,
            transparentBackGround: false,
            autoRotation: true,
            rotationRatio: 1,
            halo: true,
            oceanBrightness: 0.43,
            mentionedBrightness: 1,
            relatedBrightness: 0.46,
        };

        /**
        this.onCountryPicked = function(selectedCountry, relatedCountry) {
            console.log("bbbb");
            console.log(selectedCountry);
        };
         */

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

    /**
    componentDidMount() {
        // fails

        axios.get(`http://127.0.0.1:10000/var/www/manager_project/frontend-react/src/data/countryData.json`)
            .then(response => this.setState({data: response.data}))

        console.log("aaaaa");
    }
    */

    componentDidMount() {
        console.log(this.props);
        console.log(this.state);
        console.log(this._controller);
    }

    render() {
        const config = {
            control: {
                halo: this.state.halo,
                initCountry: this.state.initCountry,
                autoRotation: this.state.autoRotation,
                rotationRatio: this.state.rotationRatio,
                transparentBackGround: this.state.transparentBackGround
            },
            color: {
                surface: this.state.surfaceColor,
                selected: this.state.selectedColor,
                halo: this.state.haloColor,
                background: this.state.backgroundColor,
            },
            brightness: {
                ocean: this.state.oceanBrightness,
                mentioned: this.state.mentionedBrightness,
                related: this.state.relatedBrightness,
            }
        };

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