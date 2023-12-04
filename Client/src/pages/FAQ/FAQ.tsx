const FAQ: React.FC = () => {
  return (<>
<div className="container mt-5">
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>

            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="faqHeading1">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                                Question 1: What products do you offer?
                            </button>
                        </h5>
                    </div>

                    <div id="faqCollapse1" className="collapse show" aria-labelledby="faqHeading1" data-parent="#accordion">
                        <div className="card-body">
                            We offer a wide range of high-quality grocery products, fresh produce, and household essentials.
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="faqHeading2">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                                Question 2: How can I place an order?
                            </button>
                        </h5>
                    </div>

                    <div id="faqCollapse2" className="collapse" aria-labelledby="faqHeading2" data-parent="#accordion">
                        <div className="card-body">
                            To place an order, simply log in to our app, browse products, and add them to your cart. Proceed to checkout to complete your order.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

 );
};

export default FAQ;

