import React from 'react';
import './App.css'
import { SliderPicker  } from 'react-color';
import { invoke } from '@tauri-apps/api/tauri'
import Gradient from './Gradient'


function App() {

    const [color, setColor] = React.useState('#1fa9f4')
    const [gradient, setGradient] = React.useState([])

    return  <div>
        <SliderPicker
            color = {color}
            onChange = {
                (color, event) => {
                    setColor(color)
                    invoke("generate_gradient", color.rgb).then((grad) => {
                        setGradient(grad)
                    })
                }
            }
        />
        {gradient.map((color, i) => (
            <Gradient
                key = {i}
                color={color}
            />
        ))}
    </div>
}

export default App
