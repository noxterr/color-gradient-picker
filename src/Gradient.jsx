import React from 'react'

function Gradient({ color, ...props}) {


    const style = {
        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        padding: "2rem",
        textAlign: "center"
    }

    return <div style={style}>
                <p>
                    <strong>
                        Color RGB({color[0]} {color[1]} {color[2]})
                    </strong>
                </p>
            </div>

}

export default Gradient
