import { Row, Col, Card } from 'antd'

function QuoteList() {
  return (
    <div className='site-card-wrapper'>
      <Row gutter={16}>
        <Col lg={6} md={8} sm={12} xs={24}>
          <Card hoverable>
            <h3>Be Comfortable with the Uncomfortable.</h3>
            <p>&mdash; Todd Albert</p>
          </Card>
        </Col>
        <Col lg={6} md={8} sm={12} xs={24}>
          <Card hoverable>
            <h3>It's better to overdress than underdress.</h3>
            <p>&mdash; Chris De Leon</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default QuoteList
