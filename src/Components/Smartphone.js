import React, { Component } from 'react';
import ModalSmartphone from './ModalSmartphone';
import swal from 'sweetalert';

class Smartphone extends Component {
    handleCart = () => {
        swal({
            title: "Đồng ý mua hàng?",
            text: "Vui lòng click OK để xác nhận thanh toán.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Thanh toán thành công, cảm ơn bạn đã mua hàng!", {
                    icon: "success",
                });
            } else {
                swal("Huỷ đơn thành công!");
            }
        });
    }

    render() {
        return (
            < div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" >
                <div className="container">
                    <div className="card bg-light" style={{ width: '300px' }}>
                        <img className="card-img-top" src={this.props.img} alt="smartphone" style={{ maxWidth: '100%', height: '250px' }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center"> {this.props.name} </h4>
                            <h4 className="card-title text-center"> {this.props.price} </h4>
                            <p className="card-text"> {this.props.desc} </p>
                            <a className="btn btn-primary" data-toggle="modal" data-target={`#${this.props.id}`} > Detail </a>
                            <a className="btn btn-danger" onClick={this.handleCart} > Cart </a>
                        </div>
                    </div>
                </div>
                {/* Popup modal */}
                <ModalSmartphone
                    id={this.props.id}
                    price={this.props.prica}
                    screen={this.props.screen}
                    backCamera={this.props.backCamera}
                    frontCamera={this.props.backCamera}
                />
            </div >
        )
    }
}

export default Smartphone;