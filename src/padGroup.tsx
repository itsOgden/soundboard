import React from 'react'
import {Sound} from "../electron/electron";
import Pad from "./pad";


type padGroupProps = {
    title: string
    sounds: Sound[]
    outputs : string[]
    volume: number
    virtualVolume: number
}

const PadGroup : React.FunctionComponent<padGroupProps> = (props : padGroupProps) => {
    return (
    <div className="pad-group">
        {props.title !== 'default' ? <h2 className="pad-group-title">{ props.title }</h2> : ''}
        <div className="pad-group-pads">
            {props.sounds && props.sounds.map((sound, index) =>
                <Pad    key={index}
                        outputs={ props.outputs }
                        source={sound.path}
                        name={sound.filename}
                        volume={props.volume}
                        virtualVolume={props.virtualVolume}>
                </Pad>
            )}
        </div>
    </div>
    )
}

export default PadGroup
