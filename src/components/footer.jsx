import React, { useEffect, useRef } from 'react';
import {motion} from 'framer-motion'

const Footer = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext("webgl");

        if (!gl) {
            console.error("WebGL не поддерживается в этом браузере.");
            return;
        }

        // Устанавливаем размер canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Получаем код шейдеров
        const vertexShaderSource = `
            attribute vec4 position;
            void main() {
                gl_Position = position;
            }
        `;

        const fragmentShaderSource = `
            #ifdef GL_FRAGMENT_PRECISION_HIGH
            precision highp float;
            #else
            precision mediump float;
            #endif

            uniform vec2 u_resolution;
            uniform float u_time;

            vec2 random2(vec2 st) {
                st = vec2(dot(st, vec2(127.1, 311.7)),
                          dot(st, vec2(269.5, 183.3)));
                return -1.0 + 2.0 * fract(sin(st) * 43758.5453123);
            }

            float noise(vec2 st) {
                vec2 i = floor(st);
                vec2 f = fract(st);
                vec2 u = f * f * (3.0 - 2.0 * f);
                return mix(mix(dot(random2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                               dot(random2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                           mix(dot(random2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                               dot(random2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution;
                float waveOffset = 0.3;
                float waveCenter = 1.0;
                float waveFocus = 0.25;
                float waveSpeed = 2.0;

                float wMin = waveCenter - waveFocus;
                float wMax = waveCenter + waveFocus;

                uv.x *= u_resolution.x / u_resolution.y;
                uv.x += 1787.74328;
                uv.y *= 2.0;

                float rn = noise(vec2(uv.x, u_time / waveSpeed));
                float ry = uv.y - rn;
                float r = smoothstep(wMin, wMax, ry);

                float bn = noise(vec2(uv.x, u_time / waveSpeed - waveOffset));
                float by = uv.y - bn;
                float b = smoothstep(wMin, wMax, by);

                float gn = noise(vec2(uv.x, u_time / waveSpeed + waveOffset));
                float gy = uv.y - gn;
                float g = smoothstep(wMin, wMax, gy);

                gl_FragColor = vec4(r, g, b, 1.0);
            }
        `;

        // Функция для компиляции шейдера
        const compileShader = (source, type) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("Ошибка компиляции шейдера:", gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        // Создание шейдерной программы
        const createProgram = (vertexShaderSource, fragmentShaderSource) => {
            const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
            const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error("Ошибка связывания программы:", gl.getProgramInfoLog(program));
                return null;
            }
            return program;
        };

        const program = createProgram(vertexShaderSource, fragmentShaderSource);
        if (!program) {
            console.error("Не удалось создать программу шейдеров.");
            return;
        }

        gl.useProgram(program);

        // Установка атрибута позиции
        const positionAttributeLocation = gl.getAttribLocation(program, "position");
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
        ]), gl.STATIC_DRAW);

        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

        // Настройка uniform-переменных
        const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
        const timeUniformLocation = gl.getUniformLocation(program, "u_time");

        // Функция для обновления рендера
        const render = (time) => {
            time *= 0.001; // переводим миллисекунды в секунды

            // Устанавливаем размеры и время
            gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
            gl.uniform1f(timeUniformLocation, time);

            // Очищаем canvas
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            // Рисуем
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);

        // Обновляем canvas при изменении размера окна
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

    }, []);

    return (
        <div className="relative">
            <footer className="relative h-72 text-white">
                <canvas id="canvas" ref={canvasRef} className="absolute inset-0 w-full h-full" />
                <div className="my-container absolute pt-[200px] inset-0 flex items-center justify-between text-2xl font-bold">
                    <p className='font-medium text-xl'>+7 800 550-98-04</p>
                    <motion.a whileHover={{scale:1.1}} href="\">БурИнформ</motion.a>
                    <p className='text-[#F7A539] font-medium text-xl'>ByrMoscow@mail.ru</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
