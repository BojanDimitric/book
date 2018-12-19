import React from 'react';

const Footer = () => {
    return (
        <div className="container-fixed fixed-bottom bg-info">
            <div className="row">
                <footer className="page-footer font-small w-100 order-3 blue">
                    <div className="footer-copyright py-3">
                        <p className="text-center text-white">
                            © 2018 Copyright:<a href="/feed"> Bojan Dimitric</a>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export {
    Footer
}; 