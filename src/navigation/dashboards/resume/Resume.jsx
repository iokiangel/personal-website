import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Resume.css';
import resume from '../../../static/resume/Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
    state = {
        file: resume,
        pageNumber: 1,
        numPages: null
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { file, pageNumber, numPages } = this.state;

        return (
            <div className="resume">
                <Document
                    file={file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    {
                        Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            ),
                        )
                    }
                </Document>
            </div>
        );
    }
}

export default Resume;