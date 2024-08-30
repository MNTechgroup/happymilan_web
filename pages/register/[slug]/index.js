import { useRouter } from 'next/router';
import React from 'react';

// Define all sections and their order
const sections = ['general', 'address', 'contact', 'summary'];


function Form() {



    function GeneralSection() {
        return <div>General Section Content</div>;
    }

    function AddressSection() {
        return <div>Address Section Content</div>;
    }

    function ContactSection() {
        return <div>Contact Section Content</div>;
    }

    function SummarySection() {
        return <div>Summary Section Content</div>;
    }





    const router = useRouter();
    const { slug } = router.query;

    const currentIndex = sections.indexOf(slug);

    const handleNext = () => {
        if (currentIndex < sections.length - 1) {
            router.push(`?slug=${sections[currentIndex + 1]}`);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            router.push(`?slug=${sections[currentIndex - 1]}`);
        }
    };

    function renderSection(slug) {
        switch (slug) {
            case 'general':
                return <GeneralSection />;
            case 'address':
                return <AddressSection />;
            case 'contact':
                return <ContactSection />;
            case 'summary':
                return <SummarySection />;
            default:
                return <div>Select a section</div>;
        }
    }

    React.useEffect(() => {
        if (!slug) {
            router.push(`?slug=${sections[0]}`);
        }
    }, [slug, router]);
    

    return (
        <div>
            {renderSection(slug)}
            <div className="buttons">
                {currentIndex > 0 && (
                    <button onClick={handleBack}>Back</button>
                )}
                {currentIndex < sections.length - 1 && (
                    <button onClick={handleNext}>Continue</button>
                )}
            </div>
        </div>
    );
}

export default Form;
