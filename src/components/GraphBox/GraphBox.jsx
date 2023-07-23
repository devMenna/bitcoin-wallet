import React from 'react';
import CryptoCardBox from '../CryptoCardBox/CryptoCardBox';
import {
  Area,
  AreaChart,
  ReferenceDot,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
} from 'recharts';
import { FiberManualRecord } from '@mui/icons-material';
import './graph-box.css';

const data = [
  {
    name: 'Page A',
    uv: 400,
  },
  {
    name: 'Page B',
    uv: 800,
  },
  {
    name: 'Page C',
    uv: 900,
  },
  {
    name: 'Page D',
    uv: 750,
  },
  {
    name: 'Page E',
    uv: 1000,
  },
  {
    name: 'Page F',
    uv: 990,
  },
];

const GraphBox = () => {
  return (
    <CryptoCardBox>
      <div className='flex-container'>
        <div className='lower-container'>
          <FiberManualRecord
            sx={{ color: ' #ef2755', fontSize: 'small', marginRight: '5px' }}
          />
          Lower: $4.895
        </div>
        <div className='higher-container'>
          <FiberManualRecord
            sx={{ color: '#1ec070', fontSize: 'small', marginRight: '5px' }}
          />
          Higher: $6.857
        </div>
      </div>
      <div style={{ width: '100%', height: 100 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 12,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#FF8F17' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#FFC843' stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' hide={true} />
            <YAxis hide={true} />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='url(#colorUv)'
              fill='#FFF7EE'
              strokeWidth={3}
            />

            <ReferenceDot
              x={data[1].name}
              y={data[1].uv - 500}
              stroke='#FFE7C7'
              strokeWidth={5}
              fill='#FF931A'
              r={7}
            >
              <Label
                value='1BTC: $5.483'
                position='right'
                fill='#4c5968'
                style={{
                  fontSize: 'small',
                  fontWeight: 'bold',
                  padding: '0px 90px',
                  opacity: '0.8',
                }}
              />
            </ReferenceDot>
            <ReferenceDot
              x={data[data.length - 1].name}
              y={data[data.length - 1].uv}
              stroke='#FFE7C7'
              fill='#FFE7C7'
              r={12}
              fillOpacity={1}
            />
            <ReferenceDot
              x={data[data.length - 1].name}
              y={data[data.length - 1].uv}
              stroke='url(#colorUv)'
              fill='url(#colorUv)'
              r={8}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CryptoCardBox>
  );
};

export default GraphBox;
