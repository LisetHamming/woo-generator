import React from "react";
import bg from "./../../../assets/icons/orange-single-line.png";

function HomepageWaarom() {
    return (
        <div className="sectionWaarom">
            <div className="sectionBlock">
                <div>
                    <h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
                        Why a Woo request?
                    </h1>
                    <p>
                        Everyone has the right to request information contained in documents from the government. The Open Government Act
                        ("Woo") regulates what such a request must meet. A Woo request is crucial to access information that the government
                        does not disclose voluntarily. Check{" "}
                        <a href="https://wetten.overheid.nl/BWBR0005252/2018-07-28" className="plaintext" target="_blanc">
                            here
                        </a>{" "}
                        for the Open Government Act.
                    </p>
                </div>
                <div>
                    <h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
                        {" "}
                        How do I make a Woo request?
                    </h1>
                    <p>
                        Drafting a Woo request is not difficult, but the request must meet a number of conditions. With the Woo generator,
                        we help you draft a proper and valid Woo request. Choose which documents you want to request and from which government
                        agency. We have compiled the first easily searchable list of government agencies in the Netherlands subject to the Woo.
                        Done! You can now save your Woo request and send it by mail or digitally.
                    </p>
                </div>
                <div>
                    <h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
                        Why a Woo generator?
                    </h1>
                    <p>
                        Quite a few journalists think filing a Woo request is a mysterious legal trick. That is exaggerated, but there is a
                        grain of truth to it: there are quite a few points to watch out for. With the Woo generator, you don't have to worry
                        about overlooking anything. Get started!
                    </p>
                </div>
                <div>
                    <h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
                        When shouldn't I file a Woo request?
                    </h1>
                    <p>
                        You use a Woo request only for documents that are not yet public. Before you submit a Woo request, you should then
                        check if what you're looking for is already public. For example, you can look{" "}
                        <a href="https://open.overheid.nl/" className="plaintext" target="_blanc">
                            here
                        </a>{" "}
                        for documents which (a subset of) the Dutch government has made public.
                    </p>
                    <br></br>
                    <p>
                        Further, keep in mind that the government does not have to disclose all information: the Woo has a number of grounds
                        for refusal such as business confidentiality and respect for privacy. 
                    </p>
                </div>
            </div>
        </div>
    );
}
export default HomepageWaarom;
