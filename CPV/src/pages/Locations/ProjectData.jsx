import React from 'react'
import { Table , Row, Col, Button } from 'reactstrap'

export default function ProjectData({handleProjectTableToggle}) {
  return (
    <Row>
        <Col sm={5}>
            <div className='projectData'>
                <Table  responsive>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="table-primary ps-3">
                                Address: 
                            </th>
                            <td>
                                Riyadh / KSA
                            </td>
                        </tr>
                        <tr>
                            <th className="table-primary ps-3">
                                Website:
                            </th>
                            <td>
                                www.Cpvarabia.com
                            </td>
                        </tr>
                        <tr>
                            <th className="table-primary ps-3">
                                Prepared By:
                            </th>
                            <td>
                              Eng. Mahmoud Elmasry
                            </td>
                        </tr>
                        <tr>
                            <th className="table-primary ps-3">
                                Email:
                            </th>
                            <td>
                                mmasry@cpvarabia.com
                            </td>
                        </tr>
                        <tr>
                            <th className="table-primary ps-3">
                                Phone:
                            </th>
                            <td>
                                966553304612
                            </td>
                        </tr>
                        <tr>
                            <th className="table-primary ps-3">
                                Position:
                            </th>
                            <td>
                                Design Review Department Manager
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Col>
        <Col sm={7}>
            <div>
            <Table  responsive>
                <thead>
                    <tr className="table-success ps-3">
                        <th>
                            Total Project's
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-primary ps-3">
                            3401 
                        </td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </Col>
        <Col sm={12}>
            <div className='col-sm-12'>
                <Button onClick={handleProjectTableToggle} color='primary' className='m-auto d-block'>
                    Statistics
                </Button>
            </div>
        </Col>
    </Row>
  )
}
