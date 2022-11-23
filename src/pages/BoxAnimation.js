import React, { useState } from 'react'
import { Input } from '../components/Input';
import { motion } from 'framer-motion';
import "../css/boxAnimation.css"

const initialValues = {
    x: 0,
    y: 0,
    opacity: 100,
    borderWidth: 4,
    scale: 100,
    rotate: 0,
}

const BoxAnimation = () => {
    const [x, setX] = useState(initialValues.x);
    const [y, setY] = useState(initialValues.y);
    const [opacity, setOpacity] = useState(initialValues.opacity);
    const [borderWidth, setBorderWidth] = useState(initialValues.borderWidth);
    const [scale, setScale] = useState(initialValues.scale);
    const [rotate, setRotate] = useState(initialValues.rotate);

    const reset = () => {
        setX(initialValues.x);
        setY(initialValues.y);
        setOpacity(initialValues.opacity);
        setBorderWidth(initialValues.borderWidth);
        setScale(initialValues.scale);
        setRotate(initialValues.rotate);
    }

    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className='flex flex-wrap justify-center items-center'>
                <div className=''>
                    <motion.div
                        className="box"
                        animate={{ x, y, rotate, scale: scale / 100, opacity: opacity / 100 }}
                        transition={{ type: "spring" }}
                        style={{ borderWidth }}
                    />
                </div>

                <div className="m-12">
                    <Input value={x} set={setX}>
                        x
                    </Input>
                    <Input value={y} set={setY}>
                        y
                    </Input>
                    <Input value={rotate} set={setRotate} min={-180} max={180}>
                        rotate
                    </Input>

                    <Input value={scale} set={setScale} min={50} max={150}>
                        scale
                    </Input>
                    <Input value={opacity} set={setOpacity} min={20} max={100}>
                        opacity
                    </Input>
                    <Input value={borderWidth} set={setBorderWidth} min={1} max={10}>
                        border
                    </Input>

                </div>
                <button className="bg-pink hover:opacity-90 text-white font-bold py-2 px-4 rounded my-2" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default BoxAnimation