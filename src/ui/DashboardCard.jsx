import React from 'react'

import { Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

import './ui.scss'

function DashboardCard({props}) {
  return (
    <div className='col-4'>
      <div className='card'>
        <h4>Revenue</h4>

        <div className='card_body dashboard-card'>
          <div>
            <h2>{props.total}</h2>
            <p>{props.des}</p>
          </div>

          <div className='tagCard'>
            {
              (props.growth > '0') ? (
                <Tag icon={<ArrowUpOutlined/>} className='tagCard-tag'>{props.growth}</Tag>
              ) : (
                <Tag icon={<ArrowDownOutlined />} className='tagCard-tag--red'>{props.growth}</Tag>
              )
            }
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardCard