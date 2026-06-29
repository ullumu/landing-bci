
const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">Support by Technology</p>
           <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-center gap-5 sm:gap-40 opacity-45 logos-container">
                {/* <span>Odoo</span>
                <span>MYOB</span> */}
                {/* <span>XERO</span> */}

                {/* Notion */}
                <img
                src="/images/logo-odoo.svg"   // file ada di public/images
                alt="Odoo Logo"
                width={130}
                height={50}
                className="w-32 h-auto"
                />

                <img
                src="/images/logo-myob.png"   // file ada di public/images
                alt="Myob Logo"
                width={129}
                height={48}
                className="w-32 h-auto"
                />

                <img
                src="/images/logo-xero.svg"   // file ada di public/images
                alt="xero Logo"
                width={129}
                height={48}
                className="w-32 h-auto"
                />

                {/* Stripe */}
                {/* <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6">
                    <path fillRule="evenodd" clipRule="evenodd" d="" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="" fill="black" />
                    <path d="" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="" fill="black" />
                </svg> */}


               
            </div>
        </section>
    )
}

export default Logos