import React from 'react';
import final from '../images/final.gif';
import Stripe from '../components/Donations/Stripe';

class Donations extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="wrapper" className="gray-bg">
                <div className="text-center donation-top">
                    <img src={final} height="50px" width="50px" alt="logo" />
                    <img src={final} height="50px" width="50px" alt="logo" />
                    <img src={final} height="50px" width="50px" alt="logo" />
                    <img src={final} height="50px" width="50px" alt="logo" />
                </div>
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox">
                                <div className="ibox-content">
                                    <div className="panel-group payments-method" id="accordion">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <div className="pull-right">
                                                    <i className="fa fa-cc-paypal text-primary"/>
                                                </div>
                                                <h5 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">PayPal</a>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <h2>Summary</h2>
                                                            <strong>Alley OOP</strong>: <span className="text-navy">Donation</span><br/>
                                                            <p className="m-t">
                                                                Paypal's easy right? Making this site wasn't...
                                                                Show your support. Thanks!
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <form id="paypalForm" name="_xclick" action="YOUR PAYPAL ACC" method="post">
                                                                <input type="hidden" name="cmd" value="_donations"/>
                                                                <input id="donation-amount" type="hidden" name="amount" value=""/>
                                                                <input type="hidden" name="business" value={this.state.email}/>
                                                                <input type="hidden" name="item_name" value="My Donation"/>
                                                                <input type="hidden" name="return" value="THANK YOU PAGE"/>
                                                                <input type="hidden" name="cancel_return" value="DONATION PAGE"/>
                                                                <input type="hidden" name="currency_code" value="USD"/>
                                                                <div className= "form-group col-md-4">
                                                                    <label>Amount</label>
                                                                    <br/>
                                                                    <select className = "amount form-control" name="amount" id="amount">
                                                                        <option value=""> Please Select an Amount</option>
                                                                        <option value="3.00">$3.00</option>
                                                                        <option value="10.00">$10.00</option>
                                                                        <option value="20.00">$20.00</option>
                                                                        <option value="50.00">$50.00</option>
                                                                        <option value="100.00">$100.00</option>
                                                                        <option value="0.00">Other</option>
                                                                    </select>
                                                                    <br/>
                                                                    <button type="image" className= "btn btn-success fa fa-cc-paypal" name="PP-submit" alt="Make a donation with PayPal">  Donate
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <div className="pull-right">
                                                    <i className="fa fa-cc-amex text-primary"></i>
                                                    <i className="fa fa-cc-mastercard text-warning"></i>
                                                    <i className="fa fa-cc-discover text-danger"></i>
                                                </div>
                                                <h5 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Credit Card</a>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <h2>Summary</h2>
                                                            <strong>Alley OOP</strong>: <span className="text-navy">Donation</span><br/>
                                                            <p className="m-t">
                                                                If you don't have a Paypal account or you just want to type in everything manually...
                                                                feel free to send me money using Stripe.
                                                            </p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <Stripe onClick= {this.stripeChargeToken}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donations