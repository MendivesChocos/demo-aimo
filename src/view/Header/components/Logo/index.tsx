import React from 'react'
import { Svg } from './styled'
import { Link } from 'react-router-dom';

const Logo = props => (
  <Link to='/'>
    <Svg
      width={489.412}
      height={122.021}
      viewBox="5.294 13.989 489.412 122.021"
      style={{
        background: '0 0',
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter id="prefix__editing-extrude-glow">
          <feFlood floodColor="#333" result="flood-1" />
          <feMorphology radius={1} in="SourceAlpha" result="erode" />
          <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
          <feConvolveMatrix
            order="3,3"
            divisor={1}
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 0 1 1 1 0 0 0"
          />
          <feOffset dx={-3} in="convolve" result="extrude" />
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          />
          <feFlood floodColor="rgba(0%,0%,0%,0)" result="flood-2" />
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          />
          <feMorphology operator="dilate" radius={1} in="comp2" result="dilate" />
          <feOffset dx={-4.5} in="dilate" result="offset" />
          <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
          <feComponentTransfer in="blur" result="shadow">
            <feFuncA type="linear" slope={0.8} intercept={-0.2} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="comp-extrude" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-extrude-glow)">
        <path
          d="M121.1 72.198q0 27.26-29.56 27.26-4.74 0-12.55-1.15l7.17-37.82q.51-2.56.83-4.03 9.73-.71 14.05-.71t8.29.9q3.97.89 6.59 2.88 5.18 3.9 5.18 12.67zm-13.18-2.37q0-9.53-6.85-9.53h-.64q-.32 0-.64.06l-6.59 34.37q.26.13.51.13h.51q2.37 0 4.84-1.48 2.46-1.47 4.38-4.48 4.48-6.97 4.48-19.07zm42.37 18.11q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11t-7.01-.96q-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.44 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.36 3.2-3.71 10.63zm67.27 19.07q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.53 2.2-2.24 6.62l-3.96 20.16-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.48 0-3.08 2.17-1.6 2.18-2.49 6.66l-3.91 20.16-12.6 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.66-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.79 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31t5.12.74q1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.9 4.1-.9 5.6t.87 2.4q.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.2 1.28-5.08 1.28zm26.81 0q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62zm63.48 27.84q-8.19 0-8.96-11.65h-11q-1.28 2.95-2.18 5.51l-1.66 4.86h-8.96l20.16-42.24h13.76l2.68 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71zM282 75.588l-3.52 8.13h8.83l-.77-16.45v-1.73L282 75.588zm40.58 19.65q-1.99 4.8-8.32 4.8-3.27 0-5.32-2.24-1.72-1.98-1.72-3.97 0-5.18 2.36-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm-9.48-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.83 1.35 1.83 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.89-1.28-1.89-3.78zm61 42.82q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.53 2.2-2.24 6.62l-3.96 20.16-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.48 0-3.08 2.17-1.6 2.18-2.49 6.66l-3.91 20.16-12.6 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.66-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.79 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31t5.12.74q1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.9 4.1-.9 5.6t.87 2.4q.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.2 1.28-5.08 1.28zm26.81 0q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62z"
          fill="#eb6c6c"
        />
      </g>
      <style />
    </Svg>
  </Link>
)

export default Logo
