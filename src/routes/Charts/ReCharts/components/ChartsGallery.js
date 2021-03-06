/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react'
import { Row, Col } from 'antd'
import {
  SimpleLineChart,
  BarChart,
  RadialBarChart,
  RadarChart
} from 'components/Recharts'
import Card from 'components/Card'

class ChartsGallery extends React.Component {
  render () {
    return (
      <div className='gutter-example'>
        <Row gutter={16}>
          <Col className='gutter-row' md={24}>
            <div className='gutter-box'>
              <Card title='基础线形图'>
                <SimpleLineChart />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className='gutter-row' md={24}>
            <div className='gutter-box'>
              <Card title='基础线形图'>
                <BarChart />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className='gutter-row' md={12}>
            <div className='gutter-box'>
              <Card title='基础线形图'>
                <RadialBarChart />
              </Card>
            </div>
          </Col>
          <Col className='gutter-row' md={12}>
            <div className='gutter-box'>
              <Card title='基础线形图'>
                <RadarChart />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ChartsGallery
