import {memo, useEffect} from "react";
import style from './General.module.css';

export const ImagePage = memo(({ws}) => {

    const draw = (data) => {
        const canvas = document.getElementById('example');
        const ctx = canvas.getContext('2d')
        const pic = ctx.createImageData(data.width, data.height);
        pic.data.set(data.imgData);
        ctx.putImageData(pic, 0, 0);

        // for (let i = 0; i < pic.data.length; i++) {
        //     let x = (i % 400) / 400 * 255;
        //     let y = Math.ceil(i / 100) / 100 * 255;
        //
        //     pic.data[i + 0] = x;
        //     pic.data[i + 1] = y;
        //     pic.data[i + 2] = 255 - x;
        //     pic.data[i + 3] = 255;
        // }
        // ctx.putImageData(pic, 0, 0)

        // const pixel = new Uint8ClampedArray()
    }

    useEffect(() => {
        ws.getImage().then(res => {
            draw(res)
        })
    }, [ws])

    return (
        <div className={style.imageBox}>
            <canvas width='648' height='488' id="example" className={style.canvas}></canvas>
        </div>
    )
})

