import React from 'react';
import { images } from '../../constants';

function ErrorPage() {
    return (
        <section className="error_page">
            <div className="container w-100 my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <img src={images.emoji} alt="" style={{transform:"scale(0.7)"}}/>
                    <h1 className="text-body-emphasis">CYONITE Not Found!</h1>
                    <p className="lead">
                    We couldn't find any member matching your search criteria. Please check the spelling, try a different search term, or contact our support team for assistance. Our members are important to us, and we want to help you find the information you're looking for.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default ErrorPage;