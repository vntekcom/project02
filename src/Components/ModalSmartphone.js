import React, { Component } from 'react'

class ModalSmartphone extends Component {
    render() {
        return (
            <div className="modal fade" id={this.props.id} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body" style={{textAlign: 'left'}} >
                            <table className="table">
                                <tbody>
                                    <tr className="info">
                                        <td>Screen</td>
                                        <td> {this.props.screen} </td>
                                    </tr>
                                    <tr className="success">
                                        <td>Back Camera</td>
                                        <td> {this.props.backCamera} </td>
                                    </tr>
                                    <tr className="danger">
                                        <td>Front Camera</td>
                                        <td> {this.props.frontCamera} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ModalSmartphone;