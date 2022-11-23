import React, { useState } from 'react'
import { Input } from '../components/Input';
import { motion } from 'framer-motion';
import "../css/boxAnimation.css"


const BoxAnimation = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [scale, setScale] = useState(100);
    const [rotate, setRotate] = useState(0);

    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className='flex flex-wrap justify-center items-center'>
                <div className=''>
                    <motion.div
                        className="box"
                        animate={{ x, y, rotate, scale: scale / 100 }}
                        transition={{ type: "spring" }}
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
                </div>
            </div>
        </div>
    )
}

export default BoxAnimation